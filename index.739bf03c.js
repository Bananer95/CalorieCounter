// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ljsGX":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _eventBtnJs = require("./eventBtn.js");
var _eventBtnJsDefault = parcelHelpers.interopDefault(_eventBtnJs);
var _eventLinksJs = require("./eventLinks.js");
var _eventLinksJsDefault = parcelHelpers.interopDefault(_eventLinksJs);
var _closingEventsJs = require("./closingEvents.js");
_eventBtnJsDefault.default();
_eventLinksJsDefault.default();
_closingEventsJs.closingEventGenders();
_closingEventsJs.closingEventFisical(); //  Не могу изменять экспортированные перменные в других файлах

},{"./eventBtn.js":"fBXZA","./eventLinks.js":"9y8CE","./closingEvents.js":"cihMi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBXZA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "btnReult", ()=>btnReult
);
var _closingEventsJs = require("./closingEvents.js");
var _helpersJs = require("./helpers.js");
var _eventLinks = require("./eventLinks");
const btnReult = document.querySelector('div.btn');
const popatResult = document.getElementById('result');
const ageInput = document.querySelector('div.age_input>input');
const grothInput = document.querySelector('div.groth_input>input');
const eightInput = document.querySelector('div.eight_input>input');
const textAge = document.querySelector('div.link_age>h5');
const textGroth = document.querySelector('div.link_groth>h5');
const textEight = document.querySelector('div.link_eight>h5');
const resultNorma = document.querySelector('div.result_normal>p>span');
const resultUp = document.querySelector('div.result_up>p>span');
const resultDown = document.querySelector('div.result_down>p>span');
let age = localStorage.age ? JSON.parse(localStorage.age) : '';
let groth = localStorage.groth ? JSON.parse(localStorage.groth) : '';
let eight = localStorage.eight ? JSON.parse(localStorage.eight) : '';
if (age) {
    _helpersJs.showText(textAge, `Вашь возраст: ${age} `);
    _helpersJs.enableButton();
    _helpersJs.changeValue(ageInput, age);
}
if (groth) {
    _helpersJs.showText(textGroth, `Вашь рост: ${groth} `);
    _helpersJs.enableButton();
    _helpersJs.changeValue(grothInput, groth);
}
if (eight) {
    _helpersJs.showText(textEight, `Вашь вес: ${eight} `);
    _helpersJs.enableButton();
    _helpersJs.changeValue(eightInput, eight);
}
function eventBtn() {
    btnReult.addEventListener('click', (event)=>{
        const res = event.target.closest('button.btn_calculation');
        const claer = event.target.closest('button.btn_clear');
        let normal;
        let normalPlus;
        let normalMinus;
        if (_eventLinks.btnCler.textContent === 'Очистить') {
            if (res) {
                _helpersJs.addClass(popatResult, 'open');
                _helpersJs.showText(_eventLinks.btnCler, 'Закрыть');
                normal = Math.ceil(10 * Number(eightInput.value) + 6.25 * Number(grothInput.value) - 5 * Number(ageInput.value) + _closingEventsJs.sex);
                normalPlus = Math.ceil(normal + normal * 0.15);
                normalMinus = Math.floor(normal - normal * 0.15);
                _helpersJs.showText(resultNorma, normal);
                _helpersJs.showText(resultUp, normalPlus);
                _helpersJs.showText(resultDown, normalMinus);
                localStorage.setItem('age', JSON.stringify(+ageInput.value));
                localStorage.setItem('groth', JSON.stringify(+grothInput.value));
                localStorage.setItem('eight', JSON.stringify(+eightInput.value));
            } else if (claer) {
                _helpersJs.removeClass(popatResult, 'open');
                _helpersJs.showText(_closingEventsJs.textGender, 'Выберите ваш пол');
                _helpersJs.showText(_closingEventsJs.textFisical, `Выберите физическую активность`);
                _helpersJs.showText(textAge, 'Укажите ваш возраст');
                _helpersJs.showText(textEight, 'Укажите ваш вес');
                _helpersJs.showText(textGroth, 'Укажите ваш рост');
                _eventLinks.btnRes.setAttribute('disabled', 'disabled');
                localStorage.clear();
                ageInput.setAttribute('value', '');
                grothInput.setAttribute('value', '');
                eightInput.setAttribute('value', '');
            // changeValue  не работает функция
            }
        } else if (_eventLinks.btnCler.textContent == 'Закрыть') {
            if (_closingEventsJs.age.classList.contains('show')) {
                _helpersJs.removeClass(_closingEventsJs.age, 'show');
                _helpersJs.showText(_eventLinks.btnCler, 'Очистить');
                if (ageInput.value) _helpersJs.showText(textAge, `Вашь возраст: ${+ageInput.value}`);
                _eventLinks.btnRes.removeAttribute('disabled');
            } else if (_closingEventsJs.groth.classList.contains('show')) {
                _helpersJs.removeClass(_closingEventsJs.groth, 'show');
                if (grothInput.value) _helpersJs.showText(textGroth, `Вашь рост: ${+grothInput.value}`);
                _helpersJs.showText(_eventLinks.btnCler, 'Очистить');
                _helpersJs.enableButton();
            } else if (_closingEventsJs.eight.classList.contains('show')) {
                _helpersJs.removeClass(_closingEventsJs.eight, 'show');
                if (eightInput.value) _helpersJs.showText(textEight, `Вашь вес: ${eightInput.value}`);
                _helpersJs.showText(_eventLinks.btnCler, 'Очистить');
                _eventLinks.btnRes.removeAttribute('disabled');
            } else if (popatResult.classList.contains('open')) {
                _helpersJs.removeClass(popatResult, 'open');
                _helpersJs.showText(_eventLinks.btnCler, 'Очистить');
            }
        }
    });
}
exports.default = eventBtn;

},{"./closingEvents.js":"cihMi","./helpers.js":"hGI1E","./eventLinks":"9y8CE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cihMi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gender", ()=>gender
);
parcelHelpers.export(exports, "age", ()=>age
);
parcelHelpers.export(exports, "groth", ()=>groth
);
parcelHelpers.export(exports, "fisical", ()=>fisical
);
parcelHelpers.export(exports, "eight", ()=>eight
);
parcelHelpers.export(exports, "textGender", ()=>textGender
);
parcelHelpers.export(exports, "textFisical", ()=>textFisical
);
parcelHelpers.export(exports, "sex", ()=>sex
);
parcelHelpers.export(exports, "closingEventGenders", ()=>closingEventGenders
);
parcelHelpers.export(exports, "closingEventFisical", ()=>closingEventFisical
);
var _eventLinksJs = require("./eventLinks.js");
var _helpersJs = require("./helpers.js");
const gender = document.querySelector('div.container_genders');
const age = document.querySelector('div.container_age');
const groth = document.querySelector('div.container_groth');
const fisical = document.querySelector('div.container_fisical');
const eight = document.querySelector('div.container_eight');
const textGender = document.querySelector('div.link_gender>h5');
const textFisical = document.querySelector('div.link_fisical>h5');
let sex = localStorage.obj ? JSON.parse(localStorage.obj) : '';
if (sex === 5) _helpersJs.showText(textGender, 'Ваш пол: Мужской');
else if (sex === -161) _helpersJs.showText(textGender, 'Ваш пол: Женский');
// Gender
function closingEventGenders() {
    gender.addEventListener('click', (event)=>{
        const man = event.target.closest('div.man');
        const woman = event.target.closest('div.woman');
        if (man) {
            _helpersJs.removeClass(gender, 'show');
            _helpersJs.showText(textGender, 'Ваш пол: Мужской');
            _helpersJs.showText(_eventLinksJs.btnCler, 'Очистить');
            _helpersJs.enableButton();
            sex = 5;
            localStorage.setItem('obj', JSON.stringify(sex));
        } else if (woman) {
            _helpersJs.removeClass(gender, 'show');
            _helpersJs.showText(textGender, 'Ваш пол: Женсикй');
            _helpersJs.showText(_eventLinksJs.btnCler, 'Очистить');
            _helpersJs.enableButton();
            sex = -161;
            localStorage.setItem('obj', JSON.stringify(sex));
        }
    });
}
//  Fisical
let fis = localStorage.fisical ? JSON.parse(localStorage.fisical) : '';
if (fis == 1) _helpersJs.showText(textFisical, 'Ваша физ.активность: Минимальная');
else if (fis == 2) _helpersJs.showText(textFisical, 'Ваша физ.активность: Низкая');
else if (fis == 3) _helpersJs.showText(textFisical, 'Ваша физ.активность: Средняя');
else if (fis == 4) _helpersJs.showText(textFisical, 'Ваша физ.активность: Высокая');
else if (fis == 5) _helpersJs.showText(textFisical, 'Ваша физ.активность: Очень высокая');
// При клике на текст не срабатывает действие
function closingEventFisical() {
    fisical.addEventListener('click', (event)=>{
        switch(event.target.dataset.revie){
            case 'minimal':
                _helpersJs.showText(textFisical, 'Ваша физ.активность: Минимальная');
                _helpersJs.showText(_eventLinksJs.btnCler, 'Очистить');
                localStorage.setItem('fisical', JSON.stringify(1));
                break;
            case 'low':
                _helpersJs.showText(textFisical, 'Ваша физ.активность: Низкая');
                _helpersJs.showText(_eventLinksJs.btnCler, 'Очистить');
                localStorage.setItem('fisical', JSON.stringify(2));
                break;
            case 'average':
                _helpersJs.showText(textFisical, 'Ваша физ.активность: Средняя');
                _helpersJs.showText(_eventLinksJs.btnCler, 'Очистить');
                localStorage.setItem('fisical', JSON.stringify(3));
                break;
            case 'high':
                _helpersJs.showText(textFisical, 'Ваша физ.активность: Высокая');
                _helpersJs.showText(_eventLinksJs.btnCler, 'Очистить');
                localStorage.setItem('fisical', JSON.stringify(4));
                break;
            case 'veryHigh':
                _helpersJs.showText(textFisical, 'Ваша физ.активность: Очень высокая');
                _helpersJs.showText(_eventLinksJs.btnCler, 'Очистить');
                localStorage.setItem('fisical', JSON.stringify(5));
                break;
        }
        _helpersJs.removeClass(fisical, 'show');
        _helpersJs.enableButton();
    });
}

},{"./eventLinks.js":"9y8CE","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9y8CE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "btnCler", ()=>btnCler
);
parcelHelpers.export(exports, "btnRes", ()=>btnRes
);
var _closingEventsJs = require("./closingEvents.js");
var _helpersJs = require("./helpers.js");
const btnCler = document.querySelector('button.btn_clear');
const btnRes = document.querySelector('button.btn_calculation');
const links = document.getElementById('links');
function eventLinks() {
    links.addEventListener('click', (event)=>{
        btnRes.setAttribute('disabled', 'disabled');
        switch(event.target.dataset.action){
            case 'link_gender':
                _helpersJs.showBlock(_closingEventsJs.gender);
                break;
            case 'link_fisical':
                _helpersJs.showBlock(_closingEventsJs.fisical);
                break;
            case 'link_age':
                _helpersJs.showBlock(_closingEventsJs.age);
                break;
            case 'link_groth':
                _helpersJs.showBlock(_closingEventsJs.groth);
                break;
            case 'link_eight':
                _helpersJs.showBlock(_closingEventsJs.eight);
                break;
        }
    });
    return;
}
exports.default = eventLinks;

},{"./closingEvents.js":"cihMi","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showBlock", ()=>showBlock
);
parcelHelpers.export(exports, "showText", ()=>showText
);
parcelHelpers.export(exports, "removeClass", ()=>removeClass
);
parcelHelpers.export(exports, "enableButton", ()=>enableButton
);
parcelHelpers.export(exports, "addClass", ()=>addClass
);
parcelHelpers.export(exports, "changeValue", ()=>changeValue
);
var _eventLinks = require("./eventLinks");
function showBlock(block) {
    block.classList.add('show');
    _eventLinks.btnCler.textContent = 'Закрыть';
}
function showText(block, str) {
    block.textContent = str;
}
function removeClass(block, clas) {
    block.classList.remove(clas);
}
function addClass(block, clas) {
    block.classList.add(clas);
}
function enableButton() {
    _eventLinks.btnRes.removeAttribute('disabled');
}
function changeValue(block, str) {
    block.setAttribute('value', str);
}

},{"./eventLinks":"9y8CE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ljsGX","ebWYT"], "ebWYT", "parcelRequire0145")

//# sourceMappingURL=index.739bf03c.js.map
