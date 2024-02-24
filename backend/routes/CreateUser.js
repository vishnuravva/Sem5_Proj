const express = require('express')
const router = express.Router()
const { body, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require('../models/User')

const jwtSecret = "heyHelloWelcomeToGoFoodMern"
// serverurl="https://iaadi.mugen.ae"
// endpoint=-"/api/method/ping"

router.post('/createuser',
    [
        body('email', 'Enter a valid email address').isEmail(),
        body('name', 'Name field cant be kept empty').isLength({ min: 5 }),
        body('password', 'Password should be minimum legth of 5').isLength({ min: 5 }),
        body('mobileno', 'Mobile number should be 10 digits').isLength({ max: 10, min: 10 })
    ]
    , async (req, res) => {
        const errors = validationResult(req)
        console.log(errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10)
        let secPassword = await bcrypt.hash(req.body.password, salt)
        try {
            await User.create({
                name: req.body.name,
                mobileno: req.body.mobileno,
                email: req.body.email,
                password: secPassword,
            })
            res.json({ success: true })
        }
        catch (err) {
            console.log(err)
            res.json({ success: false })

        }
    })

router.post('/loginuser',
    [
        body('email').isEmail(),
        body('password', 'incorrect password').isLength({ min: 5 })
    ], async (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email

        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try logging with correct credentials" })
            }
            const passwordCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!passwordCompare) {
                return res.status(400).json({ errors: "Try logging with correct credentials" })
            }
            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret)
            return res.json({ success: true, authToken: authToken })

        }
        catch (err) {
            console.log(err)
            res.json({ success: false })

        }
    })

router.post('/verify-registered-user', async (req, res) => {
    const { email } = req.body;
    try {
        const isRegistered = await User.findOne({ email })
        
        if(isRegistered){
            // alert('Already registered with this email')
            return res.status(200).json({registered:true})
        }else{
            return res.status(200).json({registered:false})
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Server error' });
      }
})

router.get('/getUsers',async(req,res) => {
    try{
        const users = await User.find();
        return res.status(200).json(users);
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Server error"});
    }
})

module.exports = router