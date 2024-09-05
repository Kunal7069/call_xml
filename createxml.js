const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors(
    {
      origin: '*', // Your frontend URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true
    }
  ));
app.post('/', (req, res) => {
    // Define the XML content directly in the code
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say voice="woman">Hello, this is a test call from Twilio.</Say>
        <Say voice="woman">Thank you for your time.</Say>
    </Response>`;

    // Set the content type and send the XML content
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xmlContent);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
