### 创建vue项目
vue init webpack project-name(项目名称)

### 启动vue项目
npm run serve

### 在Vue中使用axios
安装依赖
npm install --save axios

### 在Vue中使用element-u
安装依赖
npm i element-ui -S

配置
//ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

### 创建egg项目

npm init egg --type=simple(项目名称)

### 下载依赖 安装egg-sequelize  egg连接数据库

npm install --save egg-sequelize mysql2

配置
// config/plugin.js
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
}

// config/config.default.js
  config.sequelize = {
    dialect: 'mysql', 
    database: 'army',  //数据库名
    host: 'localhost',
    port: '3306',
    username: 'root',  //用户名
    password: '',      //密码
    operatorsAliases: false,
  }

### egg跨域

npm i egg-cors -S
配置
在config/plugin.js声明

exports.cors = {
    enable: true,
    package: 'egg-cors',
};

在config/config.default.js配置

 //跨域配置
config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://www.baidu.com', 'http://localhost:8080'], //配置白名单
};
  
config.cors = {
    // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
 



### Nunjucks渲染

npm i egg-view-nunjucks --save   ------如果用Nunjucks渲染那么就下载对应插件