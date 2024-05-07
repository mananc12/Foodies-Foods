require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./utils/db");
const router = require("./routers/app.routers");
const errorMiddleware = require("./middlewares/error-middleware");
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
