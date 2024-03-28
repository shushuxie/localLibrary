1. 数据库生成脚本运行
node populatedb "mongodb://127.0.0.1:27017/library"

2. 项目启动
npm run devstart
访问地址是： localhost:3000

3. mongodb docker配置
docker pull mongodb/mongodb-community-server:latest
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
mongosh --port 27017

4. 链接举例
https://www.mongodb.com/zh-cn/docs/mongodb-shell/connect/
要使用默认端口 27017 连接到在本地主机上运行的 MongoDB 部署，请运行不带任何选项的mongosh：

mongosh

这相当于以下命令：

mongosh "mongodb://localhost:27017"

例如，以下命令会连接到在本地主机端口 28015 上运行的部署：

mongosh "mongodb://localhost:28015"

mongosh --port 28015
