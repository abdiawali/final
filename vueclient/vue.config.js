//for local development

module.seports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    }
},
module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}
