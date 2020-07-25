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
            "carmel/assets/images/**/*", 
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