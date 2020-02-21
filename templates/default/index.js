class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
    }

    get props() {
        return this._props
    }

    get files() {
        return [
            "chunky.json",
            "package.json",
            "web/**/*",
            { chunks: ["chunks/intro/**/*"] },
            { assets: ["assets/favicon/**/*", 
                     "assets/text/**/*", 
                     "assets/cover.r.png", 
                     "assets/loader.svg", 
                     "assets/logo.gif", 
                     "assets/logo.png", 
                     "assets/strings.json", 
                     "assets/style.css"] }
        ]
    }
}

module.exports = _