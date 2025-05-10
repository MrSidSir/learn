const express = require('express');
const userRouter = require('./route/userRoute');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mount router
app.use('/user', userRouter);

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World! Your server is working.');
});

// Standalone routes (optional)
app.post('/userRoute', (req, res) => {
    res.send("Believe in yourself.");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
