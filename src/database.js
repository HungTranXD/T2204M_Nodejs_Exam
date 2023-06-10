//Connect mongodb
const mongoose = require("mongoose");
const server = process.env.DB_HOST;
const dbname = process.env.DB_NAME;

const connectToDb = () => {
    mongoose.connect(`${server}/${dbname}`)
        .then(() => {
            console.log("Connected to db");
        })
.       catch(err => {
        console.log(err);
        })
}
    
module.exports = connectToDb;