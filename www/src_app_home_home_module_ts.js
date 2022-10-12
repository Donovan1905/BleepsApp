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
/* harmony import */ var C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


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
      var _ref = (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
          p.remove = /*#__PURE__*/(0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        var _ref3 = (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      p.remove = /*#__PURE__*/(0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      var _ref5 = (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        var _ref6 = (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearCookies() {
    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  var _ref7 = (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
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
    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_schub_Desktop_Bleeps_App_BleepsApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.home-page {\n  position: relative;\n  --ion-background-color: rgba(255, 255, 255, 0.91);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  /* Note: backdrop-filter has minimal browser support */\n  border-radius: 20px;\n}\n\n.home-image {\n  position: absolute;\n  width: 80%;\n  height: 200px;\n  left: 10%;\n  bottom: 27%;\n  background: #DAF1DF;\n  box-shadow: 0px 2px 4px 2px rgba(88, 251, 123, 0.25);\n  border-radius: 50px;\n}\n\n.avatar-img {\n  position: absolute;\n  z-index: 5;\n  left: 17%;\n  bottom: 5px;\n  width: 170px;\n}\n\n.banc-img {\n  position: absolute;\n  z-index: 4;\n  left: 13%;\n  bottom: 2px;\n  width: 170px;\n}\n\n.arbre-img {\n  position: absolute;\n  z-index: 3;\n  left: 55%;\n  bottom: 50px;\n  width: 130px;\n}\n\n.pigeon-img {\n  position: absolute;\n  z-index: 4;\n  left: 10%;\n  bottom: 80px;\n  width: 80px;\n}\n\n.pulse-icon {\n  position: absolute;\n  z-index: 2;\n  color: black;\n  width: 40px;\n  height: 40px;\n  left: 32%;\n  top: 10%;\n}\n\n.identity-icon {\n  position: absolute;\n  z-index: 2;\n  color: black;\n  width: 38px;\n  height: 38px;\n  left: 32%;\n  top: 10%;\n}\n\n.battery-widget {\n  position: absolute;\n  width: 90%;\n  height: 17%;\n  left: 5%;\n  top: 5%;\n  background: #97DF8B;\n  border-radius: 20px;\n}\n\n.battery-text {\n  position: absolute;\n  top: 20%;\n  left: 8%;\n}\n\n.battery-pourcent {\n  box-sizing: border-box;\n  border-radius: 50px;\n  border: 10px solid #AAFCB2;\n  position: absolute;\n  width: 90px;\n  height: 90px;\n  left: 60%;\n  top: 10%;\n  background: #FFFFFF;\n}\n\n.bpm-div {\n  position: absolute;\n  width: 35%;\n  height: 18%;\n  left: 10%;\n  top: 24%;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.nfc-div {\n  position: absolute;\n  width: 35%;\n  height: 18%;\n  right: 10%;\n  top: 24%;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n\n.my-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 20;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.urgenceOver {\n  background-color: #ffffff;\n  text-align: center;\n  align-items: center;\n  margin: auto;\n  color: #000;\n  width: 80%;\n  height: 50%;\n  border-radius: 20px;\n}\n\n.list-slide {\n  width: 100%;\n  height: 100%;\n  background-color: #97DF8B;\n  border-radius: 40px;\n}\n\n.item-option-slide {\n  --background:#6ba561;\n  border-radius: 40px 0 0 40px;\n}\n\n.item-slide {\n  width: 100%;\n  border-radius: 40px 40px 40px 40px;\n  --ion-item-background:#97DF8B;\n  transition: width 2s, border-radius 2s;\n}\n\n.item-sliding-active-slide .item-slide {\n  width: 65%;\n  border-radius: 0px 40px 40px 0px;\n  transition: width, border-radius;\n}\n\n.card-content {\n  width: 100%;\n  position: absolute;\n  bottom: 20px;\n}\n\n.rounded-button {\n  left: 37.96%;\n  right: 37.35%;\n  /*width: 60px;  */\n  height: 60px;\n  margin-bottom: 10px;\n  border-radius: 30px;\n  --background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.cross-icon {\n  /* width: 10px;\n   height: 10px;  */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxCbGVlcHMlMjBBcHBcXEJsZWVwc0FwcFxcc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxTQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtBQ0RGOztBRElBO0VBQ0ksa0JBQUE7RUFDRixpREFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxzREFBQTtFQUVBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNISjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDSkY7O0FET0E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSxtQkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7RUFDRixVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FDUEE7O0FEVUE7RUFDRSxrQkFBQTtFQUNGLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFFQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNSQTs7QURVQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQU1BLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDWkY7O0FEZUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNaRjs7QURlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1pGOztBRGVBO0VBQ0Usb0JBQUE7RUFDQSw0QkFBQTtBQ1pGOztBRGVBO0VBQ0UsV0FBQTtFQUVBLGtDQUFBO0VBQ0EsNkJBQUE7RUFFQSxzQ0FBQTtBQ2RGOztBRG1CQTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0FDaEJGOztBRG1CQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQ2xCRjs7QURxQkE7RUFDQzttQkFBQTtBQ2pCRCIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmhvbWUtcGFnZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG5cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmhvbWUtaW1hZ2V7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbGVmdDogMTAlO1xuICBib3R0b206IDI3JTtcblxuICBiYWNrZ3JvdW5kOiAjREFGMURGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAycHggcmdiYSg4OCwgMjUxLCAxMjMsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uYXZhdGFyLWltZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1O1xuICBsZWZ0OiAxNyU7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbi5iYW5jLWltZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0O1xuICBsZWZ0OiAxMyU7XG4gIGJvdHRvbTogMnB4O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbi5hcmJyZS1pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgbGVmdDogNTUlO1xuICBib3R0b206IDUwcHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLnBpZ2Vvbi1pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgbGVmdDogMTAlO1xuICBib3R0b206IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4ucHVsc2UtaWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBsZWZ0OiAzMiU7XG4gICAgdG9wOiAxMCU7XG59XG5cbi5pZGVudGl0eS1pY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgbGVmdDogMzIlO1xuICB0b3A6IDEwJTtcbn1cblxuLmJhdHRlcnktd2lkZ2V0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTclO1xuICBsZWZ0OiA1JTtcbiAgdG9wOiA1JTtcblxuICBiYWNrZ3JvdW5kOiAjOTdERjhCO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYmF0dGVyeS10ZXh0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiA4JTtcbn1cblxuLmJhdHRlcnktcG91cmNlbnR7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjQUFGQ0IyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgbGVmdDogNjAlO1xuICB0b3A6IDEwJTtcblxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuXG4uYnBtLWRpdntcbiAgcG9zaXRpb246IGFic29sdXRlO1xud2lkdGg6IDM1JTtcbmhlaWdodDogMTglO1xubGVmdDogMTAlO1xudG9wOiAyNCU7XG5cbmJhY2tncm91bmQ6ICNGRkZGRkY7XG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm5mYy1kaXZ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiAzNSU7XG5oZWlnaHQ6IDE4JTtcbnJpZ2h0OiAxMCU7XG50b3A6IDI0JTtcblxuYmFja2dyb3VuZDogI0ZGRkZGRjtcbmJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm15LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIC8vIGZpbHRlcjpibHVyKDRweCk7XG4gIC8vIC1vLWZpbHRlcjpibHVyKDRweCk7XG4gIC8vIC1tcy1maWx0ZXI6Ymx1cig0cHgpO1xuICAvLyAtbW96LWZpbHRlcjpibHVyKDRweCk7XG4gIC8vIC13ZWJraXQtZmlsdGVyOmJsdXIoNHB4KTtcbiAgei1pbmRleDogMjA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51cmdlbmNlT3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5saXN0LXNsaWRle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM5N0RGOEI7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7IFxufVxuXG4uaXRlbS1vcHRpb24tc2xpZGV7XG4gIC0tYmFja2dyb3VuZDojNmJhNTYxO1xuICBib3JkZXItcmFkaXVzOiA0MHB4IDAgMCA0MHB4O1xufVxuXG4uaXRlbS1zbGlkZXtcbiAgd2lkdGg6IDEwMCU7XG4gLy8gaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggNDBweCA0MHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6Izk3REY4QjtcblxuICB0cmFuc2l0aW9uOiB3aWR0aCAycywgYm9yZGVyLXJhZGl1cyAycztcbiAgXG59XG5cblxuLml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUgLml0ZW0tc2xpZGUge1xuICB3aWR0aDogNjUlO1xuICBib3JkZXItcmFkaXVzOiAwcHggNDBweCA0MHB4IDBweDtcbiAgdHJhbnNpdGlvbjogd2lkdGgsIGJvcmRlci1yYWRpdXM7XG59XG5cbi5jYXJkLWNvbnRlbnR7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLnJvdW5kZWQtYnV0dG9ue1xuICBsZWZ0OiAzNy45NiU7XG4gIHJpZ2h0OiAzNy4zNSU7XG4gIC8qd2lkdGg6IDYwcHg7ICAqL1xuICBoZWlnaHQ6IDYwcHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5jcm9zcy1pY29ue1xuIC8qIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7ICAqL1xufVxuXG5cblxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ob21lLXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAvKiBOb3RlOiBiYWNrZHJvcC1maWx0ZXIgaGFzIG1pbmltYWwgYnJvd3NlciBzdXBwb3J0ICovXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5ob21lLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBsZWZ0OiAxMCU7XG4gIGJvdHRvbTogMjclO1xuICBiYWNrZ3JvdW5kOiAjREFGMURGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAycHggcmdiYSg4OCwgMjUxLCAxMjMsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uYXZhdGFyLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTtcbiAgbGVmdDogMTclO1xuICBib3R0b206IDVweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4uYmFuYy1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGxlZnQ6IDEzJTtcbiAgYm90dG9tOiAycHg7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLmFyYnJlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgbGVmdDogNTUlO1xuICBib3R0b206IDUwcHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLnBpZ2Vvbi1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGxlZnQ6IDEwJTtcbiAgYm90dG9tOiA4MHB4O1xuICB3aWR0aDogODBweDtcbn1cblxuLnB1bHNlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGVmdDogMzIlO1xuICB0b3A6IDEwJTtcbn1cblxuLmlkZW50aXR5LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgbGVmdDogMzIlO1xuICB0b3A6IDEwJTtcbn1cblxuLmJhdHRlcnktd2lkZ2V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDE3JTtcbiAgbGVmdDogNSU7XG4gIHRvcDogNSU7XG4gIGJhY2tncm91bmQ6ICM5N0RGOEI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5iYXR0ZXJ5LXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiA4JTtcbn1cblxuLmJhdHRlcnktcG91cmNlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgI0FBRkNCMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBsZWZ0OiA2MCU7XG4gIHRvcDogMTAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuXG4uYnBtLWRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAxOCU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAyNCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uZmMtZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDE4JTtcbiAgcmlnaHQ6IDEwJTtcbiAgdG9wOiAyNCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5teS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICB6LWluZGV4OiAyMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVyZ2VuY2VPdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiAjMDAwO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmxpc3Qtc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdERjhCO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4uaXRlbS1vcHRpb24tc2xpZGUge1xuICAtLWJhY2tncm91bmQ6IzZiYTU2MTtcbiAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgNDBweDtcbn1cblxuLml0ZW0tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNDBweCA0MHB4IDQwcHggNDBweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiM5N0RGOEI7XG4gIHRyYW5zaXRpb246IHdpZHRoIDJzLCBib3JkZXItcmFkaXVzIDJzO1xufVxuXG4uaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZSAuaXRlbS1zbGlkZSB7XG4gIHdpZHRoOiA2NSU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0MHB4IDQwcHggMHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCwgYm9yZGVyLXJhZGl1cztcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLnJvdW5kZWQtYnV0dG9uIHtcbiAgbGVmdDogMzcuOTYlO1xuICByaWdodDogMzcuMzUlO1xuICAvKndpZHRoOiA2MHB4OyAgKi9cbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgLyogd2lkdGg6IDEwcHg7XG4gICBoZWlnaHQ6IDEwcHg7ICAqL1xufSJdfQ== */";

/***/ }),

/***/ 1653:
/*!***********************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".navBar {\n  position: absolute;\n  width: 100%;\n  height: 30%;\n  left: 0px;\n  bottom: 0px;\n  z-index: 1;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 10px -4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px 20px 0px 0px;\n}\n\n.ellipse {\n  position: absolute;\n  width: 75px;\n  height: 38%;\n  left: 38.28%;\n  bottom: 10%;\n  z-index: 2;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.user-div {\n  position: absolute;\n  width: 100%;\n  height: 25%;\n  left: 0px;\n  bottom: 0px;\n  background: #FFFFFF;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n}\n\n.bell-icon {\n  position: absolute;\n  z-index: 2;\n  color: #A2E996;\n  width: 38px;\n  height: 38px;\n  left: 17%;\n  bottom: 17%;\n}\n\n.settings-icon {\n  position: absolute;\n  z-index: 2;\n  color: #A2E996;\n  width: 40px;\n  height: 40px;\n  right: 15%;\n  bottom: 17%;\n}\n\n.user-icon {\n  position: absolute;\n  z-index: 2;\n  color: #A2E996;\n  width: 40px;\n  height: 45px;\n  left: 5%;\n  bottom: 20%;\n}\n\n.user-img {\n  position: absolute;\n  clip-path: ellipse(33% 33%);\n  width: 100px;\n  height: 100px;\n  left: 8%;\n  bottom: 30%;\n}\n\n.user-info {\n  position: absolute;\n  color: black;\n  font-size: 15px;\n  z-index: 5;\n  bottom: 50%;\n  right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEJsZWVwcyUyMEFwcFxcQmxlZXBzQXBwXFxzcmNcXGFwcFxcbmF2LWJhclxcbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLDhFQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFFQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNISiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdkJhcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDEwcHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uZWxsaXBzZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAzOCU7XHJcbiAgICBsZWZ0OiAzOC4yOCU7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4udXNlci1kaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYmVsbC1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiAjQTJFOTk2O1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBsZWZ0OiAxNyU7XHJcbiAgICBib3R0b206IDE3JTtcclxufVxyXG5cclxuLnNldHRpbmdzLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6ICNBMkU5OTY7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHJpZ2h0OiAxNSU7XHJcbiAgICBib3R0b206IDE3JTtcclxufVxyXG5cclxuLnVzZXItaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogI0EyRTk5NjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBib3R0b206IDIwJTtcclxufVxyXG5cclxuLnVzZXItaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIGNsaXAtcGF0aDplbGxpcHNlKDMzJSAzMyUpO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGxlZnQ6IDglO1xyXG4gICAgYm90dG9tOiAzMCU7XHJcbn1cclxuXHJcbi51c2VyLWluZm97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgYm90dG9tOiA1MCU7XHJcbiAgICByaWdodDogMTAlO1xyXG59IiwiLm5hdkJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAxMHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xufVxuXG4uZWxsaXBzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMzglO1xuICBsZWZ0OiAzOC4yOCU7XG4gIGJvdHRvbTogMTAlO1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4udXNlci1kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmJlbGwtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICNBMkU5OTY7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGxlZnQ6IDE3JTtcbiAgYm90dG9tOiAxNyU7XG59XG5cbi5zZXR0aW5ncy1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogI0EyRTk5NjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcmlnaHQ6IDE1JTtcbiAgYm90dG9tOiAxNyU7XG59XG5cbi51c2VyLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjQTJFOTk2O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsZWZ0OiA1JTtcbiAgYm90dG9tOiAyMCU7XG59XG5cbi51c2VyLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY2xpcC1wYXRoOiBlbGxpcHNlKDMzJSAzMyUpO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxlZnQ6IDglO1xuICBib3R0b206IDMwJTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHotaW5kZXg6IDU7XG4gIGJvdHRvbTogNTAlO1xuICByaWdodDogMTAlO1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n  \n  <ion-content [fullscreen]=\"true\" class=\"home-page\">\n \n\n  <div class=\"home-widget\">\n    <div class=\"battery-widget\">\n      <p class=\"battery-text\">\n        <B>BATTERIE DU <br>\n        BRACELET</B>\n      </p>\n\n      <div class=\"battery-pourcent\">\n        <p style=\"color: black; font-size: 20px; margin-left: 20%; margin-top: 35%\">\n          <b>87 %</b>\n        </p>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"bpm-div\">\n    <ion-icon name=\"pulse-outline\" class=\"pulse-icon\"></ion-icon>\n    <div style=\"color: black\">\n      fall : {{ fall }} <hr>\n      idle : {{ idle }} <hr>\n      handling : {{ handling }}\n    </div>\n  </div>\n\n  <div class=\"nfc-div\" [routerLink]=\"['/nfc']\">\n    <ion-icon name=\"qr-code-outline\" class=\"identity-icon\"></ion-icon>\n  </div>\n\n\n  <div class=\"home-image\">\n    <ion-img class=\"avatar-img\" src=\"../../assets/images/avatar.webp\"></ion-img>\n    <ion-img class=\"banc-img\" src=\"../../assets/images/banc.png\"></ion-img>\n  \n    <ion-img class=\"arbre-img\" src=\"../../assets/images/arbre.png\"></ion-img>\n    <ion-img class=\"pigeon-img\" src=\"../../assets/images/pigeon.png\"></ion-img>\n  \n  </div>\n\n  <app-nav-bar></app-nav-bar>\n\n  \n</ion-content>\n\n<div *ngIf=\"fall && !handling\">\n  <div class=\"my-overlay\">\n    <ion-card class=\"urgenceOver\">\n      <ion-card-header mode=\"md\">\n        <ion-card-title style=\"color: black;\">Boudette</ion-card-title>\n        <ion-card-subtitle>Chute à 16:45</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content class=\"card-content\">\n        <ion-button class=\"rounded-button\" mode=\"md\" fill=\"clear\" size=\"medium\" shape=\"round\" (click)=\"handleEmergency()\">\n          <ion-icon class=\"cross-icon\" name=\"close\" size=\"large\" color=\"danger\"></ion-icon>\n        </ion-button>\n    \n          <ion-item-sliding mode=\"md\">\n            <ion-item-options  side=\"start\">\n              <ion-item-option class=\"item-option-slide\" (click)=\"handleEmergency()\" expandable>J'y vais</ion-item-option>\n            </ion-item-options>\n            <ion-item  class=\"item-slide\" lines=\"none\">\n                >>> >>> >>>\n            </ion-item>\n          </ion-item-sliding>\n      \n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</div>\n\n\n";

/***/ }),

/***/ 5687:
/*!***********************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<div class=\"user-div\">\n    \n    <ion-img class=\"user-img\" src=\"../../assets/images/boudot.png\"></ion-img>\n    \n    <div class=\"user-info\">\n        <p>\n            <B>Boudette Mathilde</B> <br>\n        \n            <d style=\"font-size: 12px;\">\n                86 rue du maréchal Foch \n            </d>\n        </p>\n    </div>\n\n\n    <ion-button class=\"ellipse\" mode=\"md\" fill=\"clear\" (click)=\"handleEmergency()\">\n        <ion-icon name=\"person-outline\" class=\"user-icon\"></ion-icon>\n      </ion-button>\n\n<!--<div class=\"ellipse\">\n    <ion-icon name=\"person-outline\" class=\"user-icon\"></ion-icon>\n</div>-->\n\n<div class=\"navBar\">\n    <ion-icon name=\"notifications-outline\" class=\"bell-icon\"></ion-icon>\n    <ion-icon name=\"settings-outline\" class=\"settings-icon\"></ion-icon>\n</div>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map