//Connect mongodb
const mongoose = require("mongoose");
const server = process.env.DB_HOST;
const dbname = process.env.DB_NAME;

// class Database {
//     constructor() {
//         this._connect();
//     }

//     _connect() {
//         mongoose.connect(`${server}/${dbname}`)
//         .then(() => {
//             console.log("Connected to db");
//         })
// .       catch(err => {
//         console.log(err);
//         })
//     }
// }
const connect = () => {
    mongoose.connect(`${server}/${dbname}`)
        .then(() => {
            console.log("Connected to db");
        })
.       catch(err => {
        console.log(err);
        })
}
    
//module.exports = new Database();
module.exports = connect;