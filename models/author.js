const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// 虚拟属性'name'：表示作者全名
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});

// 虚拟属性'lifespan'：作者寿命
AuthorSchema.virtual("lifespan").get(function () {
  const birth = this.date_of_birth;
  const death = this.date_of_death || new Date(); // 使用当前日期作为默认值
  const diffTime = Math.abs(death - birth);
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); // 计算年份差
  return diffYears;
});


AuthorSchema.virtual("birth_of_birth_format").get(function () {
  return moment(this.date_of_birth).format("YYYY年M月D号");
});

AuthorSchema.virtual("birth_of_death_format").get(function () {
  return moment(this.date_of_death).format("YYYY年M月D号");
});


// 虚拟属性'url'：作者 URL
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

// 导出 Author 模型
module.exports = mongoose.model("Author", AuthorSchema);
