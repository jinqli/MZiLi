const router = require("koa-router")();
const { getArtById, articleList } = require("../controller/article");

router.get("/", async (ctx, next) => {
  const obj = { title: "koa" };
  await ctx.render("index", {
    title: obj.title,
  });
});
// article-list
router.get("/article-list", async (ctx, next) => {
  const result = await articleList();
  await ctx.render("article-list", {
    data: result,
  });
});

router.get("/article-detail", async (ctx, next) => {
  const { id } = ctx.request.query;
  const result = await getArtById(id);
  await ctx.render("article-detail", {
    article: result,
  });
});

router.get("/category", async (ctx, next) => {
  ctx.body = {
    title: "category",
  };
});

module.exports = router;
