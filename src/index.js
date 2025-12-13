const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const authProducts = require("./routes/productRoutes");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./config/swagger");
const orderRoutes = require("./routes/orderRoutes")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
connectDB();

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/auth", authRoutes);
app.use("/api/products", authProducts)
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT == null ? 8000 : process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`🚀 Server is running on https://sardor-s-shop-beckent-5.onrender.com`);
  console.log(`📄 Swagger docs available at http://localhost:${PORT}/api-docs`);
});