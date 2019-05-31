const Controller = require('egg').Controller;

class QueryController extends Controller {
    // async index() {
    //     const {
    //         ctx
    //     } = this;
    //     await ctx.render("query.html")
    // }

    // async query(){
    //     const username = this.ctx.request.query.username;
    //     const password = this.ctx.request.query.password;
    //     await this.ctx.render("query_page.html",{
    //         usernam:username,
    //         passwor:password
    //     })
    // }
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("query.html",{
            h1:'获取getq请求的参数',
        })
    }
    async query() {
        const u = this.ctx.request.query.u;
        const p = this.ctx.request.query.p;
        await this.ctx.render('query_page.html',{
            h1:"获取get请求的参数",
            u:u,
            p:p
        })
    }
}

module.exports = QueryController;
