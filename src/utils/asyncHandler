// We can also use a third party library known as express-async-Handler to achive the funtionalitite  of the same preventing us from using repetitive try catch block


const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }
