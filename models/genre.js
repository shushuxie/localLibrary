const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, max: 100 },

});

// 虚拟属性'URL'：图书种类
GenreSchema.virtual("url").get(function () {
  return "/catalog/author/" + this.id;
});

// 导出 Author 模型
module.exports = mongoose.model("Genre", GenreSchema);
