import { createUserDAL, getUserByEmailDAL } from "../DAL/dal.js"
import { passwordCompare, passwordHash } from "../service/bcrptPassword.js"
import { createError } from "../service/errorHadler.js"
import { ganerateToken } from "../service/generateToken.js"


export async function createUser(req, res) {
    const { userName, email, password } = req.body
    const exsistsUser = await getUserByEmailDAL(email)
    if (exsistsUser) throw new createError("user already exists", 409)
    const hashPass = await passwordHash(password)
    const user = await createUserDAL(userName, email, hashPass)
    delete user.hashPass
    res.status(201).json(user)
}

export async function loginUser(req, res) {
    const { email, password } = req.body
    const exsistsUser = await getUserByEmailDAL(email)
    if (!exsistsUser) throw new createError("user not found", 404)
    const comparePass = passwordCompare(password, exsistsUser.hashPass)
    if (!comparePass) throw new createError("email / password not correct", 401)
    const token = ganerateToken(exsistsUser._id)
    delete exsistsUser.hashPass
    res.json({...exsistsUser, token})
}