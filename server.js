if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const server = require("http").createServer(app);
const routes = require('./src/routes/web')
var expressEjsExtend = require('express-ejs-extend');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(express.static("./src/public"));


app.use(upload.array());
app.use(express.static('public'));
app.engine("ejs", expressEjsExtend);
app.set("view engine", "ejs");
app.set("views", "./src/views")

app.use(express.urlencoded({ extended: false }))

routes.initWebRouter(app);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});