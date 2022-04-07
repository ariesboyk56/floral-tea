import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
const app = express();

import authRoute from "./routes/auth.js"
// const teaRoute = require("./routes/teas");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connection Successfull!")).catch((err) => console.log(err))

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
// app.use("/api/teas", teaRoute);

app.listen(5050, () => {
    console.log("Backend is running")
});