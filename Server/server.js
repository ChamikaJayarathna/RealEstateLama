import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import "dotenv/config";
import authRoute from './routes/auth-route.js';
import postRoute from './routes/post-route.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.get("/test", (req, res) => {
    res.send("Test route is working");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});