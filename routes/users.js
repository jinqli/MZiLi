const router = require("koa-router")();

router.prefix("/user");

router.get("/register", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

router.get("/login", function (ctx, next) {
  ctx.body = "this is a users response!";
});

module.exports = router;
