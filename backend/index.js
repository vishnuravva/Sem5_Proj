const express = require('express')
const app = express()
const session = require('express-session');
const passport = require("./passport.js")
const createUser = require("./routes/CreateUser")
const cors = require("cors")
const authRoute = require("./routes/auth")
const adminRoute = require('./routes/admin')
const moviesRoute = require('./routes/movies')
const theatresRoute = require('./routes/theatres')
const paymentsRoute = require('./routes/payments')
const bookingsRoute = require('./routes/bookings')


const port = 5000
const clientPort = 3000

const connectToDb = require('./db');
connectToDb()


const allowedOrigins = ['http://localhost:3000','http://localhost:3001'];
app.use(cors({
    origin: allowedOrigins,
    credentials:true,
}))

app.use(session({
    secret: 'vish123',
    resave: false,
    saveUninitialized: true,
    name: 'login-session', // You can set the session name here
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // Set the session expiration time
    }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())

app.use('/api', createUser)
app.use('/auth', authRoute)
app.use('/admin',adminRoute);
app.use('/admin',moviesRoute);
app.use('/admin',theatresRoute);
app.use('/api',paymentsRoute);
app.use('/api',bookingsRoute);




app.listen(port, (req, res) => {
    console.log('Listening on port ', port)
})