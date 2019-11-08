'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('details.html', {
            return:'返回上一页',
            bookname:'前端开发电子书',
            collection:'收藏',
        })
    }
}

module.exports = HomeController;
