const router = require("koa-router")();

router.prefix("/admin");

router.get("/", async (ctx, next) => {
  // if (key == "1") {
  await ctx.render("dashboard", {
    title: "admin",
  });
  // } else {
  // await ctx.response.redirect("/user/login");
  // }
});

// article
router.get("/articles", async (ctx, next) => {
  // if (key == "1") {
  await ctx.render("admin-articles", {
    articles: [
      {
        title: "001",
        content: "content...",
      },
      {
        title: "001",
        content: "content...",
      },
      {
        title: "001",
        content: "content...",
      },
    ],
  });
  // } else {
  // await ctx.response.redirect("/user/login");
  // }
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
