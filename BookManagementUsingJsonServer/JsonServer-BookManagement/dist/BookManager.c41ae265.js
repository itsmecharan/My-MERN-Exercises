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

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

window.addEventListener('DOMContentLoaded', function () {
  return render();
});

var render = function render() {
  return __awaiter(void 0, void 0, void 0, function () {
    function deleteRow(bookid) {
      var _loop_1 = function _loop_1(x) {
        if (bookid == books[x].bookid) {
          function deleteBook() {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , fetch("http://localhost:8000/Books/" + books[x].id, {
                      method: 'DELETE'
                    })];

                  case 1:
                    _a.sent();

                    setStatus: 'Delete successful';

                    location.reload();
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }

          deleteBook();
          return "break";
        }
      };

      for (var x = 0; x < books.length; x++) {
        var state_1 = _loop_1(x);

        if (state_1 === "break") break;
      }

      displayTable(books, document.getElementById("displaybooks"));
    }

    var res, books, displayTable, addbooksbtn, searchbtn, displaySearchedBooks, searchByText, searchBooksByValue, textSearcher;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , fetch('http://localhost:8000/Books/')];

        case 1:
          res = _a.sent();
          return [4
          /*yield*/
          , res.json()];

        case 2:
          books = _a.sent();

          displayTable = function displayTable(books, table) {
            table.innerHTML = "<tr>\n  <th>Id</th>\n  <th>Title</th> \n  <th>Author</th>\n  <th>Price</th>\n  <th>Rating</th>\n  <th>Details</th>\n  <th>Action</th>\n</tr>";

            for (var i = 0; i < books.length; i++) {
              var row = "<tr id=\"row-" + (i + 1) + "\">\n<td>" + books[i].bookid + "</td>\n<td>" + books[i].booktitle + "</td>\n<td>" + books[i].bookauthor + "</td>\n<td>" + books[i].bookprice + "</td>\n<td>" + books[i].bookrating + "</td>\n<td>" + books[i].bookdetails + "</td>\n<td><button class=\"delete-button\" type=\"button\" \nid=\"row-" + (i + 1) + "\" onclick=\"x.deleteRow(" + books[i].bookid + ")\">delete</button></td>\n</tr>";

              if (table != null) {
                table.innerHTML += row;
              }
            }
          };

          if (document.getElementById("displaybooks")) {
            document.getElementById("booklist").innerHTML = "Book List";
            displayTable(books, document.getElementById("displaybooks"));
          }

          window.x = {
            deleteRow: deleteRow
          };
          addbooksbtn = document.getElementById("addbooksbtn");

          if (addbooksbtn != null) {
            addbooksbtn.onclick = function () {
              var bookid = document.getElementById("bookid");
              var booktitle = document.getElementById("booktitle");
              var bookauthor = document.getElementById("bookauthor");
              var bookrating = document.getElementById("bookrating");
              var bookprice = document.getElementById("bookprice");
              var bookdetails = document.getElementById("bookdetails");

              if (bookid.value != "" && booktitle.value != "" && bookauthor.value != "" && bookrating.value != "" && bookprice.value != "" && bookdetails.value != "") {
                var data = {
                  bookid: bookid.value,
                  booktitle: booktitle.value,
                  bookauthor: bookauthor.value,
                  bookrating: bookrating.value,
                  bookprice: bookprice.value,
                  bookdetails: bookdetails.value
                };
                fetch("http://localhost:8000/Books/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                }).then(function (response) {
                  return response.json();
                }).catch(function (error) {
                  return console.error('Error:', error);
                }).then(function (response) {
                  console.log('Success:', JSON.stringify(response));
                  location.reload();
                });
              } else {
                document.getElementById("error message").innerHTML = "Enter the all details!";
              }
            };
          }

          searchbtn = document.getElementById("searchbtn");

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

                if (s == "Search by Author") {
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

          displaySearchedBooks = function displaySearchedBooks(temp) {
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
          };

          searchByText = function searchByText(text, searchby) {
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

              if (searchby == "Search by Author") {
                var author = books[i].bookauthor.toLowerCase();
                var isthere = textSearcher(author, searchedtext);

                if (isthere) {
                  searchedBooks.push(books[i]);
                }
              }
            }

            return searchedBooks;
          };

          searchBooksByValue = function searchBooksByValue(value, searchby) {
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
          };

          textSearcher = function textSearcher(fulltext, searchedtext) {
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
          };

          return [2
          /*return*/
          ];
      }
    });
  });
};
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61105" + '/');

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