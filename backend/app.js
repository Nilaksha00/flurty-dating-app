// import Koa from "koa";
const Koa = require("koa");
require("./dal");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const app = new Koa();

app.use(bodyParser());
app.use(cors());

app.use((ctx) => {
  ctx.set("Content-Type", "text/html");
  ctx.body = "<h1>Route Not Found<h1>";
  ctx.status = 404;
});

app.listen(3000, () => {
  console.log("Application is running on port 3000");
});
