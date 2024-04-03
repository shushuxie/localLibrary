const Genre = require("../models/genre");
var Book = require("../models/book");
var async = require("async");


// 显示完整的作者列表
exports.genre_list = (req, res) => {
    console.log("genre list request");
    Genre.find()
    .sort([["name","ascending"]])
    .then((list_genres) => {
      res.render("genre_list",{
        title: "Genre List",
        gener_list: list_genres
      });
    }).catch((err) => {
      return next(err);
    })
};

// 类型详情页面
// exports.genre_detail = function (req, res, next) {
//   Promise.all([
//     Genre.findById(req.params.id).exec(),
//     Book.find({ genre: req.params.id }).exec(),
//   ])
//     .then(([genre, genre_books]) => {
//       if (!genre) {
//         // No results.
//         const err = new Error("Genre not found");
//         err.status = 404;
//         throw err;
//       }

//       // Successful, so render
//       res.render("genre_detail", {
//         title: "Genre Detail",
//         genre: genre,
//         genre_books: genre_books,
//       });
//     })
//     .catch((err) => next(err));
// };

// Display detail page for a specific Genre.  
exports.genre_detail = async function (req, res, next) {  
  try {  
    // 使用Promise.all并行执行多个异步操作  
    const [genre, genre_books] = await Promise.all([  
      Genre.findById(req.params.id).exec(), // 返回Promise  
      Book.find({ genre: req.params.id }).exec(), // 返回Promise  
    ]);  
  
    if (!genre) {  
      // No results.  
      const err = new Error("Genre not found");  
      err.status = 404;  
      return next(err);  
    }  

    
  
    // Successful, so render  
    res.render("genre_detail", {  
      title: "Genre Detail",  
      genre: genre,  
      genre_books: genre_books,  
    });  
  } catch (err) {  
    // 捕获任何在Promise.all中发生的错误  
    return next(err);  
  }  










};

// 由 GET 显示创建作者的表单
exports.genre_create_get = (req, res) => {
  res.send("未实现：作者创建表单的 GET");
};

// 由 POST 处理作者创建操作
exports.genre_create_post = (req, res) => {
  res.send("未实现：创建作者的 POST");
};

// 由 GET 显示删除作者的表单
exports.genre_delete_get = (req, res) => {
  res.send("未实现：作者删除表单的 GET");
};

// 由 POST 处理作者删除操作
exports.genre_delete_post = (req, res) => {
  res.send("未实现：删除作者的 POST");
};

// 由 GET 显示更新作者的表单
exports.genre_update_get = (req, res) => {
  res.send("未实现：作者更新表单的 GET");
};

// 由 POST 处理作者更新操作
exports.genre_update_post = (req, res) => {
  res.send("未实现：更新作者的 POST");
};
