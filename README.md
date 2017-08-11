# 患者端
> 患者健康提醒h5项目，前端采用react技术栈，后端采用express进行数据的保存修改及查询。

- - - 

### 前端
使用[Create React App](https://github.com/facebookincubator/create-react-app)脚手架搭建前端开，发工具流，组件系统使用阿里的[antd-mobile](https://mobile.ant.design/index-cn)。
项目前端技术栈为
- react
- react-router-dom
- readux
- redux-saga
- webpack
- Babel
- Scss
- post-css

适配方案采用的antd的antm-viewport。

### 后端
使用[express](http://www.expressjs.com.cn/)+mongodb进行后端开发，odm使用[mongoose](http://www.nodeclass.com/api/mongoose.html)

ajax请求采取[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)、[express-jwt](https://github.com/auth0/express-jwt)的方式验证来源的合法性。
