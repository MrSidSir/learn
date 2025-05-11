const express = require('express');
const userRouter = require('./route/userRoute');
const app = express();
const PORT = 3000;
const connectDB = require('./db/db')

// Middleware
app.use(express.json());

// Mount router
app.use('/user', userRouter);





// Start server
app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running at http://localhost:${PORT}`);
});
