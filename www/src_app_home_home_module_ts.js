"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ 1108);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 2003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_svc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-svc.service */ 4210);
/* harmony import */ var _services_local_n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-n.service */ 5682);






let HomePage = class HomePage {
    constructor(apiSvc, localNS) {
        this.apiSvc = apiSvc;
        this.localNS = localNS;
        this.overlayHidden = true;
        this.id = 0;
        this.hasNotified = false;
        this.bdd = {
            isHandled: false,
            client: {
                name: "Donovan",
                braceletId: 1,
                isOwner: false,
            }
        };
    }
    hideOverlay() {
        this.overlayHidden = true;
    }
    ngOnInit() {
        setInterval(() => {
            this.apiSvc.getStatus().subscribe((response) => {
                this.fall = response['fall'];
                this.idle = response['idle'];
                this.handling = response['handling'];
                console.log("fall " + this.fall);
                console.log("idle " + this.idle);
                console.log("handling " + this.handling);
            });
            if (this.fall && !this.handling && !this.hasNotified) {
                this.id++;
                this.localNS.showLocalNotification(this.id, "Boudette est tombée", String(this.fall));
                this.hasNotified = true;
            }
        }, 2000);
    }
    handleEmergency() {
        this.apiSvc.sendHandling().subscribe((response) => {
            console.log(response);
        });
        this.hasNotified = false;
    }
};
HomePage.ctorParameters = () => [
    { type: _services_api_svc_service__WEBPACK_IMPORTED_MODULE_2__.ApiSvcService },
    { type: _services_local_n_service__WEBPACK_IMPORTED_MODULE_3__.LocalNService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1108:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nav_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.component.html?ngResource */ 5687);
/* harmony import */ var _nav_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar.component.scss?ngResource */ 1653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() { }
};
NavBarComponent.ctorParameters = () => [];
NavBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nav-bar',
        template: _nav_bar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nav_bar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavBarComponent);



/***/ }),

/***/ 4210:
/*!*********************************************!*\
  !*** ./src/app/services/api-svc.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiSvcService": () => (/* binding */ ApiSvcService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);





let ApiSvcService = class ApiSvcService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = 'http://192.168.163.225/api';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    getStatus() {
        return this.httpClient.get(this.endpoint + '/status')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError('error')));
    }
    sendHandling() {
        return this.httpClient.post(this.endpoint + '/handling', {})
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError('error')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
        };
    }
};
ApiSvcService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiSvcService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ApiSvcService);



/***/ }),

/***/ 5682:
/*!*********************************************!*\
  !*** ./src/app/services/local-n.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNService": () => (/* binding */ LocalNService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/local-notifications */ 5568);



let LocalNService = class LocalNService {
    constructor() { }
    showLocalNotification(id, title, text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_local_notifications__WEBPACK_IMPORTED_MODULE_0__.LocalNotifications.schedule({
                notifications: [
                    {
                        title: title,
                        body: text,
                        id: id,
                        sound: 'doorbell.wav'
                    }
                ]
            });
        });
    }
};
LocalNService.ctorParameters = () => [];
LocalNService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LocalNService);



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/

/******** COOKIES PLUGIN ********/

/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */

const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);

class CapacitorCookiesPluginWeb extends WebPlugin {
  setCookie(options) {
    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value); // Clean & sanitize options

        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="

        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"

        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  deleteCookie(options) {
    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearCookies() {
    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];

        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearAllCookies() {
    var _this4 = this;

    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

}

const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
}); // UTILITY FUNCTIONS

/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */

const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result; // remove prefix "data:application/pdf;base64,"

        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };

      reader.onerror = error => reject(error);

      reader.readAsDataURL(blob);
    });
  });

  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */


const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */


const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;

    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      }); // last character will always be "&" so slice it off

      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }

    return `${accumulator}&${item}`;
  }, ''); // Remove initial "&" from the reduce

  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */


const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra); // Get the content-type

  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || ''; // If body is already a string, then pass it through as-is.

  if (typeof options.data === 'string') {
    output.body = options.data;
  } // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }

    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();

    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }

    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary

    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }

  return output;
}; // WEB IMPLEMENTATION


class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens

      let {
        responseType = 'text'
      } = response.ok ? options : {}; // If the response content-type is json, force the response to be json

      if (contentType.includes('application/json')) {
        responseType = 'json';
      }

      let data;
      let blob;

      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;

        case 'json':
          data = yield response.json();
          break;

        case 'document':
        case 'text':
        default:
          data = yield response.text();
      } // Convert fetch headers to Capacitor HttpHeaders


      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */


  get(options) {
    var _this5 = this;

    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */


  post(options) {
    var _this6 = this;

    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */


  put(options) {
    var _this7 = this;

    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */


  patch(options) {
    var _this8 = this;

    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */


  delete(options) {
    var _this9 = this;

    return (0,C_Users_donov_Documents_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }

}

const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 6398:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor/local-notifications/dist/esm/definitions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weekday": () => (/* binding */ Weekday)
/* harmony export */ });
/// <reference types="@capacitor/cli" />

/**
 * Day of the week. Used for scheduling notifications on a particular weekday.
 */
var Weekday;

(function (Weekday) {
  Weekday[Weekday["Sunday"] = 1] = "Sunday";
  Weekday[Weekday["Monday"] = 2] = "Monday";
  Weekday[Weekday["Tuesday"] = 3] = "Tuesday";
  Weekday[Weekday["Wednesday"] = 4] = "Wednesday";
  Weekday[Weekday["Thursday"] = 5] = "Thursday";
  Weekday[Weekday["Friday"] = 6] = "Friday";
  Weekday[Weekday["Saturday"] = 7] = "Saturday";
})(Weekday || (Weekday = {}));

/***/ }),

/***/ 5568:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/local-notifications/dist/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotifications": () => (/* binding */ LocalNotifications),
/* harmony export */   "Weekday": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Weekday)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 6398);

const LocalNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('LocalNotifications', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_local-notifications_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7671)).then(m => new m.LocalNotificationsWeb())
});



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.home-page {\n  position: relative;\n  --ion-background-color: rgba(255, 255, 255, 0.91);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 20px;\n}\n\n.home-image {\n  position: absolute;\n  width: 80%;\n  height: 200px;\n  left: 10%;\n  bottom: 27%;\n  background: #DAF1DF;\n  box-shadow: 0px 2px 4px 2px rgba(88, 251, 123, 0.25);\n  border-radius: 50px;\n}\n\n.avatar-img {\n  position: absolute;\n  z-index: 5;\n  left: 17%;\n  bottom: 5px;\n  width: 170px;\n}\n\n.banc-img {\n  position: absolute;\n  z-index: 4;\n  left: 13%;\n  bottom: 2px;\n  width: 170px;\n}\n\n.arbre-img {\n  position: absolute;\n  z-index: 3;\n  left: 55%;\n  bottom: 50px;\n  width: 130px;\n}\n\n.pigeon-img {\n  position: absolute;\n  z-index: 4;\n  left: 10%;\n  bottom: 80px;\n  width: 80px;\n}\n\n.pulse-icon {\n  position: absolute;\n  z-index: 2;\n  color: black;\n  width: 40px;\n  height: 40px;\n  left: 32%;\n  top: 10%;\n}\n\n.identity-icon {\n  position: absolute;\n  z-index: 2;\n  color: black;\n  width: 38px;\n  height: 38px;\n  left: 32%;\n  top: 10%;\n}\n\n.battery-widget {\n  position: absolute;\n  width: 90%;\n  height: 17%;\n  left: 5%;\n  top: 5%;\n  background: #97DF8B;\n  border-radius: 20px;\n}\n\n.battery-text {\n  position: absolute;\n  top: 20%;\n  left: 8%;\n}\n\n.battery-pourcent {\n  box-sizing: border-box;\n  border-radius: 50px;\n  border: 10px solid #AAFCB2;\n  position: absolute;\n  width: 90px;\n  height: 90px;\n  left: 60%;\n  top: 10%;\n  background: #FFFFFF;\n}\n\n.bpm-div {\n  position: absolute;\n  width: 110px;\n  height: 120px;\n  left: 10%;\n  top: 24%;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.nfc-div {\n  position: absolute;\n  width: 110px;\n  height: 120px;\n  right: 10%;\n  top: 24%;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.my-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 20;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.urgenceOver {\n  background-color: #ffffff;\n  text-align: center;\n  align-items: center;\n  margin: auto;\n  color: #000;\n}\n\n.item-background-color {\n  --ion-item-background:#97DF8B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0ksa0JBQUE7RUFDRixpREFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxzREFBQTtFQUVBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFISjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDRixZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBUEE7O0FBVUE7RUFDRSxrQkFBQTtFQUNGLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFFQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUFSQTs7QUFVQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQU1BLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWkY7O0FBZUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVpGOztBQWNBO0VBQ0UsNkJBQUE7QUFYRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhvbWUtcGFnZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG4gIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmhvbWUtaW1hZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBsZWZ0OiAxMCU7XHJcbiAgYm90dG9tOiAyNyU7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNEQUYxREY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMnB4IHJnYmEoODgsIDI1MSwgMTIzLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uYXZhdGFyLWltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogNTtcclxuICBsZWZ0OiAxNyU7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG59XHJcblxyXG4uYmFuYy1pbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgbGVmdDogMTMlO1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuLmFyYnJlLWltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMztcclxuICBsZWZ0OiA1NSU7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuLnBpZ2Vvbi1pbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgbGVmdDogMTAlO1xyXG4gIGJvdHRvbTogODBweDtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLnB1bHNlLWljb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5pZGVudGl0eS1pY29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgbGVmdDogMzIlO1xyXG4gIHRvcDogMTAlO1xyXG59XHJcblxyXG4uYmF0dGVyeS13aWRnZXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAxNyU7XHJcbiAgbGVmdDogNSU7XHJcbiAgdG9wOiA1JTtcclxuXHJcbiAgYmFja2dyb3VuZDogIzk3REY4QjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYmF0dGVyeS10ZXh0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiA4JTtcclxufVxyXG5cclxuLmJhdHRlcnktcG91cmNlbnR7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjQUFGQ0IyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGxlZnQ6IDYwJTtcclxuICB0b3A6IDEwJTtcclxuXHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxufVxyXG5cclxuLmJwbS1kaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogMTEwcHg7XHJcbmhlaWdodDogMTIwcHg7XHJcbmxlZnQ6IDEwJTtcclxudG9wOiAyNCU7XHJcblxyXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubmZjLWRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbndpZHRoOiAxMTBweDtcclxuaGVpZ2h0OiAxMjBweDtcclxucmlnaHQ6IDEwJTtcclxudG9wOiAyNCU7XHJcblxyXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5teS1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAvLyBmaWx0ZXI6Ymx1cig0cHgpO1xyXG4gIC8vIC1vLWZpbHRlcjpibHVyKDRweCk7XHJcbiAgLy8gLW1zLWZpbHRlcjpibHVyKDRweCk7XHJcbiAgLy8gLW1vei1maWx0ZXI6Ymx1cig0cHgpO1xyXG4gIC8vIC13ZWJraXQtZmlsdGVyOmJsdXIoNHB4KTtcclxuICB6LWluZGV4OiAyMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi51cmdlbmNlT3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLml0ZW0tYmFja2dyb3VuZC1jb2xvcntcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6Izk3REY4QjtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 1653:
/*!***********************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".navBar {\n  position: absolute;\n  width: 100%;\n  height: 30%;\n  left: 0px;\n  bottom: 0px;\n  z-index: 1;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 10px -4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px 20px 0px 0px;\n}\n\n.ellipse {\n  position: absolute;\n  width: 75px;\n  height: 38%;\n  left: 38.28%;\n  bottom: 10%;\n  z-index: 2;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.user-div {\n  position: absolute;\n  width: 100%;\n  height: 25%;\n  left: 0px;\n  bottom: 0px;\n  background: #FFFFFF;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n}\n\n.bell-icon {\n  position: absolute;\n  z-index: 2;\n  color: #A2E996;\n  width: 38px;\n  height: 38px;\n  left: 17%;\n  bottom: 17%;\n}\n\n.settings-icon {\n  position: absolute;\n  z-index: 2;\n  color: #A2E996;\n  width: 40px;\n  height: 40px;\n  right: 15%;\n  bottom: 17%;\n}\n\n.user-icon {\n  position: absolute;\n  z-index: 2;\n  color: #A2E996;\n  width: 40px;\n  height: 45px;\n  left: 23%;\n  bottom: 20%;\n}\n\n.user-img {\n  position: absolute;\n  clip-path: ellipse(33% 33%);\n  width: 100px;\n  height: 100px;\n  left: 8%;\n  bottom: 30%;\n}\n\n.user-info {\n  position: absolute;\n  color: black;\n  font-size: 15px;\n  z-index: 5;\n  bottom: 50%;\n  right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7RUFDQSw4RUFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBRUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSEoiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZCYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAxMHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmVsbGlwc2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMzglO1xyXG4gICAgbGVmdDogMzguMjglO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLnVzZXItZGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmJlbGwtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogI0EyRTk5NjtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGVmdDogMTclO1xyXG4gICAgYm90dG9tOiAxNyU7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiAjQTJFOTk2O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICByaWdodDogMTUlO1xyXG4gICAgYm90dG9tOiAxNyU7XHJcbn1cclxuXHJcbi51c2VyLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6ICNBMkU5OTY7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGxlZnQ6IDIzJTtcclxuICAgIGJvdHRvbTogMjAlO1xyXG59XHJcblxyXG4udXNlci1pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgY2xpcC1wYXRoOmVsbGlwc2UoMzMlIDMzJSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbGVmdDogOCU7XHJcbiAgICBib3R0b206IDMwJTtcclxufVxyXG5cclxuLnVzZXItaW5mb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBib3R0b206IDUwJTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\r\n  \r\n  <ion-content [fullscreen]=\"true\" class=\"home-page\">\r\n \r\n\r\n  <div class=\"home-widget\">\r\n    <div class=\"battery-widget\">\r\n      <p class=\"battery-text\">\r\n        <B>BATTERIE DU <br>\r\n        BRACELET</B>\r\n      </p>\r\n\r\n      <div class=\"battery-pourcent\">\r\n        <p style=\"color: black; font-size: 20px; margin-left: 20%; margin-top: 35%\">\r\n          <b>87 %</b>\r\n        </p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"bpm-div\">\r\n    <ion-icon name=\"pulse-outline\" class=\"pulse-icon\"></ion-icon>\r\n    <div style=\"color: black\">\r\n      fall : {{ fall }} <hr>\r\n      idle : {{ idle }} <hr>\r\n      handling : {{ handling }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"nfc-div\">\r\n    <ion-icon name=\"qr-code-outline\" class=\"identity-icon\"></ion-icon>\r\n  </div>\r\n\r\n\r\n  <div class=\"home-image\">\r\n    <ion-img class=\"avatar-img\" src=\"../../assets/images/avatar.webp\"></ion-img>\r\n    <ion-img class=\"banc-img\" src=\"../../assets/images/banc.png\"></ion-img>\r\n  \r\n    <ion-img class=\"arbre-img\" src=\"../../assets/images/arbre.png\"></ion-img>\r\n    <ion-img class=\"pigeon-img\" src=\"../../assets/images/pigeon.png\"></ion-img>\r\n  \r\n  </div>\r\n\r\n  <app-nav-bar></app-nav-bar>\r\n\r\n  \r\n</ion-content>\r\n\r\n<div *ngIf=\"fall && !handling\">\r\n  <div class=\"my-overlay\">\r\n    <ion-card class=\"\">\r\n      <ion-card-header>urgenceOver\r\n        <ion-card-title style=\"color: black;\">Boudette</ion-card-title>\r\n        <ion-card-subtitle>Chute a 16:45</ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-button shape=\"round\" color=\"white\" (click)=\"handleEmergency()\">\r\n          <ion-icon name=\"close\" color=\"danger\"></ion-icon>\r\n        </ion-button>\r\n        <ion-list>\r\n          <ion-item-sliding>\r\n            <ion-item-options side=\"start\">\r\n              <ion-item-option color=\"success\" (click)=\"handleEmergency()\" expandable>J'y vais</ion-item-option>\r\n            </ion-item-options>\r\n            <ion-item class=\"item-background-color\">\r\n              <div>\r\n                >>> >>> >>>\r\n              </div>\r\n            </ion-item>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n";

/***/ }),

/***/ 5687:
/*!***********************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"user-div\">\r\n    \r\n    <ion-img class=\"user-img\" src=\"../../assets/images/boudot.png\"></ion-img>\r\n    \r\n    <div class=\"user-info\">\r\n        <p>\r\n            <B>Boudette Mathilde</B> <br>\r\n        \r\n            <d style=\"font-size: 12px;\">\r\n                86 rue du maréchal Foch \r\n            </d>\r\n        </p>\r\n    </div>\r\n\r\n\r\n\r\n<div class=\"ellipse\">\r\n    <ion-icon name=\"person-outline\" class=\"user-icon\"></ion-icon>\r\n</div>\r\n\r\n<div class=\"navBar\">\r\n    <ion-icon name=\"notifications-outline\" class=\"bell-icon\"></ion-icon>\r\n    <ion-icon name=\"settings-outline\" class=\"settings-icon\"></ion-icon>\r\n</div>\r\n\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map