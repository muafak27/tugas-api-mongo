const logRequest = (req, res, next) => {
    console.log('terjadi log request di:', req.path)
    next()
}

module.exports = logRequest;