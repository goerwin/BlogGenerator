#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fsExtra = require('fs-extra');
const helpers = require('./helpers');
const serverHelpers = require('./serverHelpers');

program
    .requiredOption(
        '-i, --inputDirectory <dir>',
        'Blog directory with the Markdown files'
    )
    .option(
        '-o, --outputDirectory <dir>',
        'Output directory with generated files'
    )
    .option('-s, --serve', 'Serve files in a server')
    .option('-p, --port <port>', 'Server port');

program.parse(process.argv);

if (program.serve) {
    console.log('Serving blog...');
    serverHelpers.getServer(program.inputDirectory, {
        port: program.port,
        baseUrl: '/',
    });

    return;
}

console.log('Creating blog...');

helpers
    .generateBlogFileStructureFromDir(path.join(program.inputDirectory))
    .then((blogFileStructure) => {
        const outputDirectory = program.outputDirectory
            ? path.resolve(program.outputDirectory)
            : path.resolve(program.inputDirectory, '__generatedBlog__');

        fsExtra.removeSync(outputDirectory);

        Object.keys(blogFileStructure).forEach((filePath) => {
            fsExtra.outputFileSync(
                path.join(outputDirectory, filePath),
                blogFileStructure[filePath].content,
                blogFileStructure[filePath].encoding
            );
        });

        console.log();
        console.log(helpers.prettyPrintBlogFileStructure(blogFileStructure));
        console.log('Blog generated at', outputDirectory);
    })
    .catch((e) => {
        console.log(e);

        throw e;
    });
