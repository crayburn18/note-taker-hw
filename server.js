const express = require("express");
const htmlRoutes = require("./routes/html-routes")
const apiRoutes = require("./routes/api-routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

apiRoutes(app);
htmlRoutes(app);


app.listen(PORT, function () {
    console.log(`App listening on  http://localhost:${PORT}`);
});