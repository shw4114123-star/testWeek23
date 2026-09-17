import jwt from "jsonwebtoken"
import "dotenv/config"


export function ganerateToken(userId) {
    return jwt.sign({ userId }, process.env.TOKEN, {expiresIn: process.env.TIME_TOKEN})
}

export function verifyToken(token){
    return jwt.verify(token, process.env.TOKEN)
}