# Refresh browser when files change

When working on a small project, I had to make HTML prototypes. Since I'm used to Angular and the Angular CLI, every code change refreshes the browser whereas with the HTML files I had to refresh the browser every time which was tedious.

I had to find a quick and easy solution without any fancy tools, here's what I came up with :

## A magic JS file

**Live.js** is a JS library that spares you from refreshing the browser, here's how they present it :

> Say goodbye to Alt-Tab. Live.js makes sure you're always looking at the latest version of the page you're working on, whether you're writing HTML, CSS or Javascript.

To integrate **Live.js** in your page, just add this at the end of your HTML page :

```html
<script type="text/javascript" src="http://livejs.com/live.js">
```

::: warning
This is only works if you're on a server, it does not work locally.
:::

## A local server

Since **Live.js** needs a Web Server, I needed to install one quickly. Fortunately, I found one as an NPM package, to install it execute :

```shell
npm install http-server -g
```

Then go to your directory and run :

```shell
http-server -p 4200 -c-1
```

* `-p 4200` is the port,
* `-c-1` deactivates the cache.

Et voilà :grin:.



