const Genre = require("../models/genre");
var Book = require("../models/book");
var async = require("async");


// 显示完整的作者列表
exports.genre_list = (req, res) => {
    console.log("genre list request");
    Genre.find()
    .sort([["name","ascending"]])
    .then((list_genres) => {
      res.render("gener_list",{
        title: "Gener List",
        gener_list: list_genres
      });
    }).catch((err) => {
      return next(err);
    })
};

// 为每位作者显示详细信息的页面
// Display detail page for a specific Genre.
exports.genre_detail = function (req, res, next) {
  console.log("===========genre detail quest========"+req.params.id);
  // console.log("findby id result = "+ JSON.stringify(Genre.findById(req.params.id)));
  Genre.findById(req.params.id)
  .then(genre => {
    // 在这里处理找到的文档对象
    const genreJSON = JSON.stringify(genre);
    console.log("genrel = "+genreJSON);
    // 进行后续操作
  })
  .catch(err => {
    // 处理错误
  });
  async.parallel(
    {
      genre: function (callback) {
        Genre.findById(req.params.id).then(callback).catch((err)=>{
          return next(err);
        });
      },
      genre_books: function (callback) {
        Book.find({ genre: req.params.id }).then(callback).catch((err) => {
          return next(err);
        });
      },
    },
    function (err, results) {
      console.log("result = " + JSON.stringify(results.genre))
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        // No results.
        var err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    },
  );
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
