'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("index.html");
    
  }
  async tiem() {
    const { ctx} = this;
    await ctx.render("tiem.html");
    var params = this.ctx.params;
    console.log(params);
  }
}

module.exports = HomeController;
