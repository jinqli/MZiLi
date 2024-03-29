const router = require("koa-router")();
const {
  addArticle,
  updateArticle,
  delArticle,
  articleList,
  getArticleById,
  getArtList,
  getArtById,
  getArtByClassify,
} = require("../controller/article");

router.prefix("/api");

router.post("/addArticle", async (ctx, next) => {
  // 获取文章信息
  const article = ctx.request.body;
  try {
    await addArticle(article);
    ctx.body = 0;
  } catch (error) {
    ctx.body = -1;
  }
});

router.post("/updateArticle", async (ctx, next) => {
  const { _id } = ctx.request.body;
  const article = ctx.request.body;
  await updateArticle(_id, article);
  ctx.body = 0;
});

router.get("/delArticle", async (ctx, next) => {
  const { _id } = ctx.request.query;
  try {
    await delArticle(_id);
    ctx.body = {
      errno: 0,
    };
  } catch (error) {
    ctx.body = {
      errno: -1,
    };
  }
});

router.get("/articleList", async (ctx, next) => {
  const result = await articleList();
  ctx.body = {
    errno: 0,
    data: result,
  };
});

router.get("/getArticleById", async (ctx, next) => {
  const { id } = ctx.request.query;
  const result = await getArticleById(id);
  ctx.body = {
    errno: 0,
    data: result,
  };
});

// client
router.get("/getArtList", async (ctx, next) => {
  const result = await getArtList();
  ctx.body = {
    errno: 0,
    data: result,
  };
});

router.get("/getArtById", async (ctx, next) => {
  const { _id } = ctx.request.query;
  const result = await getArtById(_id);
  ctx.body = {
    errno: 0,
    data: result,
  };
});

router.get("/getArtByClassify", async (ctx, next) => {
  const { classify } = ctx.request.query;
  const result = await getArtByClassify(classify);
  ctx.body = {
    errno: 0,
    data: result,
  };
});

module.exports = router;
