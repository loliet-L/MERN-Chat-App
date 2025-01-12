import mongoose from "mongoose";

function connect(options) {1
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log('Connected to Mongoose');
    }).catch(err =>{
        console.log(err);
    });
}

export default connect;