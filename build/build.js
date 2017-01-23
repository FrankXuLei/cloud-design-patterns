const path = require('path');
const fs = require('fs');

const yamlFront = require('yaml-front-matter');
const Liquid = require('shopify-liquid');

const patterns = require('./patterns');

const engine = Liquid({
    root: path.resolve(__dirname, 'templates'),
    extname: '.liquid'
});

var dataPath = path.resolve(__dirname, '../docs/index.yml');
var content = fs.readFileSync(dataPath, 'utf8');
var yml = yamlFront.loadFront(content);
yml.patterns = patterns();

['index'].forEach(x => {
    console.log(`templated page: ${x}`);
    var templatePath = path.resolve(__dirname, `../docs/${x}.liquid.md`);
    var outputhPath = path.resolve(__dirname, `../docs/${x}.md`);
    var template = engine.parse(fs.readFileSync(templatePath, 'utf8'));

    return engine.render(template, yml)
        .then(markdown => {
            fs.writeFile(outputhPath, markdown);
        });
});