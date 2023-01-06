const express = require("express")
const connectDB = require("./config/db")
const NotificationRouter = require("./routes/NotificationRouter")
const swaggerUi = require("swagger-ui-express")
const swaggerDocs = require("swagger-jsdoc")
const app = express()
require('dotenv').config()
const { use } = require("express/lib/application")
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerDoc = YAML.load('./api.yaml')

app.use(express.json())
app.use("/notification",NotificationRouter)


app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDoc))
// Root route of express app
app.get("/", (req, res) => {
  res.send("<h1>Notification Documentation <br/> </h1><a href='/api-docs'>View Documentation</a>");
});
app.get("*", (req, res) => {

 res.send("PAGE NOT FOUND");
 
});
connectDB(app)
