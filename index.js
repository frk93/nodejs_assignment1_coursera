const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// getting all the routes
const dishRouter = require("./routers/dishRouter");
const promoRouter = require("./routers/promoRouter");
const leaderRouter = require("./routers/leaderRouter");
app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

app.use(bodyParser.json())


app.listen(4001, () => {
  console.log("Server is created and running on port 4001")
});