'use strict';
const packager = require('electron-packager');
const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');
const outDirectory = "dist";
const options = {
    'arch': 'x64',
    'platform': 'win32',
    'dir': './',
    'app-copyright': process.env.npm_package_author_name,
    'appVersion': process.env.npm_package_version,
    'asar': true,
    'icon': './build/resources/favicon.ico',
    'name': process.env.npm_package_name,
    'ignore': [
        /^\/.vscode/,
        /^\/node_modules/,
        /^\/src/,
        '.gitignore',
        'jest.config.js',
        'packageApp.js',
        'readme.md',
        'tsconfig.json',
        'webpack.config.base.js',
        'webpack.config.dev.js',
        'webpack.config.prod.js'
    ],
    'out': `./${ outDirectory }`,
    'overwrite': true,
    'prune': true,
    'version-string': {
        'CompanyName': process.env.npm_package_author_name,
        'FileDescription': process.env.npm_package_description,
        'OriginalFilename': process.env.npm_package_name,
        'ProductName': process.env.npm_package_name,
        'InternalName': process.env.npm_package_name
    }
};

rimraf(`./${ outDirectory }/`, (error) => 
{
    if (error)
    {
        throw new Error(error);
    }
    else
    {
        packager(options).then((appPath, error) =>
        {
            if (error)
            {
                throw new Error(error);
            }
            else if (appPath)
            {
                console.log("Wrote new app at " + appPath[ 0 ]);
                fs.renameSync(path.resolve(__dirname, `${ outDirectory }/${ process.env.npm_package_name }-win32-x64`), path.resolve(__dirname, `${ outDirectory }/${ process.env.npm_package_name }`));
            }
            console.log("App Packaged Successfully.");
        });
    }
});
