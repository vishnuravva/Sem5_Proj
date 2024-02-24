const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AdminModel = require('../models/Admin')

const secretKey = 'mainadmin'

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const adminUser = await AdminModel.findOne({ username });
    
        if (!adminUser) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        if (!password) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        const data = {
            user: {
                id: adminUser.id,
                username:adminUser.username
            }
        }

        const authToken = jwt.sign(data, secretKey)
        return res.status(400).json({ success: true, authToken: authToken })

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
})

module.exports = router
