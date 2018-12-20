const config = require('configModule')

module.exports = {
    constructInsideUrl (url, urlTail) {
        urlTail = urlTail || ''
        return config.PAGE_ROOT_PATH + url + '/page.html' + urlTail
        //    ../../ + url + /page.html + urlTail
        // url --> index/index  index/login
    }
}