const HtmlWebPackPlugin = require("html - webpack - plugin")
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    })
]