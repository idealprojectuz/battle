const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const path = require("path");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//routelar
// fetch(baseUrl + "/catgeory/get/all").then(d => console.log(d))
app.use("/category", require("./controller/category/route"));
app.use("/country", require("./controller/country/route"));
app.use("/club", require("./controller/club/route"));
app.use("/events", require("./controller/events/route"));
app.use("/stadions", require("./controller/stadions/route"));
app.use("/newscategory", require("./controller/newscategory/route"));
app.use("/news", require("./controller/news/route"));
app.use("/users", require("./controller/users/route"));
app.use("/gools", require("./controller/gools/route"));

app.listen(PORT, () => console.log("server listen port: " + PORT));
