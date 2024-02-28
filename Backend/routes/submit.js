const express = require('express');
const router = express.Router();
const multer = require('multer');
const User = require('../Model/user_Schema');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.array('upload_docs', 10), async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) 
        {
            return res.status(400).send('No files uploaded.');
        }
        const {
            firstname,
            lastname,
            email,
            dob,
            residential_address,
            permanent_address
        } = req.body;

        const uploadDocs = req.files.map(file => ({
            file_name: file.originalname,
            type: file.mimetype,
            file_content: file.buffer.toString('base64') // Convert Buffer to base64 string
        }));

        const newUser = new User({
            firstname,
            lastname,
            email,
            dob,
            residential_address,
            permanent_address,
            upload_docs: uploadDocs 
        });

        await newUser.save();

        return res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
