const Author = require("../models/author");
var async = require("async");
var Book = require("../models/book");
const e = require("express");


// 显示完整的作者列表
exports.author_list = function (req, res, next) {
  console.log("author list request");
  Author.find()
    .sort([["family_name", "ascending"]])
    .then((list_authors) => {
      //Successful, so render
      res.render("author_list", {
        title: "Author List",
        author_list: list_authors,
      });
    }).catch((err) => {
      return next(err);
    });
};


// 为每位作者显示详细信息的页面
exports.author_detail = async function (req, res, next) {
  try{
    const [author,author_books] = await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({ author: req.params.id }, "title summary").exec()
    ]);

    if (!author) {
      const err = new Error("aothor not found");
      err.status = 404;
      return next(err);
    }

    // Successful, so render.
    res.render("author_detail", {
      title: "Author Detail",
      author: author,
      author_books:author_books,
    });
  } catch(err) {
    return next(err);
  }
};


// 由 GET 显示创建作者的表单
exports.author_create_get = (req, res) => {
  res.send("未实现：作者创建表单的 GET");
};

// 由 POST 处理作者创建操作
exports.author_create_post = (req, res) => {
  res.send("未实现：创建作者的 POST");
};

// 由 GET 显示删除作者的表单
exports.author_delete_get = (req, res) => {
  res.send("未实现：作者删除表单的 GET");
};

// 由 POST 处理作者删除操作
exports.author_delete_post = (req, res) => {
  res.send("未实现：删除作者的 POST");
};

// 由 GET 显示更新作者的表单
exports.author_update_get = (req, res) => {
  res.send("未实现：作者更新表单的 GET");
};

// 由 POST 处理作者更新操作
exports.author_update_post = (req, res) => {
  res.send("未实现：更新作者的 POST");
};
