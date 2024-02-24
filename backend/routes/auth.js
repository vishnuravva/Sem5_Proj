const GoogleUser = require('../models/GoogleUser')
const router = require('express').Router()
const passport = require('passport')
const CLIENT_URL = 'http://localhost:3000/'

router.get("/login/success", async (req, res, next) => {


	if (req.user) {

		const { sub, name, email, picture } = req?.user?._json;

		try {
			let googleprofile = await GoogleUser.findOne({ googleId: sub })

			if (googleprofile) {
				return res.status(200).json({
					success: true,
					message: "User authenticated Successfully",
					user: req?.user,
				});
			}
			else {
				const newGoogleProfile = new GoogleUser({
					googleId: sub,
					name: name,
					email: email,
					picture: picture
				})
				googleprofile = await newGoogleProfile.save()
			}
			// res.status(200).json({
			// 	success: true,
			// 	message: "User authenticated Successfully",
			// 	user: req?.user,
			// });
		}
		catch (err) {
			return res.status(400).json({
				success: false,
				message: "User authentication failed"
			})
		}
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get('/logout', function (req, res, next) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect(CLIENT_URL);
	});
});

router.get("/google", passport.authenticate("google", { scope: ['profile', 'email'] }));

router.get('/google/callback',
	passport.authenticate('google', {
		failureRedirect: '/login/failed', // Redirect on failure
		successRedirect: CLIENT_URL
	})
);
router.get('/logout', function (req, res, next) {
	req.logout();
	res.redirect('http://localhost:3000/');
});

router.get('/googleusers',async(req,res) => {
	try{
        const googleusers = await GoogleUser.find();
        return res.status(200).json(googleusers);
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Server error"});
    }
})

module.exports = router