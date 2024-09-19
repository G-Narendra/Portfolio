require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Set the port from the environment variable or default to 5000
const port = process.env.PORT || 5000;

// Middleware setup
// app.use(cors({
//  origin: 'http://localhost:3000' //'https://g-narendra-portfolio.netlify.app'  // Specify your frontend domain
// }));
app.use(cors({
  origin: 'http://localhost:3000',  // Allow only your React frontend
  methods: ['GET', 'POST'],         // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type']   // Specify allowed headers
}));
// app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio Backend!');
});

// Email sending route
app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER, // your Gmail address from .env
      pass: process.env.SMTP_PASS // app-specific password from .env
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_USER,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message: ', error);
    res.status(500).json({ error: 'Error sending message.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
