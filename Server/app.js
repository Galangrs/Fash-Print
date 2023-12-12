const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const hadleError = require("./middleware/hadleError");

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const routerMain = require("./routers/main.js");

app.use("/", routerMain);

app.use(hadleError);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
