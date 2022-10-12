"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nfc_nfc_module_ts"],{

/***/ 9227:
/*!*******************************************!*\
  !*** ./src/app/nfc/nfc-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NfcPageRoutingModule": () => (/* binding */ NfcPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nfc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nfc.page */ 2128);




const routes = [
    {
        path: '',
        component: _nfc_page__WEBPACK_IMPORTED_MODULE_0__.NfcPage
    }
];
let NfcPageRoutingModule = class NfcPageRoutingModule {
};
NfcPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NfcPageRoutingModule);



/***/ }),

/***/ 7356:
/*!***********************************!*\
  !*** ./src/app/nfc/nfc.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NfcPageModule": () => (/* binding */ NfcPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _nfc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nfc-routing.module */ 9227);
/* harmony import */ var _awesome_cordova_plugins_nfc_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/nfc/ngx */ 7866);
/* harmony import */ var _nfc_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nfc.page */ 2128);








let NfcPageModule = class NfcPageModule {
};
NfcPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _nfc_routing_module__WEBPACK_IMPORTED_MODULE_0__.NfcPageRoutingModule,
        ],
        declarations: [_nfc_page__WEBPACK_IMPORTED_MODULE_2__.NfcPage],
        providers: [_awesome_cordova_plugins_nfc_ngx__WEBPACK_IMPORTED_MODULE_1__.NFC, _awesome_cordova_plugins_nfc_ngx__WEBPACK_IMPORTED_MODULE_1__.Ndef]
    })
], NfcPageModule);



/***/ }),

/***/ 2128:
/*!*********************************!*\
  !*** ./src/app/nfc/nfc.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NfcPage": () => (/* binding */ NfcPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nfc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nfc.page.html?ngResource */ 8883);
/* harmony import */ var _nfc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nfc.page.scss?ngResource */ 4665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/nfc/ngx */ 7866);





let NfcPage = class NfcPage {
    constructor(nfc, ndef) {
        this.nfc = nfc;
        this.ndef = ndef;
    }
    ngOnInit() {
    }
    readNFC() {
        let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
        this.readerMode$ = this.nfc.readerMode(flags).subscribe(tag => console.log(JSON.stringify(tag)), err => console.log('Error reading tag', err));
    }
};
NfcPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__.NFC },
    { type: _awesome_cordova_plugins_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__.Ndef }
];
NfcPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-nfc',
        template: _nfc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nfc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NfcPage);



/***/ }),

/***/ 5400:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 2474);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 8219);



var AwesomeCordovaNativePlugin =
/** @class */
function () {
  function AwesomeCordovaNativePlugin() {}
  /**
   * Returns a boolean that indicates whether the plugin is installed
   *
   * @returns {boolean}
   */


  AwesomeCordovaNativePlugin.installed = function () {
    var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
    return isAvailable;
  };
  /**
   * Returns the original plugin object
   */


  AwesomeCordovaNativePlugin.getPlugin = function () {
    if (typeof window !== 'undefined') {
      return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
    }

    return null;
  };
  /**
   * Returns the plugin's name
   */


  AwesomeCordovaNativePlugin.getPluginName = function () {
    var pluginName = this.pluginName;
    return pluginName;
  };
  /**
   * Returns the plugin's reference
   */


  AwesomeCordovaNativePlugin.getPluginRef = function () {
    var pluginRef = this.pluginRef;
    return pluginRef;
  };
  /**
   * Returns the plugin's install name
   */


  AwesomeCordovaNativePlugin.getPluginInstallName = function () {
    var plugin = this.plugin;
    return plugin;
  };
  /**
   * Returns the plugin's supported platforms
   */


  AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
    var platform = this.platforms;
    return platform;
  };

  AwesomeCordovaNativePlugin.pluginName = '';
  AwesomeCordovaNativePlugin.pluginRef = '';
  AwesomeCordovaNativePlugin.plugin = '';
  AwesomeCordovaNativePlugin.repo = '';
  AwesomeCordovaNativePlugin.platforms = [];
  AwesomeCordovaNativePlugin.install = '';
  return AwesomeCordovaNativePlugin;
}();



/***/ }),

/***/ 3512:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
  if (typeof process === 'undefined') {
    var win_1 = typeof window !== 'undefined' ? window : {};
    var DEVICE_READY_TIMEOUT_1 = 5000; // To help developers using cordova, we listen for the device ready event and
    // log an error if it didn't fire in a reasonable amount of time. Generally,
    // when this happens, developers should remove and reinstall plugins, since
    // an inconsistent plugin is often the culprit.

    var before_1 = Date.now();
    var didFireReady_1 = false;
    win_1.document.addEventListener('deviceready', function () {
      console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
      didFireReady_1 = true;
    });
    setTimeout(function () {
      if (!didFireReady_1 && win_1.cordova) {
        console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
      }
    }, DEVICE_READY_TIMEOUT_1);
  }
}

/***/ }),

/***/ 2474:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6312);

var ERR_CORDOVA_NOT_AVAILABLE = {
  error: 'cordova_not_available'
};
var ERR_PLUGIN_NOT_INSTALLED = {
  error: 'plugin_not_installed'
};
/**
 * @param callback
 */

function getPromise(callback) {
  var tryNativePromise = function () {
    if (Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  if (typeof window !== 'undefined' && window.angular) {
    var doc = window.document;
    var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();

    if (injector) {
      var $q = injector.get('$q');
      return $q(function (resolve, reject) {
        callback(resolve, reject);
      });
    }

    console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
  }

  return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */

function wrapPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var pluginResult, rej;
  var p = getPromise(function (resolve, reject) {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return resolve(args);
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return reject(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    }

    rej = reject;
  }); // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error

  if (pluginResult && pluginResult.error) {
    p.catch(function () {});
    typeof rej === 'function' && rej(pluginResult.error);
  }

  return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */

function wrapOtherPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return getPromise(function (resolve, reject) {
    var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);

    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({
        error: 'unexpected_error'
      });
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */


function wrapObservable(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
    var pluginResult;

    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return observer.next(args);
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return observer.error(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
    }

    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }

    return function () {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }

          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
        console.warn(e);
      }
    };
  });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */


function wrapEventObservable(event, element) {
  element = typeof window !== 'undefined' && element ? get(window, element) : element || (typeof window !== 'undefined' ? window : {});
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */


function checkAvailability(plugin, methodName, pluginName) {
  var pluginRef, pluginPackage;

  if (typeof plugin === 'string') {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }

  var pluginInstance = getPlugin(pluginRef);

  if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
    if (typeof window === 'undefined' || !window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }

    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }

  return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */

function instanceAvailability(pluginObj, methodName) {
  return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function setIndex(args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  } // ignore resolve and reject in case sync


  if (opts.sync) {
    return args;
  } // If the plugin method expects myMethod(success, err, options)


  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push(function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
    var obj = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    var setSuccessIndex = function () {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };

    var setErrorIndex = function () {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
      // defined and thus causing non expected behavior.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }

  return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  } // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.


  args = setIndex(args, opts, resolve, reject);
  var availabilityCheck = checkAvailability(pluginObj, methodName);

  if (availabilityCheck === true) {
    var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef()); // eslint-disable-next-line prefer-spread

    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }

  args = setIndex(args, opts, resolve, reject);

  if (instanceAvailability(pluginObj, methodName)) {
    // eslint-disable-next-line prefer-spread
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
  }
}
/**
 * @param pluginRef
 */

function getPlugin(pluginRef) {
  if (typeof window !== 'undefined') {
    return get(window, pluginRef);
  }

  return null;
}
/**
 * @param element
 * @param path
 */

function get(element, path) {
  var paths = path.split('.');
  var obj = element;

  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }

    obj = obj[paths[i]];
  }

  return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */

function pluginWarn(pluginName, plugin, method) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
  }

  if (plugin) {
    console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
  }
}
/**
 * @private
 * @param pluginName
 * @param method
 */

function cordovaWarn(pluginName, method) {
  if (typeof process === 'undefined') {
    if (method) {
      console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    } else {
      console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */

var wrap = function (pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */

function wrapInstance(pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (opts.sync) {
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;

        if (opts.destruct) {
          pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.next(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.error(args);
          });
        } else {
          pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }

        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
        }

        return function () {
          try {
            if (opts.clearWithArgs) {
              return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
            }

            return callInstance(pluginObj, opts.clearFunction, []);
          } catch (e) {
            console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
            console.warn(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise(function (resolve, reject) {
        var result;

        if (opts.destruct) {
          result = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }

        if (result && result.then) {
          result.then(resolve, reject);
        } else {
          reject();
        }
      });
    } else {
      var pluginResult_1, rej_1;
      var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }

        rej_1 = reject;
      }); // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error

      if (pluginResult_1 && pluginResult_1.error) {
        p.catch(function () {});
        typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
      }

      return p;
    }
  };
}

/***/ }),

/***/ 1485:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2474);


/**
 * @param pluginObj
 * @param methodName
 */

function overrideFunction(pluginObj, methodName) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
    var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);

    if (availabilityCheck === true) {
      var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
      pluginInstance_1[methodName] = observer.next.bind(observer);
      return function () {
        return pluginInstance_1[methodName] = function () {};
      };
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */


function cordovaFunctionOverride(pluginObj, methodName, args) {
  if (args === void 0) {
    args = [];
  }

  return overrideFunction(pluginObj, methodName);
}

/***/ }),

/***/ 5084:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2474);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */

function cordovaInstance(pluginObj, methodName, config, args) {
  args = Array.from(args);
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 1830:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2474);

/**
 * @param pluginObj
 * @param key
 */

function cordovaPropertyGet(pluginObj, key) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
  }

  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */

function cordovaPropertySet(pluginObj, key, value) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
  }
}

/***/ }),

/***/ 4461:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 2474);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */

function cordova(pluginObj, methodName, config, args) {
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 6936:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }

  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */

function instancePropertySet(pluginObj, key, value) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}

/***/ }),

/***/ 3142:
/*!******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4624:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 3512);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 5400);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 2474);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 4461);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 1485);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 5084);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 1830);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 6936);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 3142);

 // Decorators








(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

/***/ }),

/***/ 8219:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;

  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }

    obj = obj[paths[i]];
  }

  return obj;
}
/**
 * @param callback
 * @private
 */

function getPromise(callback) {
  if (callback === void 0) {
    callback = function () {};
  }

  var tryNativePromise = function () {
    if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  return tryNativePromise();
}

/***/ }),

/***/ 7866:
/*!*****************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/nfc/__ivy_ngcc__/ngx/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NFC": () => (/* binding */ NFC),
/* harmony export */   "Ndef": () => (/* binding */ Ndef),
/* harmony export */   "NfcUtil": () => (/* binding */ NfcUtil),
/* harmony export */   "TextHelper": () => (/* binding */ TextHelper),
/* harmony export */   "UriHelper": () => (/* binding */ UriHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 4624);






var NFC =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NFC, _super);

  function NFC() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  NFC.prototype.readerMode = function (flags) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "readerMode", {
      "observable": true,
      "clearFunction": "disableReaderMode",
      "clearWithArgs": false
    }, arguments);
  };

  NFC.prototype.scanNdef = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "scanNdef", {
      "sync": true
    }, arguments);
  };

  NFC.prototype.scanTag = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "scanTag", {
      "sync": true
    }, arguments);
  };

  NFC.prototype.cancelScan = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cancelScan", {
      "sync": true
    }, arguments);
  };

  NFC.prototype.connect = function (tech, timeout) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "connect", {
      "sync": true
    }, arguments);
  };

  NFC.prototype.close = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "close", {
      "sync": true
    }, arguments);
  };

  NFC.prototype.transceive = function (data) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "transceive", {
      "sync": true
    }, arguments);
  };

  NFC.prototype.beginSession = function (onSuccess, onFailure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "beginSession", {
      "observable": true,
      "successIndex": 0,
      "errorIndex": 3,
      "clearFunction": "invalidateSession",
      "clearWithArgs": true
    }, arguments);
  };

  NFC.prototype.addNdefListener = function (onSuccess, onFailure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addNdefListener", {
      "observable": true,
      "successIndex": 0,
      "errorIndex": 3,
      "clearFunction": "removeNdefListener",
      "clearWithArgs": true
    }, arguments);
  };

  NFC.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addTagDiscoveredListener", {
      "observable": true,
      "successIndex": 0,
      "errorIndex": 3,
      "clearFunction": "removeTagDiscoveredListener",
      "clearWithArgs": true
    }, arguments);
  };

  NFC.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addMimeTypeListener", {
      "observable": true,
      "successIndex": 1,
      "errorIndex": 4,
      "clearFunction": "removeMimeTypeListener",
      "clearWithArgs": true
    }, arguments);
  };

  NFC.prototype.addNdefFormatableListener = function (onSuccess, onFailure) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addNdefFormatableListener", {
      "observable": true,
      "successIndex": 0,
      "errorIndex": 3
    }, arguments);
  };

  NFC.prototype.write = function (message) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "write", {}, arguments);
  };

  NFC.prototype.makeReadOnly = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "makeReadOnly", {}, arguments);
  };

  NFC.prototype.share = function (message) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "share", {}, arguments);
  };

  NFC.prototype.unshare = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "unshare", {}, arguments);
  };

  NFC.prototype.erase = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "erase", {}, arguments);
  };

  NFC.prototype.handover = function (uris) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "handover", {}, arguments);
  };

  NFC.prototype.stopHandover = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stopHandover", {}, arguments);
  };

  NFC.prototype.showSettings = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showSettings", {}, arguments);
  };

  NFC.prototype.enabled = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "enabled", {}, arguments);
  };

  NFC.prototype.bytesToString = function (bytes) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bytesToString", {
      "sync": true
    }, arguments);
  };

  NFC.prototype.stringToBytes = function (str) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stringToBytes", {
      "sync": true
    }, arguments);
  };

  NFC.prototype.bytesToHexString = function (bytes) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bytesToHexString", {
      "sync": true
    }, arguments);
  };

  Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_A", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_A");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_A", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_B", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_B");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_B", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_F", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_F");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_F", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_V", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_V");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_V", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_BARCODE", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_BARCODE");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_BARCODE", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NFC.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_SKIP_NDEF_CHECK");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_SKIP_NDEF_CHECK", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NFC.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NO_PLATFORM_SOUNDS");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value);
    },
    enumerable: false,
    configurable: true
  });
  NFC.pluginName = "NFC";
  NFC.plugin = "phonegap-nfc";
  NFC.pluginRef = "nfc";
  NFC.repo = "https://github.com/chariotsolutions/phonegap-nfc";
  NFC.platforms = ["Android", "iOS", "Windows"];

  NFC.ɵfac = /*@__PURE__*/function () {
    var ɵNFC_BaseFactory;
    return function NFC_Factory(t) {
      return (ɵNFC_BaseFactory || (ɵNFC_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NFC)))(t || NFC);
    };
  }();

  NFC.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NFC,
    factory: function (t) {
      return NFC.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NFC, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return NFC;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



var Ndef =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Ndef, _super);

  function Ndef() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Ndef.prototype.record = function (tnf, type, id, payload) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "record", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.textRecord = function (text, languageCode, id) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "textRecord", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.uriRecord = function (uri, id) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uriRecord", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.absoluteUriRecord = function (uri, payload, id) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "absoluteUriRecord", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.mimeMediaRecord = function (mimeType, payload) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "mimeMediaRecord", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.smartPoster = function (ndefRecords, id) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "smartPoster", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.emptyRecord = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "emptyRecord", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.androidApplicationRecord = function (packageName) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "androidApplicationRecord", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.encodeMessage = function (ndefRecords) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "encodeMessage", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.decodeMessage = function (bytes) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "decodeMessage", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.decodeTnf = function (tnf_byte) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "decodeTnf", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "encodeTnf", {
      "sync": true
    }, arguments);
  };

  Ndef.prototype.tnfToString = function (tnf) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "tnfToString", {
      "sync": true
    }, arguments);
  };

  Object.defineProperty(Ndef.prototype, "TNF_EMPTY", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_EMPTY");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_EMPTY", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "TNF_WELL_KNOWN", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_WELL_KNOWN");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_WELL_KNOWN", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "TNF_MIME_MEDIA", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_MIME_MEDIA");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_MIME_MEDIA", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "TNF_ABSOLUTE_URI", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_ABSOLUTE_URI");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_ABSOLUTE_URI", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "TNF_EXTERNAL_TYPE", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_EXTERNAL_TYPE");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_EXTERNAL_TYPE", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "TNF_UNKNOWN", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_UNKNOWN");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_UNKNOWN", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "TNF_UNCHANGED", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_UNCHANGED");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_UNCHANGED", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "TNF_RESERVED", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_RESERVED");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_RESERVED", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "textHelper", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "textHelper");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "textHelper", value);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Ndef.prototype, "uriHelper", {
    get: function () {
      return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "uriHelper");
    },
    set: function (value) {
      (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "uriHelper", value);
    },
    enumerable: false,
    configurable: true
  });
  Ndef.pluginName = "NFC";
  Ndef.plugin = "phonegap-nfc";
  Ndef.pluginRef = "ndef";

  Ndef.ɵfac = /*@__PURE__*/function () {
    var ɵNdef_BaseFactory;
    return function Ndef_Factory(t) {
      return (ɵNdef_BaseFactory || (ɵNdef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Ndef)))(t || Ndef);
    };
  }();

  Ndef.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Ndef,
    factory: function (t) {
      return Ndef.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Ndef, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return Ndef;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



var NfcUtil =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NfcUtil, _super);

  function NfcUtil() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  NfcUtil.prototype.toHex = function (i) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "toHex", {
      "sync": true
    }, arguments);
  };

  NfcUtil.prototype.toPrintable = function (i) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "toPrintable", {
      "sync": true
    }, arguments);
  };

  NfcUtil.prototype.bytesToString = function (i) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bytesToString", {
      "sync": true
    }, arguments);
  };

  NfcUtil.prototype.stringToBytes = function (s) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stringToBytes", {
      "sync": true
    }, arguments);
  };

  NfcUtil.prototype.bytesToHexString = function (bytes) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bytesToHexString", {
      "sync": true
    }, arguments);
  };

  NfcUtil.prototype.isType = function (record, tnf, type) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isType", {
      "sync": true
    }, arguments);
  };

  NfcUtil.prototype.arrayBufferToHexString = function (buffer) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "arrayBufferToHexString", {
      "sync": true
    }, arguments);
  };

  NfcUtil.prototype.hexStringToArrayBuffer = function (hexString) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hexStringToArrayBuffer", {
      "sync": true
    }, arguments);
  };

  NfcUtil.pluginName = "NFC";
  NfcUtil.plugin = "phonegap-nfc";
  NfcUtil.pluginRef = "util";

  NfcUtil.ɵfac = /*@__PURE__*/function () {
    var ɵNfcUtil_BaseFactory;
    return function NfcUtil_Factory(t) {
      return (ɵNfcUtil_BaseFactory || (ɵNfcUtil_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NfcUtil)))(t || NfcUtil);
    };
  }();

  NfcUtil.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NfcUtil,
    factory: function (t) {
      return NfcUtil.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NfcUtil, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return NfcUtil;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



var TextHelper =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(TextHelper, _super);

  function TextHelper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TextHelper.prototype.decodePayload = function (data) {
    return;
  };

  TextHelper.prototype.encodePayload = function (text, lang) {
    return;
  };

  return TextHelper;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



var UriHelper =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(UriHelper, _super);

  function UriHelper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  UriHelper.prototype.decodePayload = function (data) {
    return;
  };

  UriHelper.prototype.encodePayload = function (uri) {
    return;
  };

  return UriHelper;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 4665:
/*!**********************************************!*\
  !*** ./src/app/nfc/nfc.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZmMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8883:
/*!**********************************************!*\
  !*** ./src/app/nfc/nfc.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>nfc</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-button (click)=\"readNFC()\">Lire NFC</ion-button>\n\n{{ tag }}\n{{ readerMode$ }}\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_nfc_nfc_module_ts.js.map