var yamlFront = require('yaml-front-matter');
var path = require('path');
var fs = require('fs');

module.exports = function () {

    var model = [];
    var patternsPath = path.resolve(__dirname, `../docs/`);

    var files = fs.readdirSync(patternsPath);
    files.forEach(file => {
        if (file.substr(-3) != ".md") return;
        if (file.toLowerCase() === "toc.md") return;

        var filePath = path.resolve(patternsPath, file);
        var content = fs.readFileSync(filePath, 'utf8');
        var yml = yamlFront.loadFront(content);

        mode.push({
            title: yml['title'],
            desription: yml['description'],
            file: file,
            categories: yml['pnp.pattern.categories']
        });
    });

    return model;
}