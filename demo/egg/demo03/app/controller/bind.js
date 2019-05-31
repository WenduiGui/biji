const Controller = require('egg').Controller;

class BindController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("bind.html",{
            h1:'数据绑定',
            item:"神龙吞噬一切",
        })
    }
}

module.exports = BindController;
