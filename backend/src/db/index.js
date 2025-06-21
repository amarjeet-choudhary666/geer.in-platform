import mongoose from "mongoose";


const connectDB = async () => {
    try{
        const connectionInstances = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "E-commerce"
        })
        console.log('Connected to MongoDB', connectionInstances.connection.host);
    }catch (err) {
        console.log("failed to connect to MongoDB", err);
        process.exit(1)
    }
}

export {connectDB}
