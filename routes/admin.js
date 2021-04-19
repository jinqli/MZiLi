const router = require("koa-router")();
const { articleList } = require("../controller/article");
// await ctx.response.redirect("/user/login"); // url重定向

router.prefix("/admin");

router.get("/", async (ctx, next) => {
  await ctx.render("dashboard", {
    data: "result",
  });
});

// article
router.get("/articles", async (ctx, next) => {
  const result = await articleList();
  await ctx.render("admin-articles", {
    articles: result,
  });
});

// article/form-add
router.get("/article/form-add", async (ctx, next) => {
  const result = {};
  await ctx.render("article-form", {
    article: result,
  });
});
// article/form-edit
router.get("/article/form-edit", async (ctx, next) => {
  const result = {};
  await ctx.render("article-form", {
    article: result,
  });
});

// admin/category
router.get("/categories", async (ctx, next) => {
  await ctx.render("admin-category", {
    categories: [
      {
        name: "分类",
        imgUrl:
          "https://desk-fd.zol-img.com.cn/t_s208x130c5/g5/M00/00/06/ChMkJ1gz_AOISdtSAAX3uu9pWt4AAX-ewMXjUQABffS054.jpg",
        description: "描述",
      },
    ],
  });
});

// admin/account
router.get("/account", async (ctx, next) => {
  await ctx.render("admin-account", {
    accounts: [
      {
        username: "ljq",
        key: "0",
      },
    ],
  });
});

module.exports = router;
