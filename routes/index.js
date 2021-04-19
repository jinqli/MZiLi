const router = require("koa-router")();
const { getArtById } = require("../controller/article");

router.get("/", async (ctx, next) => {
  const obj = { title: "koa" };
  await ctx.render("index", {
    title: obj.title,
  });
});

router.get("/article", async (ctx, next) => {
  const { id } = ctx.request.query;
  const result = await getArtById(id);
  await ctx.render("article", {
    title: result,
  });
});

router.get("/category", async (ctx, next) => {
  ctx.body = {
    title: "category",
  };
});

module.exports = router;
