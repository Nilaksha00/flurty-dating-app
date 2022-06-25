const Router = require("@koa/router");
const { addUser } = require("../api/user.api");

const router = new Router({
  prefix: "/api/users",
});

router.post("/", async (ctx) => {
  let student = ctx.request.body;
  student = await addUser(student);
  ctx.response.status = 200;
  ctx.body = student;
});

module.exports = router;
