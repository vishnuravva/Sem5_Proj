const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://bmsmern:bmsmern@cluster0.yvp8cp7.mongodb.net/bms_mern?retryWrites=true&w=majority";

const connectToDb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
      } catch (err) {
        console.log(err);
      }
}


module.exports = connectToDb