import express from "express"
import { createUser, loginUser } from "../controller/controller.js"
// import { createUserSchema, loginUserSchema } from "../middleware/zodMiddleware.js"
// import { validate } from "../middleware/validate.js"
import { asyncWrapper } from "../service/asyncWrapper.js"
import { checkLoginBody, checkRegisterBody } from "../service/checkBody.js"


const router = express.Router()

// validate(createUserSchema),
router.post("/register", checkRegisterBody,  asyncWrapper(createUser))
// validate(loginUserSchema),
router.post("/login", checkLoginBody,  asyncWrapper(loginUser))



export default router