// /controllers/bookController.js

const Book = require('../models/book');

exports.index = (req, res) => { 
    res.send('未实现：站点首页'); 
};

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
exports.book_detail= (req,res) => {
    res.send('');
}

// GET 请求完整藏书列表
exports.book_list = (req,res) => {
    res.send('');
}