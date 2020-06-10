class Template {
    get stack () {
        return "jayesse"
    }

    get packer () {
        return "papanache"
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
            "assets/style.css",
            "tsconfig.json"
        ]
    }

    get files() {
        return  [
          "chunks/**/*"
        ]
    }
}

module.exports = Template