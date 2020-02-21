class _ {
    constructor(props) {
        this._props = Object.assign({}, props)
    }

    get props() {
        return this._props
    }

    get archiveFiles() {
        return [
            "chunks/intro/**/*",
            "assets/favicon/**/*", 
            "assets/text/**/*", 
            "assets/cover.r.png", 
            "assets/loader.svg", 
            "assets/logo.gif", 
            "assets/logo.png", 
            "assets/strings.json", 
            "assets/style.css"
        ]
    }

    get files() {
        return [
            "chunky.json",
            "package.json",
            "web/**/*"
        ]
    }
}

module.exports = _