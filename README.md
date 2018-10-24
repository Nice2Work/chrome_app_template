# chrome_app_template

A basic template for Chrome App with VueJS, Bootstrap etc
This is to have a base for a simple chrome app. No Hot reloading, just simple
Take it, use it, I tested it, it works

How to use this

- First clone this to your work directory. ie:
  git clone https://github.com/Nice2Work/chrome_app_template.git

Now change the directory, changes some few lines to make your own hello word in index_chrome.html to see all is working fine
(it shows a simple page, using HTML, bootstrap, and VueJS)

The reason I have also a simple index.html is to have a easy way to develop first. Import Vue Components where you
work in, use your localhost to test, when ok, test it out by removing and adding the app extension.

Than open extensions on your chrome browser ie: chrome://extensions/
Switch to developer mode (top right button on the screen with your extensions)

Click on 'Load Unpacked', browser for your directory, add it.

Now open a new tab in your browser, click on Apps (left on the booksmarks bar ),
look for the app called Nice2Write (you can change this all), and a popup should appear,
looking like a standalone program in your computer.

Important files:
manifest.json (Do not comment this file, as it is NOT allowed, I am just doing this here to show you.)
  permissions  
   "permissions": [  // you need local storage;
    "storage"
  ],

And that is it. Any questions or concerns, tips etc please write me. Thanks

== Ronald
