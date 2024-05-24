import mongoose,{ Mongoose } from "mongoose"



const MONGODB_URL=process.env.NEXT_PUBLIC_MONGODB_URL

interface MongooseConnection{
  conn:Mongoose|null
  promise:Promise<Mongoose> | null
}

let cached:MongooseConnection= (global as any).mongoose;

if(!cached){//at very beginning this line will run as cached variable is not defined in global scope
   cached=(global as any).mongoose={//defining cached variable as global.mongoose={...}
    conn:null, promise:null
   }
}


export const connectToDatabase=async () => {
    if(cached.conn)return cached.conn
    if(!MONGODB_URL) throw new Error('mongodb url not defined')
    //cached.promise is essentially mongoose.connect(...)
    cached.promise=cached.promise || mongoose.connect(MONGODB_URL,{dbName:'aipower',bufferCommands:false})
    cached.conn=await cached.promise
    return cached.conn
}