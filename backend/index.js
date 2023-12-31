const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    // Access the uploaded file via req.file
    const fileBuffer = req.file.buffer;

    // In a real-world scenario, you would save the file to storage (e.g., AWS S3, local file system, etc.)

    // Respond with a success message or the file URL/path
    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});