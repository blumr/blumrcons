# Blumrcons
Blumr icons

### Maintainers
* Gene Diaz Jr. <gene@letsblumit.com>
* Jobert Cruz <jobert@letsblumit.com>

### Technologies
* [svgo](https://github.com/svg/svgo/) - svg optimizer
* [icomoon](https://icomoon.io/) - font icon generator

### Configs
* [.jscsrc](http://jscs.info/rules.html) - javascript code style
* [.jshintrc](http://jshint.com/docs/options/) - javascript code quality
* [.gitignore](http://git-scm.com/docs/gitignore) - git ignored dirs and files
* [package.json](https://docs.npmjs.com/files/package.json) - project details through nodejs
* [icomoon.json](https://icomoon.io/docs.html) - icomoon project file
* [FONTLOG.txt](https://github.com/letsblumit/blumrcons/blob/master/FONTLOG.txt) - OFL compliant changelog

### Contributing
Make sure that [nodejs is installed](http://nodejs.org/download/) first.
For osx, its best to [use homebrew](http://shapeshed.com/setting-up-nodejs-and-npm-on-mac-osx/).

#### Install dependencies
```
npm install
```

#### Run builder
```
npm run build
```

#### Project directory structure
```
├─ demo              - icons demo
├─ dist
│  ├─ blumrcons.h    - ios
│  ├─ blumrcons.css  - web
│  └─ blumrcons.xml  - android
├─ font
│  ├─ blumrcons.eot  - opentype
│  ├─ blumrcons.svg  - vector
│  ├─ blumrcons.ttf  - truetype
│  └─ blumrcons.woff - web open
└─ svg               - source svgs
```

### Roadmap
* support for woff2
* transition from font to svg

### License
* All codes are under MIT License - [MIT](https://github.com/letsblumit/blumrcons/blob/master/LICENSE-CODE)
* All fonts are under SIL Open Font License [SIL OFL 1.1](https://github.com/letsblumit/blumrcons/blob/master/LICENSE-FONT)
* All graphics are under Creative Commons Attribution 4.0 International [CC-BY 4.0](https://github.com/letsblumit/blumrcons/blob/master/LICENSE-GRAPHICS)

