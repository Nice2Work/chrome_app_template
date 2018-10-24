new Vue({
  el: "#app",
  data() {
    return {
      myName: "Ronald Stevens is the bomb"
    };
  }
});

// testing the localstorage
console.log("testing local storage 5");
// localStorage.setItem("test", 1);
// chrome.storage.local.set("test", 1);
// chrome.storage.local.set({ test: 5 }, function() {
//   console.log("Value is set to " + value);
// });
// var channels = "test";
// chrome.storage.local.set({ channels: channels });

// Save it using the Chrome extension storage API.
var theValue = 1;
var value = "ronald";

// chrome.storage.local.set({ 'value': theValue }, function () {
//   // Notify that we saved.
//   console.log("Settings saved");
// });

// chrome.storage.sync.set({ 'value': theValue }, function () {
//   console.log("This works??");
// })
// chrome.storageArea.set('ronald', 'stevens');
// chrome.runtime.onStartup(function () {
//   console.log('loaded');
// });

var storage = chrome.storage.local;
storage.set({ 'css': "cssCode" }, function () {
  // Notify that we saved.
  console.log('Settings saved');
});

storage.get('css', function (items) {
  // To avoid checking items.css we could specify storage.get({css: ''}) to
  // return a default value of '' if there is no css value yet.
  if (items.css) {
    // textarea.value = items.css;
    console.log('Loaded saved CSS.' + items.css);
  }
});


chrome.storage.local.set({ 'channels': 'dontbuy' });
// console.log("Stored : " + chrome.storage.local.get('channels', function (items) { }));

// function message(msg) {
//   var message = document.querySelector('.message');
//   message.innerText = msg;
//   setTimeout(function () {
//     message.innerText = '';
//   }, 3000);
// }
