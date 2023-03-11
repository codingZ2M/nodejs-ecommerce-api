const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");

const app = express();
const port = process.env.PORT || 5000;

connectDb();

// Defining a custom middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Using/Loading the custom middleware function (logger) for all requests
app.use(logger);


// Using middlewares with 'app.use()'
app.use(express.json());  // Middleware for Body parsing
app.use("/api/products", require("./routes/productRoutes")); //middleware

app.use("/api/orders", require("./routes/orderRoutes")); //middleware

app.use("/api/users", require("./routes/userRoutes")); 

app.use(errorHandler);  // Custom Middleware for Error Handling


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
