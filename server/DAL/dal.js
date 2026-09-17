import { db } from "../db/db.js";


const users = db.collection("users")


export async function getUserByEmailDAL(email) {
    const data = await users.findOne({ email })
    return data
}

export async function createUserDAL(userName, email, hashPass) {
    const user = {userName, email, hashPass, createAt: new Date}
    const data = await users.insertOne(user)
    user._id = data.insertedId
    return user 
}

