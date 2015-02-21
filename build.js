/*
 * Copyright (c) 2014. LetsBlumIt Corp.
 */
'use strict';

var fs = require('fs'),
  util = require('util'),
  path = require('path'),
  Svgo = require('svgo'),
  async = require('async'),
  chalk = require('chalk'),
  dir = require('node-dir'),
  rootDir = process.argv[2],
  rootPath = path.join(__dirname, rootDir);

dir.files(rootPath, function (err, files) {
  if (err) {
    throw err;
  }
  var allZero, finishing = 3, svgo = new Svgo();
  async.doUntil(function (callback1) {
    allZero = true;

    async.each(files, function (file, callback2) {
      if (path.extname(file).toLowerCase() === '.svg') {

        fs.readFile(file, 'utf8', function (err, data) {
          if (err) {
            callback2(err);
          } else {
            try {
              var optimizeStat, svgData = data;
              async.doUntil(function (callback3) {

                svgo.optimize(svgData, function (results) {
                  if (results.error) {
                    callback3(results.error);
                  } else {
                    optimizeStat = (svgData.length - results.data.length) / svgData.length * 100;
                    svgData = results.data;
                    callback3();
                  }
                });

              }, function () {
                if (optimizeStat) {
                  allZero = false;
                  util.log(chalk.red(path.basename(file) + ' ✗ ' + optimizeStat));
                } else {
                  util.log(chalk.green(path.basename(file) + ' ✓ '));
                }
                return optimizeStat === 0;

              }, function (err) {
                if (err) {
                  callback2(err);
                } else {
                  fs.writeFile(file, svgData, function (err) {
                    if (err) {
                      callback2(err);
                    } else {
                      callback2();
                    }
                  });
                }
              });

            } catch (err) {
              callback2(err);
            }
          }
        });
      } else {
        callback2();
      }

    }, function (err) {
      callback1(err);
    });

  }, function () {
    util.log(chalk.yellow('(⌐■_■) iteration clean: ' + allZero + ' finishing:' + finishing));
    if (allZero) {
      finishing--;
    }
    return finishing === 0;

  }, function (err) {
    if (err) {
      util.log(chalk.red(' (╯︵╰,)  ' + err));
    } else {
      util.log(chalk.green('all svgs optimized! ٩(^‿^)۶'));
    }
  });
});
