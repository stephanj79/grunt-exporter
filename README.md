
# grunt-exporter

> Export Snippets from Page/File and include it in its own file.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-exporter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-exporter');
```

## The "exporter" task

### Overview
In your project's Gruntfile, add a section named `exporter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  exporter: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.silent
Type: `Boolean`
Default value: `true`

If 'false' output in console

#### options.banner
Type: `String`
Default value: ``

Banner for your files


### Usage Examples

```html
Starttag    **X=type**   path/to/outputfile.**X**
<!--(start-**X**-export includes/ScrollTop.less)-->
  //Content here
<--(end-**X**-export)-->
^Endtag
```
**rename X with type like html,jade,js,css,scss,sass,less**


master.html
```html
<header class="site-footer">
    <!--(bake includes/headerinner.html)-->
</header>

<!--(start-less-export includes/ScrollTop.less)-->
.scroll-top {
  position: fixed;
  a:link, a:visited,a:hover {
    text-decoration: none;
    background: @MainColorLink;
    i{
      color:@MainColorBackground;
    }
  }
}
<--(end-less-export)-->

<footer class="site-footer">
    <!--(bake includes/footerinner.html)-->
</footer>

<!--(start-less-export includes/footer.less)-->
.site-footer {
  background: @MainColorBackground;
  min-height: @footerHoehe;
  a:link, a:visited {
    color: @MainColorLink !important;
  }
}
<--(end-less-export)-->

/*<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
min-height: 180px;
}
/*<--(end-css-export)-->*/

//<!--(start-js-export includes/test.js)-->
alert("TEST");
//<--(end-js-export)-->
```

In js files you can use "//" or in css "/*" if you want!
```js
//<!--(start-js-export includes/test.js)-->
alert("TEST");
//<--(end-js-export)-->
```
```css
/*<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
min-height: 180px;
}
/*<--(end-css-export)-->*/
```


Create files:

include/test.js
```js
alert("TEST");
```

include/ScrollTop.less
```css
.scroll-top {
  position: fixed;
  a:link, a:visited,a:hover {
    text-decoration: none;
    background: @MainColorLink;
    i{
      color:@MainColorBackground;
    }
  }
}
```

include/test.css
```css
.site-footer-css {
min-height: @footerHoehe;
}
```


#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing.html` file has the content-tag the content of this tags will be written to file

```js
grunt.initConfig({
     exporter: {
       dist: {
         options: {
           silent: true,
           banner: ""
         },
         files: {
           src: ['test/fixtures/testing.html']
         }
       }
     }
});
```

#### Custom Options
Script search in 'test/fixtures/testing.html' and in all but only *.html and *.js files in 'test/expected/'
You can use css file or jade as well...


```js
grunt.initConfig({
  exporter: {
  dist:{
      options: {
        silent: false,
        banner: "/* \n * MyBanner\n */"
    },
    files: {
      src: ['test/fixtures/testing.html', 'test/expected/**/*.html', '/test/expected/**/*.js']
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 Include "silent" + "banner" as Option
      Start Project
=======
# grunt-exporter

> Export Snippets from "master" Page and include it in own file.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-exporter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-exporter');
```

## The "exporter" task

### Overview
In your project's Gruntfile, add a section named `ExportFromMasterPage` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  exporter: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.silent
Type: `Boolean`
Default value: `true`

If 'false' output in console

#### options.banner
Type: `String`
Default value: ``

Banner for your files


### Usage Examples

```html
Starttag    X=type   path/to/outputfile.X
<!--(start-X-export includes/ScrollTop.less)-->
  //Content here
<--(end-X-export)-->
^Endtag
```
X = type like html,jade,js,css,scss,sass,less...


master.html
```html

<!--(start-less-export includes/ScrollTop.less)-->
.scroll-top {
  position: fixed;
  a:link, a:visited,a:hover {
    text-decoration: none;
    background: @MainColorLink;
    i{
      color:@MainColorBackground;
    }
  }
}
<--(end-less-export)-->

<footer class="site-footer">
    <!-- What ever...-->
</footer>

<!--(start-less-export includes/footer.less)-->
.site-footer {
  background: @MainColorBackground;
  min-height: @footerHoehe;
  a:link, a:visited {
    color: @MainColorLink !important;
  }
}
<--(end-less-export)-->

<!--(start-css-export includes/test.css)-->
.site-footer-css {
min-height: 180px;
}
<--(end-css-export)-->

<!--(start-js-export includes/test.js)-->
alert("TEST");
<--(end-js-export)-->
```

In js files you can use "//" if you want!
```js
//<!--(start-js-export includes/test.js)-->
alert("TEST");
//<--(end-js-export)-->
```

Create files:

include/test.js
```js
alert("TEST");
```

include/ScrollTop.less
```css
.scroll-top {
  position: fixed;
  a:link, a:visited,a:hover {
    text-decoration: none;
    background: @MainColorLink;
    i{
      color:@MainColorBackground;
    }
  }
}
```

include/test.css
```css
.site-footer-css {
min-height: 180px;
}
```


#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing.html` file has the content-tag the content of this tags will be written to file

```js
grunt.initConfig({
     exporter: {
       dist: {
         options: {
           silent: true,
           banner: ""
         },
         files: {
           src: ['test/fixtures/testing.html']
         }
       }
     }
});
```

#### Custom Options
Script search in 'test/fixtures/testing.html' and in all but only *.html and *.js files in 'test/expected/'
You can use css file or jade as well...


```js
grunt.initConfig({
  exporter: {
  dist:{
      options: {
        silent: false,
        banner: "/* \n * MyBanner\n */"
    },
    files: {
      src: ['test/fixtures/testing.html', 'test/expected/**/*.html', '/test/expected/**/*.js']
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.4 Bug fix
0.0.3 Bug fix
0.0.2 Bug fix
0.0.1 Include "silent" + "banner" as Option
      Start Project

## Tips and Tricks
use in html files
```html
<script>
<!--(start-js-export includes/test.js)-->
alert("TEST");
<--(end-js-export)-->
</script>

<style>
<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
min-height: 180px;
}
<--(end-css-export)-->*/
</style>
```

## INFO
**If there a 2 files that will create both in test.less so it will be override!!!**