const express = require('express');
const userRouter = require('./route/userRoute');
const app = express();
const PORT = 3000;

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Hello, World! Your server is working.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
