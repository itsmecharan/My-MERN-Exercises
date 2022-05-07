// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"BookManager.ts":[function(require,module,exports) {
"use strict";

var books = [];

for (var i = 0; i < localStorage.length; i++) {
  var bookname = localStorage.key(i);
  var book = JSON.parse(localStorage.getItem(bookname));
  books.push(book);
}

function displayTable(books, table) {
  table.innerHTML = "<tr>\n  <th>Id</th>\n  <th>Title</th> \n  <th>Author</th>\n  <th>Price</th>\n  <th>Rating</th>\n  <th>Details</th>\n  <th>Action</th>\n</tr>";

  for (var i = 0; i < books.length; i++) {
    var row = "<tr id=\"row-" + (i + 1) + "\">\n<td>" + books[i].bookid + "</td>\n<td>" + books[i].booktitle + "</td>\n<td>" + books[i].bookauthor + "</td>\n<td>" + books[i].bookprice + "</td>\n<td>" + books[i].bookrating + "</td>\n<td>" + books[i].bookdetails + "</td>\n<td><button class=\"delete-button\" type=\"button\" \nid=\"row-" + (i + 1) + "\" onclick=\"x.deleteRow(" + books[i].bookid + ")\">delete</button></td>\n</tr>";

    if (table != null) {
      table.innerHTML += row;
    }
  }
}

if (document.getElementById("displaybooks")) {
  document.getElementById("booklist").innerHTML = "Book List";
  displayTable(books, document.getElementById("displaybooks"));
}

window.x = {
  deleteRow: deleteRow
};

function deleteRow(bookid) {
  for (var x = 0; x < books.length; x++) {
    if (bookid == books[x].bookid) {
      var bookname = localStorage.key(x);
      localStorage.removeItem(bookname);
      location.reload();
    }
  }

  displayTable(books, document.getElementById("displaybooks"));
} //Add Books to Local Storage


var addbooksbtn = document.getElementById("addbooksbtn");

if (addbooksbtn != null) {
  addbooksbtn.onclick = function () {
    var bookid = document.getElementById("bookid");
    var booktitle = document.getElementById("booktitle");
    var bookauthor = document.getElementById("bookauthor");
    var bookrating = document.getElementById("bookrating");
    var bookprice = document.getElementById("bookprice");
    var bookdetails = document.getElementById("bookdetails");

    if (bookid.value != "" && booktitle.value != "" && bookauthor.value != "" && bookrating.value != "" && bookprice.value != "" && bookdetails.value != "") {
      var myObj = {
        bookid: bookid.value,
        booktitle: booktitle.value,
        bookauthor: bookauthor.value,
        bookrating: bookrating.value,
        bookprice: bookprice.value,
        bookdetails: bookdetails.value
      };
      var myObj_serialized = JSON.stringify(myObj);
      localStorage.setItem("" + booktitle.value, myObj_serialized);
      document.getElementById("added").innerHTML = "Book Added";
    } else {
      document.getElementById("error message").innerHTML = "Enter the all details!";
    }
  };
} //Search Books


var searchbtn = document.getElementById("searchbtn");

if (searchbtn != null) {
  searchbtn.onclick = function () {
    if (document.getElementById("displaybooks")) {
      document.getElementById("displaybooks").style.display = "none";
    }

    if (document.getElementById("booklist")) {
      document.getElementById("booklist").style.display = "none";
    }

    if (document.getElementById("searchedbooks")) {
      document.getElementById("searchedbooks").style.display = "inline-block";
    }

    if (document.getElementById("displaySearchedBooks")) {
      document.getElementById("displaySearchedBooks").style.display = "inline-block";
    }

    if (document.getElementById("notfound")) {
      document.getElementById("notfound").style.display = "none";
    }

    var searchedinput = document.getElementById("searchedtxt");
    var opt = document.getElementById("select1").selectedIndex;
    var s = document.getElementsByTagName("option")[opt].text;

    if (searchedinput.value != "") {
      var books_1 = [];

      if (s == "Id Search") {
        books_1 = searchBooksByValue(searchedinput.value, s);
        displaySearchedBooks(books_1);
      }

      if (s == "Title Search") {
        books_1 = searchByText(searchedinput.value, s);
        displaySearchedBooks(books_1);
      }

      if (s == "Book by Author") {
        books_1 = searchByText(searchedinput.value, s);
        displaySearchedBooks(books_1);
      }

      if (s == "Min Rating") {
        books_1 = searchBooksByValue(searchedinput.value, s);
        displaySearchedBooks(books_1);
      }

      if (s == "Min Price") {
        books_1 = searchBooksByValue(searchedinput.value, s);
        displaySearchedBooks(books_1);
      }

      if (s == "Max Price") {
        books_1 = searchBooksByValue(searchedinput.value, s);
        displaySearchedBooks(books_1);
      }
    } else {
      if (document.getElementById("displaybooks")) {
        document.getElementById("displaybooks").style.display = "block";
      }

      if (document.getElementById("booklist")) {
        document.getElementById("booklist").style.display = "block";
      }
    }
  };
}

function displaySearchedBooks(temp) {
  if (temp.length != 0) {
    var table = document.getElementById("displaySearchedBooks");
    document.getElementById("searchedbooks").innerHTML = "Searched Books:";

    if (document.getElementById("displaySearchedBooks")) {
      displayTable(temp, document.getElementById("displaySearchedBooks"));
    }
  } else {
    document.getElementById("notfound").innerHTML = "No records found!";

    if (document.getElementById("notfound")) {
      document.getElementById("notfound").style.display = "block";
    }

    if (document.getElementById("searchedbooks")) {
      document.getElementById("searchedbooks").style.display = "none";
    }

    if (document.getElementById("displaySearchedBooks")) {
      document.getElementById("displaySearchedBooks").style.display = "none";
    }
  }
} //search books by title search, book by author


function searchByText(text, searchby) {
  var searchedBooks = []; // let isthere:boolean;

  var searchedtext = text.toLowerCase();

  for (var i = 0; i < books.length; i++) {
    if (searchby === "Title Search") {
      var title = books[i].booktitle.toLowerCase();
      var isthere = textSearcher(title, searchedtext);

      if (isthere) {
        searchedBooks.push(books[i]);
      }
    }

    if (searchby == "Book by Author") {
      var author = books[i].bookauthor.toLowerCase();
      var isthere = textSearcher(author, searchedtext);

      if (isthere) {
        searchedBooks.push(books[i]);
      }
    }
  }

  return searchedBooks;
} //Search Books by min rating, maximum price, minimum price,Book Id


function searchBooksByValue(value, searchby) {
  var searchedbooks = [];

  for (var i = 0; i < books.length; i++) {
    if (searchby == "Id Search") {
      var id = books[i].bookid;

      if (id == JSON.parse(value)) {
        searchedbooks.push(books[i]);
      }
    }

    if (searchby == "Min Rating") {
      var minimumRating = books[i].bookrating;

      if (minimumRating >= JSON.parse(value)) {
        searchedbooks.push(books[i]);
      }
    }

    if (searchby == "Min Price") {
      var minimumPrice = books[i].bookprice;

      if (minimumPrice >= JSON.parse(value)) {
        searchedbooks.push(books[i]);
      }
    }

    if (searchby == "Max Price") {
      var maximumPrice = books[i].bookprice;

      if (maximumPrice <= JSON.parse(value)) {
        searchedbooks.push(books[i]);
      }
    }
  }

  return searchedbooks;
}

function textSearcher(fulltext, searchedtext) {
  var p = fulltext.length;
  var q = searchedtext.length;
  var count = 0;

  for (var i = 0; i <= p - q; i++) {
    var j = void 0;

    for (j = 0; j < q; j++) {
      if (fulltext.charAt(i + j) != searchedtext.charAt(j)) {
        break;
      }
    }

    if (j == q) {
      count++;
      j = 0;
    }
  }

  if (count > 0) {
    return true;
  } else {
    return false;
  }
}
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57030" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","BookManager.ts"], null)
//# sourceMappingURL=/BookManager.c41ae265.js.map