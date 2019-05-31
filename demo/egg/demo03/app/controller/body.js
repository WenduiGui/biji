const Controller = require('egg').Controller;

class BodyController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("body.html")
    }

    async body() {
        const username = this.ctx.request.body.username;
        const password = this.ctx.request.body.password;
        const pa = this.ctx.request.body.pa;
        await this.ctx.render("body_page.html", {
            username: username,
            password: password,
            pa:pa
        })
    }

}

module.exports = BodyController;
