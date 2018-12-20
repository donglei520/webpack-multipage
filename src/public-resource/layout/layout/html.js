const config = require('configModule')
const noJquery = require('withoutJqueryModule')
const layout = require('./html.ejs')//整个页面布局的模板文件  统筹各个模板组件
const header = require('../../components/header/html.ejs')
const footer = require('../../components/footer/html.ejs')
const topNav = require('../../components/top-nav/html.ejs')
const sideMenu = require('../../components/side-menu/html.ejs')


const pf = {
    pageTitle: '',
    constructInsideUrl: noJquery.constructInsideUrl,
}
const moduleExports = {
    init ({ pageTitle }) {
        pf.pageTitle = pageTitle
        return this
    },
    run (content) {
        const componentRenderDate = Object.assign({}, config, pf)
        const renderDate = {
            header: header(componentRenderDate),
            footer: footer(componentRenderDate),
            topNav: topNav(componentRenderDate),
            sideMenu: sideMenu(componentRenderDate),
            content,
        }
        return layout(renderDate)
    }
}

module.exports = moduleExports

