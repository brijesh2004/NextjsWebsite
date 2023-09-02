import mongoose from "mongoose";

const MONGODB_URL = "mongodb+srv://brijesh122004:nextwebsite@cluster0.v3jio1o.mongodb.net/userdata?retryWrites=true&w=majority";

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URL environment variable inside .env.local"
    )
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

const dbConnect = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
