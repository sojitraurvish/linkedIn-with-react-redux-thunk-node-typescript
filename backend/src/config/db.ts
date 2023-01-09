import mongoose from "mongoose";

const connectDb=async()=>{
    if(process.env.MONGO_URI){

        try{
            const conn=await mongoose.connect(process.env.MONGO_URI,{
                // useUnifiedTropology:true,
                // useNewUrlParser:true,
                // useCreateIndex:true
            })
    
            console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline)
        }
        catch(error:any){
            console.error(`Error: ${error.message}`.red.underline.bold)
            process.exit(1);
        }
    }else{
        console.log("Error : MONGO_URI define into env file or not able to read it".red);
        
    }
}

export default connectDb