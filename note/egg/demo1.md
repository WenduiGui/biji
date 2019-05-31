# 约定范围

 app 是项目文件
 config 项目和插件的配置文件
 logs 日志文件
 run 运行项目生成的配置文件
 test 测试文件
 .eslintrc 代码格式化的配置文件
 app里必须有controller、public、router.jscontroller里的home.js文件是控制器控制器可以有多个，新建控制器要引入const Controller = require('egg').Controller;在写class HomeController extends Controller继承这个方法

# 配置路由

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hei ';
  }
  async cout() {
    const { ctx } = this;
    ctx.body = '你好 ';
  }
}


 async cout() {
    const { ctx } = this;
    ctx.body = '你好 ';
  }
  对应着： router.get('/cout', controller.home.cout);