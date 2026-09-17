import bcrypt from "bcrypt"

export async function passwordHash(password) {
    return bcrypt.hash(password, 10)
}

export async function passwordCompare(password, hashPassword) {
    return bcrypt.compare(password, hashPassword)
}