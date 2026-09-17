import { createError } from "./errorHadler.js";




export function checkRegisterBody(req, _res, next){
    const body = req.body
    if (!body.userName) throw new createError("missing body", 400)
    if (!body.email || body.email === Number) throw new createError("missing body", 400)
    if (!body.password || body.password.length < 8) throw new createError("missing body", 400)
    next()
}

export function checkLoginBody(req, _res, next){
    const body = req.body
    if (!body.email || body.email === Number) throw new createError("missing body", 400)
    if (!body.password || body.password.length < 8) throw new createError("missing body", 400)
    next()
}