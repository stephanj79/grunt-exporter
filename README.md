
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


### Usage in File
```html
Starttag    X=type   path/to/outputfile.X
<!--(start-X-export includes/ScrollTop.less)-->
  //Content here will be copy
<!--(end-X-export)-->
^Endtag
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

<footer class="site-footer">
<!-- what ever... -->
</footer>

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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
* 0.0.6 Bug fix * Regex
* 0.0.5 [Bug Fixed](https://github.com/stephanj79/grunt-exporter/issues/1)
* 0.0.4 Bug fix
* 0.0.3 Bug fix
* 0.0.2 Bug fix
* 0.0.1 Include "silent" + "banner" as Option
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
* **If there a 2 files that will export to one test.less so the first export will be override!!!**
* **2 export tags in one file with the same destination will be merged!!!**