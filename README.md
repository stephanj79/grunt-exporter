
# grunt-exporter

> Export Snippets from Page/File and include it in its own file.

## Getting Started
This plugin requires Grunt `~0.4.5`
> Test it with younger Versions of Grunt!!!

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-exporter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-exporter');
```

#How to use:
```html
        X=type(html/ja/css/less/...)   path/to/outputfile.
         \                            /
<!--(start-X-export includes/ScrollTop.X)--> // Starttag
  //Content                             \
<!--(end-X-export)-->   // Endtag        X=type(html/ja/css/less/...)
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


#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing.html` file has the content-tag the content of this tags will be written to file

```js
grunt.initConfig({
     exporter: {
       dist: {
         options: {
           silent: true,
           banner: "/*\n * Export from\n * grunt-exporter\n * https://www.npmjs.com/package/grunt-exporter\n * https://github.com/stephanj79/grunt-exporter\n */\n\n"
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
        banner: "here my text..."
    },
    files: {
      src: ['test/fixtures/testing.html', 'test/expected/**/*.html', '/test/expected/**/*.js']
    }
  },
});
```


### Usage in File
```html
Starttag   X=type(html/ja/css/less)   path/to/outputfile.X
|          |                         /
<!--(start-X-export includes/ScrollTop.X)-->
  //Content                             \
<!--(end-X-export)-->                    X=type(css/less/js...)
   \       /
    Endtag
```
**rename X with type like html,jade,js,css,scss,sass,less**


### Usage Examples
master.html
```html

<script>
//<!--(start-js-export includes/test.js)-->
alert("TEST");
//<!--(end-js-export)-->
</script>

<header class="site-footer">
  <!-- what ever... -->
</header>

<!--(start-less-export includes/ScrollTop.less)-->
.header {
  position: fixed;
  a:link, a:visited,a:hover {
    text-decoration: none;
    background: @MainColorLink;
    i{
      color:@MainColorBackground;
    }
  }
}
<!--(end-less-export)-->


<style>
/*<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
  min-height: 180px;
}
/*<!--(end-css-export)-->*/

<!--(start-less-export includes/footer.less)-->
.site-footer {
  background: @MainColorBackground;
  min-height: @footerHoehe;
  a:link, a:visited {
    color: @MainColorLink !important;
  }
}
<!--(end-less-export)-->
</style>

<!--(start-html-export src/html/templates/footer.html)-->
<footer class="test">
    <a href="huiu" si="ujio">a</a>
<footer>
<!--(end-html-export)-->


```

Create files:
* include/test.js
```js
alert("TEST");
```
* include/ScrollTop.less
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
* include/test.css
```css
.site-footer-css {
  min-height: 180px;
}
```

**In js files you can use "//" or in css "/*" if you want!**
```js
//<!--(start-js-export includes/test.js)-->
alert("TEST");
//<!--(end-js-export)-->
```
```css
/*<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
  min-height: 180px;
}
/*<!--(end-css-export)-->*/
```

## Release History
* 1.0.0 **Final Release**
  ...
  ...
  ...
* **Start Project**


## Tips and Tricks
use in html files
```html
<script>
<!--(start-js-export includes/test.js)-->
alert("TEST");
<!--(end-js-export)-->
</script>

<style>
<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
  min-height: 180px;
}
<!--(end-css-export)-->*/
</style>
```

## INFO
* **If there a 2 files export to one the first export will be override!!!**
* **If there a 2 export tags in one file with the same destination it will be merged!!!**
