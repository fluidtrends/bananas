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
            { chunks: ["chunks/intro/*"] },
            { assets: ["favicon/**/*", 
                     "text/**/*", 
                     "cover.r.png", 
                     "loader.svg", 
                     "logo.png", 
                     "strings.json", 
                     "style.css"] }
        ]
    }
}

module.exports = _