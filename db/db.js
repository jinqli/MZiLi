// const mysql = require("mysql");

// let result = [];
// // const db = mysql.createConnection({
// //   user: "root", // 用户名
// //   password: "123456", // 密码
// //   host: "localhost", //数据库地址
// //   "data"base: "mzili", // 选中数据库
// //   port: "3306", // 端口
// //   protocol: "pool",
// // });

// // // db.connect(function (err) {
// // //   if (err) {
// // //     console.error("error connecting: " + err.stack);
// // //     return;
// // //   }

// // //   console.log("connected as id " + db.threadId);
// // // });

// // // 执行sql脚本对数据库进行读写
// // db.query(
// //   `CREATE TABLE Persons
// // (
// // Id_P int,
// // LastName varchar(255),
// // FirstName varchar(255),
// // Address varchar(255),
// // City varchar(255)
// // )`,
// //   (error, results, fields) => {
// //     if (error) throw error;
// //     // connected!
// //   }
// // );

// // ------------------------------------------
// // 创建数据池
// // const db_pool = mysql.createPool({
// //   host: "127.0.0.1", // 数据库地址
// //   user: "root", // 数据库用户
// //   password: "123456", // 数据库密码
// //   database: "mzili", // 选中数据库
// // });

// // 在数据池中进行会话操作
// // const query = (sql, val) => {
// //   var results = [];
// //   new Promise((resolve) => {
// //     db_pool.getConnection(function (err, connection) {
// //       connection.query(sql, val, (err, results) => {
// //         console.log(results);
// //         let data = results;
// //         resolve(data);
// //         connection.release();
// //       });
// //     });
// //   });
// // };

// // -----------------------//封装mysql

// let pools = {}; //连接池

// let query = (sql, callback, host = "127.0.0.1") => {
//   if (!pools.hasOwnProperty(host)) {
//     //是否存在连接池

//     pools[host] = mysql.createPool({
//       //不存在创建

//       host: host,

//       port: "3306",

//       user: "root",

//       password: "123456",

//       database: "mzili", //数据库名
//     });
//   }

//   pools[host].getConnection((err, connection) => {
//     //初始化连接池

//     connection.query(sql, (err, results) => {
//       //去数据库查询数据

//       callback(err, results); //结果回调

//       connection.release(); //释放连接资源 | 跟 connection.destroy() 不同，它是销毁
//     });
//   });
// };

// // 操作数据库;
// // query(`SELECT * FROM persons`, (err, results) => {
// //   result = results;
// //   // console.log(result); //返回的数据
// // });

// module.exports = query;
// -------------------------- mongodb
// 连接数据库 npm i --save mongoose

const mongoose = require("mongoose");

// 配置数据库服务
const url = "mongodb://localhost:27017";
const dbName = "mzili";

// mongoose 配置
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 实例化连接对象
const conn = mongoose.connection;

conn.on("error", (err) => {
  console.error("mongodb 连接错误：", err);
});

module.exports = mongoose;
