'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('catalog.html', {
            itemlist: [
                {
                    id: "1",
                    url: '',
                    word: '首页'
                },
                {
                    id: "2",
                    url: '',
                    word: '手册'
                },
                {
                    id: "3",
                    url: '',
                    word: '问答'
                },
                {
                    id: "4",
                    url: '',
                    word: '我的'
                },
            ]
        })
    }
}

module.exports = HomeController;
