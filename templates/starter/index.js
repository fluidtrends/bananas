class Template {
    get stack () {
        return "jayesse"
    }

    get packer () {
        return "papanache"
    }
    
    get archiveFiles() {
        return [
            "carmel/chunks/intro/**/*",
            "carmel/assets/favicon/**/*", 
            "carmel/assets/text/**/*", 
            "carmel/assets/cover.r.png", 
            "carmel/assets/loader.svg", 
            "carmel/assets/chunky.gif", 
            "carmel/assets/chunky.png", 
            "carmel/assets/logo-inverted.png", 
            "carmel/assets/logo.png", 
            "carmel/assets/strings.json", 
            "carmel/assets/style.css",
            "tsconfig.json"
        ]
    }

    get files() {
        return  [
          "carmel/**/*",
          ".carmel.json"
        ]
    }
}

module.exports = Template