import express from "express"
import appRoute from "./routes/route.js"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

/** routes */
app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
