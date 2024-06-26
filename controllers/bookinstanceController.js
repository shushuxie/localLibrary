const BookInstance = require("../models/bookinstance");

// 显示完整的作者列表
// Display list of all BookInstances.
exports.bookinstance_list = function (req, res, next) {
  BookInstance.find()
    .populate("book")
    .then((list_bookinstances) => {
      // Successful, so render
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      });
    }).catch((err) => {
      // return next(err);
    });
};


// 为每位作者显示详细信息的页面
exports.bookinstance_detail = function (req, res, next) {
  BookInstance.findById(req.params.id)
    .populate("book")
    .exec()
    .then(function(bookinstance) {
      if (bookinstance == null) {
        // No results.
        var err = new Error("Book copy not found");
        err.status = 404;
        return Promise.reject(err);
      }
      // Successful, so render.
      res.render("bookinstance_detail", {
        title: "Book:",
        bookinstance: bookinstance,
      });
    })
    .catch(function(err) {
      // Handle error.
      return next(err);
    });
};



// 由 GET 显示创建作者的表单
exports.bookinstance_create_get = (req, res) => {
  res.send("未实现：作者创建表单的 GET");
};

// 由 POST 处理作者创建操作
exports.bookinstance_create_post = (req, res) => {
  res.send("未实现：创建作者的 POST");
};

// 由 GET 显示删除作者的表单
exports.bookinstance_delete_get = (req, res) => {
  res.send("未实现：作者删除表单的 GET");
};

// 由 POST 处理作者删除操作
exports.bookinstance_delete_post = (req, res) => {
  res.send("未实现：删除作者的 POST");
};

// 由 GET 显示更新作者的表单
exports.bookinstance_update_get = (req, res) => {
  res.send("未实现：作者更新表单的 GET");
};

// 由 POST 处理作者更新操作
exports.bookinstance_update_post = (req, res) => {
  res.send("未实现：更新作者的 POST");
};
