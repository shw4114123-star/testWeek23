export function validate(schema){
    return (req, _res, next) => {
        const result = schema.safeParce({
            body: req.body,
            params:  req.params,
            query: req.query
        })
        if (!result.succecs) {
            const message = result.error?.issues[0]?.message
            const error = new Error(message)
            error.statusCode = 400
            return next(error)
        }
        if (result.data.body) {
            req.body = result.data.body
        }
        next()
    }
}

