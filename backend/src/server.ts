import path, { join } from "path"
import express, { NextFunction,Request,Response } from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDb from "./config/db";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

import uploadRoutes from "./routes/uploadRoutes"
import postRoutes from "./routes/postRoutes"

dotenv.config({path:path.join(__dirname,"..","config.env")})

connectDb();

colors.enable();

const app=express();

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("API IS RUNNING...");
  });

app.use("/api/addpost",postRoutes)
app.use("/api/upload",uploadRoutes)


const ___dirname = path.resolve();
app.use("/uploads",express.static(path.join(___dirname,"/uploads")))

app.use(notFound);

app.use(errorHandler)

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold);
})