// ----------admin.js
(function () {
  function createXHR() {
    var xhr = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    return xhr;
  }

  function ajax(obj) {
    var xhr = createXHR();

    //通过params()将名值对转换成字符串
    obj.data = params(obj.data);

    //判断请求方式
    if (obj.method === "get") {
      //如果是get请求则将url加在后面，并且需要根据是否存在问好和&来处理
      obj.url += obj.url.indexOf("?") == -1 ? "?" + obj.data : "&" + obj.data;
    }

    //同步
    if (obj.async === false) {
      callback();
    }

    //异步
    if (obj.async === true) {
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          callback();
        }
      };
    }

    xhr.open(obj.method, obj.url, obj.async);

    if (obj.method === "post") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(obj.data);
    } else {
      xhr.send(null);
    }

    function callback() {
      if (xhr.status == 200) {
        //判断http的交互是否成功，200表示成功
        console.log(obj);
        obj.success(xhr.responseText); //回调传递参数
      } else {
        obj.error("请求错误");
      }
    }

    //键值对转换字符串
    function params(data) {
      var arr = [];
      for (var i in data) {
        arr.push(i + "=" + data[i]);
      }
      return arr.join("&");
    }
  }

  window.ajax = ajax;
})();

onload = function () {
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let log_out = document.querySelector("#log_out");

  btn.onclick = function () {
    sidebar.classList.toggle("active");
  };
  log_out.onclick = function () {
    sidebar.classList.toggle("active");
  };
  // --------------------Ajax

  // --------------------post article
  const articleTitle = "001";
  const articleCategory = "001";
  const articleAuthor = "lj1";
  const articleImgUrl =
    "https://desk-fd.zol-img.com.cn/t_s208x130c5/g6/M00/0C/09/ChMkKWAt1QuICocOAAI_zFnhTOUAAKEnQEdCTUAAj_k704.jpg";
  const articleCreatedAt = "2021/420";
  const articleContent = "contetn...";
  // ---------el
  let addOrEditArticle = document.querySelector("#addOrEditArticle");

  // post
  addOrEditArticle.onclick = addArticle = () => {
    ajax({
      method: "post",
      url: "http://127.0.0.1:3000/api/addArticle",
      data: {
        title: articleTitle,
        category: articleCategory,
        username: articleAuthor,
        imgUrl: articleImgUrl,
        createdAt: articleCreatedAt,
        content: articleContent,
      },
      success: function (message) {
        alert(message);
      },
      async: true,
      error: function (error) {
        alert(error);
      },
    });
  };
};
