const multer = require('multer')

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true)
    } else {
        cb(new Error('File must be .PNG or .JPG or .JPEG'), false)
    }
}
const maxSize = 1 * 1024 * 1024
const upload = multer({
    storage,
    limits: { fileSize: maxSize },
    fileFilter
}).single('image')

const multerUpload = (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ "message": err.message });

        } else if (err) {
            return res.status(400).json({ "message": err.message });

        }
        next()
    })
}

module.exports = multerUpload