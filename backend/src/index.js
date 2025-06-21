import {connectDB} from "./db/index.js";
import dotenv from "dotenv"
import {app} from "./app.js";

dotenv.config();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.info("Server running on port " + process.env.PORT || 4000);
    })
}).catch((err) => {
    console.log("Server failed to connect", err);
})