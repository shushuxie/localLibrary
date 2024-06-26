// /controllers/bookController.js

const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    console.log("request book.index start");
  // 并行获取书的详细信息、书实例、作者和体裁的数量
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstances,
    numAuthors,
    numGenres,
  ] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Local Library Home",
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstances,
    author_count: numAuthors,
    genre_count: numGenres,
  });
});


exports.book_create_get = (req,res) => {
    res.send('未实现：创建图书');
}

exports.book_create_post = (req,res) => {
    res.send('未实现：创建图书post');
}

exports.book_delete_get = (req,res) => {
    res.send('');
}

// POST 请求删除藏书
exports.book_delete_post = (req,res) =>{
    res.send('');
}

// GET 请求更新藏书
exports.book_update_get = (req,res) => {
    res.send('');
}

// POST 请求更新藏书
exports.book_update_post = (req,res) => {
    res.send('');
}

// GET 请求藏书
// 显示特定书籍的详细信息页面。
exports.book_detail = asyncHandler(async (req, res, next) => {
  // 获取书籍的详细信息，以及特定书籍的实例
  const [book, bookInstances] = await Promise.all([
    Book.findById(req.params.id).populate("author").populate("genre").exec(),
    BookInstance.find({ book: req.params.id }).exec(),
  ]);

  if (book === null) {
    // 没有结果。
    const err = new Error("Book not found");
    err.status = 404;
    return next(err);
  }

  res.render("book_detail", {
    title: book.title,
    book: book,
    book_instances: bookInstances,
  });
});


// GET 请求完整藏书列表
// Display list of all Books.
exports.book_list = function (req, res, next) {
    Book.find({}, "title author")
      .populate("author")
      .then((list_books) => {
        //Successful, so render
        res.render("book_list", { title: "Book List", book_list: list_books });
      }).catch((err) => {
        //catch error
        return next(err);
      });
  };
  

//   myModel.find({}).then((res) => {
//     //if succeded do this block of code
//   }).catch((err) => {
//     //catch error
//   });