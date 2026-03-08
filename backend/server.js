import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectdb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// APP Config
const app = express();
const port = process.env.PORT || 4000;
connectdb();
connectCloudinary();
// console.log(process.env.MONGODB_URI);

// Middlewares
app.use(express.json())
app.use(cors())

// Endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);



app.get('/' , (req,res)=>{
    res.send('API WORKING')
} )

app.listen(port,()=>{
    console.log('Server is listening on Port :'+ port)
} )
