/*
 * grunt-exporter
 * https://github.com/stephanj79/grunt-exporter
 *
 * Copyright (c) 2015 Stephan Jäger
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.registerMultiTask('exporter', 'Export Snippets from Page/File and include it in own file.', function () {
        var options = this.options({
            silent: "true",
            banner: "/*\n * Export from\n * grunt-exporter\n * https://www.npmjs.com/package/grunt-exporter\n * https://github.com/stephanj79/grunt-exporter\n */\n\n"
        });

        var regex = /[\/?\/?\*?]{0,1}<!--\(start-.*-export\s+([\w\/.\-]+)\s?[^>]*\)-->[\*?\/?]{0,2}([\w.-0-9\s()\n"';@:,!%&#{}<=]*|[\w.-0-9\s()\n"';@:,%&#{}>=<]*)\s?\n?(\/\*)?<!--\(end-.*-export\)-->[\/?\/?\*?]{0,1}/ig;


        function notinObj(obj, value) {
            for (var i = 0; i < obj.length; i++) {
                return obj[i].ziel !== value;
            }
            return true;
        }

        function prepare(valueContainer) {
            var newobj = [];
            for (var i = 0; i < valueContainer.length; i++) {
                if (notinObj(newobj, valueContainer[i].ziel)) {
                    newobj.push(valueContainer[i]);
                }
                else {
                    for (var j = 0; j < newobj.length; j++) {
                        if (newobj[j].ziel === valueContainer[i].ziel) {
                            var srcText = newobj[j].text;
                            srcText += valueContainer[i].text;
                            newobj[j].text = srcText;
                        }
                    }
                }
            }
            return newobj;
        }

        function parse(string) {
            var match;
            var valuesContainer = [];
            var values = {};
            var i = 0;
            while (match = regex.exec(string)) {
                if (options.silent ? "" : grunt.log.success("1 Match Found!!! Copy to " + match[1])) {
                    values = {};
                    values.id = i;
                    values.ziel = match[1];
                    values.text = match[2];
                    valuesContainer.push(values);
                }
            }
            valuesContainer = prepare(valuesContainer);
            return valuesContainer;
        }

        this.files.forEach(function (f) {
            var src = f.src.filter(function (filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                if (options.silent ? "" : grunt.log.writeln("\nRead File: " + filepath)) {
                    src = grunt.file.read(filepath);
                    src = parse(src);
                    for (var i = 0; i < src.length; i++) {
                        f.dest = src[i].ziel;
                        if (src[i].text.charAt(src[i].text.length - 2) === '/') {
                            src[i].text = src[i].text.substr(0, src[i].text.length - 2);
                        }
                        if (options.banner.length > 0 ? f.content = options.banner + src[i].text : f.content = src[i].text) {
                            grunt.file.write(f.dest, f.content);
                            if (!options.silent) {
                                grunt.log.success('File "' + f.dest + '" created.');
                            }
                        }
                    }
                }
            });
        });
        if (options.silent ? "" : grunt.log.write("\n-----------------------------------------")) {

        }
    });
};
