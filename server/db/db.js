import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGO_URL || "mongodb://localhost:27017")
export const db = client.db("test-week-23")
try {
    await client.connect()
    console.log("DB connected");
} catch (error) {
    console.error(error);
    process.exit(1)
}