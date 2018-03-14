webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalVars = (function () {
    function GlobalVars() {
        this.bluetoothName = "";
    }
    GlobalVars.prototype.setBluetoothName = function (value) {
        this.bluetoothName = value;
    };
    GlobalVars.prototype.getBluetoothName = function () {
        return this.bluetoothName;
    };
    return GlobalVars;
}());
GlobalVars = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GlobalVars);

//# sourceMappingURL=globalVars.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BluetoothPage = (function () {
    function BluetoothPage(navCtrl, bluetoothSerial, alertCtrl, gv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.bluetoothSerial = bluetoothSerial;
        this.alertCtrl = alertCtrl;
        this.gv = gv;
        this.success = function (name) {
            _this.gv.setBluetoothName(_this.clickedBluetoothName);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        };
        this.fail = function (error) { return alert(error); };
        bluetoothSerial.enable();
    }
    BluetoothPage.prototype.startScanning = function () {
        var _this = this;
        this.pairedDevices = null;
        this.unpairedDevices = null;
        this.gettingDevices = true;
        this.bluetoothSerial.discoverUnpaired().then(function (devices) {
            _this.unpairedDevices = devices.filter(function (device, index, self) { return self.findIndex(function (t) { return t.address === device.address; }) === index; });
            _this.gettingDevices = false;
            devices.forEach(function (device) {
                console.log(device.name);
            });
        }, function (err) {
            console.log(err);
        });
        this.bluetoothSerial.list().then(function (devices) {
            _this.pairedDevices = devices;
        }, function (err) {
        });
    };
    BluetoothPage.prototype.selectDevice = function (address, name) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Connexion',
            message: 'Voulez-vous vous connecter ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Connexion',
                    handler: function () {
                        _this.clickedBluetoothName = name;
                        _this.bluetoothSerial.connect(address).subscribe(_this.success, _this.fail);
                    }
                }
            ]
        });
        alert.present();
    };
    BluetoothPage.prototype.disconnect = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Déconnexion ?',
            message: 'Voulez-vous vous déconnecter ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Déconnexion',
                    handler: function () {
                        _this.bluetoothSerial.disconnect();
                        _this.unpairedDevices = null;
                        _this.pairedDevices = null;
                        _this.gettingDevices = false;
                    }
                }
            ]
        });
        alert.present();
    };
    return BluetoothPage;
}());
BluetoothPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-bluetooth',template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/bluetooth/bluetooth.html"*/'<!--<ion-header no-border>-->\n  <!--<ion-navbar text-center="">-->\n    <!--<ion-title>Bluetooth</ion-title>-->\n  <!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bluetooth</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <div class="btn-container">\n      <div class="btn-connect-bluetooth" (click)="startScanning()">\n        <ion-icon style="vertical-align: middle;" name="bluetooth"></ion-icon>\n        <span style="font-size: 0.7em;vertical-align: middle;margin: 0 0 0 10px; border-bottom: 1px solid #b4b4b4;">Rechercher</span>\n\n      </div>\n\n      <div class="btn-disconnect-bluetooth" (click)="disconnect()">\n          <ion-icon name="close"></ion-icon>\n      </div>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-list-header style="margin: 0 0 0 0">\n      Appareils associés\n    </ion-list-header>\n\n    <ion-item *ngIf="!pairedDevices">\n      <div class="empty">\n      Aucun appareils accociés\n      </div>\n    </ion-item>\n\n    <ion-item *ngFor="let device of pairedDevices">\n      <span (click)="selectDevice(device.address, device.name)">\n        <div class="name">{{device.name}}</div>\n        <div class="address">{{device.address}}</div>\n      </span>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header style="margin: 0 0 0 0">\n      Appareils disponibles\n    </ion-list-header>\n\n    <ion-item *ngIf="!unpairedDevices">\n      <div class="empty">\n        Aucun appareils disponibles\n      </div>\n    </ion-item>\n\n    <div *ngIf="gettingDevices" class="unavalaible-spinner">\n      <ion-spinner name="crescent"></ion-spinner>\n    </div>\n\n    <ion-item *ngFor=\'let device of unpairedDevices\'>\n      <span (click)="selectDevice(device.address, device.name)">\n          <div class="name">{{device.name}}</div>\n          <div class="address">{{device.address}}</div>\n      </span>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/bluetooth/bluetooth.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */]])
], BluetoothPage);

//# sourceMappingURL=bluetooth.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_measure_service_measure_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = (function () {
    function DashboardPage(navCtrl, measureService) {
        this.navCtrl = navCtrl;
        this.measureService = measureService;
        this.findMeasure();
    }
    DashboardPage.prototype.findMeasure = function () {
        var _this = this;
        this.measureService.findMeasures()
            .then(function (data) {
            _this.measures = data;
        });
        // this.measureService.setMeasure(1, 1.7)
        //     .then(data => {
        //       console.log(data);
        //     });
        this.measureService.findMeasures()
            .then(function (data) {
            _this.measures = data;
        });
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mes données</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <div style="font-size: 1.5em;font-weight: 300; color: white;background: #FA3762;display: inline-flex;width: 100%;">\n      <div style="padding: 15px 20px">Dernières mesures</div>\n    </div>\n  </div>\n\n  <div *ngFor="let measure of measures">\n    <div>\n      <div style="height: 50px;">\n        <div class="name" style="font-weight: bold; float:left;">#{{measure.id}}</div>\n        <div style="float: right;">\n          <span class="name">le {{measure.dateTime.dayOfMonth}}/{{measure.dateTime.monthValue}}/{{measure.dateTime.year}}</span>\n          <span class="name">à {{measure.dateTime.hour}}H{{measure.dateTime.minute}}</span>\n        </div>\n      </div>\n      <div class="clearfix"></div>\n      <div class="name" style="text-align: center;font-size: 34px;">{{measure.value}} MG/L</div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/dashboard/dashboard.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_measure_service_measure_service__["a" /* MeasureService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_measure_service_measure_service__["a" /* MeasureService */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeasureService = (function () {
    function MeasureService(http) {
        this.http = http;
    }
    MeasureService.prototype.setMeasure = function (userId, value) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* API_ENDPOINT */] + '/measure/' + userId, { 'value': value })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                // this.measures = data;
                // resolve(this.measures);
            });
        });
    };
    MeasureService.prototype.findMeasures = function () {
        var _this = this;
        if (this.measures) {
            return Promise.resolve(this.measures);
        }
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* API_ENDPOINT */] + '/measure/10/1')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.measures = data;
                resolve(_this.measures);
            });
        });
    };
    return MeasureService;
}());
MeasureService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MeasureService);

//# sourceMappingURL=measure-service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_modal__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_bluetooth_serial__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_measure_service_measure_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_globalVars__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_svg_round_progressbar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular_svg_round_progressbar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__["a" /* BluetoothPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home_modal__["a" /* HomeModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_angular_svg_round_progressbar__["RoundProgressModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__["a" /* BluetoothPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home_modal__["a" /* HomeModal */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_measure_service_measure_service__["a" /* MeasureService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_globalVars__["a" /* GlobalVars */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Bluetooth', component: __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__["a" /* BluetoothPage */] },
            { title: 'Mes données', component: __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title><span>i</span>Breath</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINT; });
var API_ENDPOINT = 'http://192.168.43.243:8100/api';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeModal = (function () {
    function HomeModal(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    HomeModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return HomeModal;
}());
HomeModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/home/home-modal.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Résultat\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    test\n</ion-content>'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/home/home-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], HomeModal);

//# sourceMappingURL=home-modal.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalVars__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bluetooth_bluetooth__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(bluetoothSerial, gv, ngZone, modalCtrl, navCtrl) {
        this.bluetoothSerial = bluetoothSerial;
        this.gv = gv;
        this.ngZone = ngZone;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.value = 0;
        this.isCalibrating = false;
        this.isEnding = false;
        this.isMoreThanLimit = false;
        this.subscribe();
    }
    HomePage.prototype.subscribe = function () {
        var _this = this;
        this.bluetoothSerial.subscribe('\r\n').subscribe(function (success) {
            // gv.setBluetoothName()
            console.log(success);
            if (success.includes('x0')) {
                _this.ngZone.run(function () {
                    _this.value = 0;
                    _this.isCalibrating = true;
                    _this.isEnding = false;
                });
            }
            if (success.includes('x1')) {
                _this.ngZone.run(function () {
                    _this.isCalibrating = false;
                });
            }
            if (success.includes('x2')) {
                // let modal = this.modalCtrl.create(HomeModal);
                // modal.present();
                _this.ngZone.run(function () {
                    _this.isEnding = true;
                });
            }
            if (success.includes('v=')) {
                _this.ngZone.run(function () {
                    _this.value = +success.replace('v=', '');
                    _this.isCalibrating = false;
                    if (_this.value > 0.25) {
                        _this.isMoreThanLimit = true;
                    }
                    else {
                        _this.isMoreThanLimit = false;
                    }
                });
            }
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    HomePage.prototype.goToBluetoothPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bluetooth_bluetooth__["a" /* BluetoothPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<label>Ici : {{ gv.bluetoothName }}</label>-->\n\n  <!--<div style="width: 100%;height: 41%; background: rgba(48, 38, 62, 1);">-->\n    <!--<button ion-button (click)="data1()">Donnée 1</button>-->\n    <!--<button ion-button (click)="inc()">inc</button>-->\n    <!--<button ion-button (click)="data2()">Donnée 2</button>-->\n    <!--<button ion-button (click)="reset()">Recalibrage</button>-->\n  <!--</div>-->\n\n    <div style="height:8vh; background: #222227;width: 100%; color:white; border-bottom: 1px #2a2831 solid; padding: 10px;">\n        <ion-icon name="bluetooth" style="display: inline-block; margin: 0 10px; font-size: 2em;vertical-align: middle"></ion-icon>\n        <div *ngIf="gv.bluetoothName" style="display: inline-block;">Connecté à : <span style="font-weight: bold;vertical-align: middle">{{gv.bluetoothName}}</span></div>\n        <div *ngIf="!gv.bluetoothName" style="display: inline-block;border-bottom: 1px solid #b4b4b4;" (click)="goToBluetoothPage();">Se connecter</div>\n\n    </div>\n\n  <!--<div style="position: absolute; bottom: 0;left: 0;right: 0;">-->\n  <div style="height:43vh; background: url(\'../../assets/images/bg.jpg\');     background-size: cover;padding: 20px;background-repeat: round;    position: relative;">\n    <div style="background: rgba(48, 38, 62, 0.9); width: 100%; height: 100%;position: absolute;top:0;left: 0;"></div>\n    <div>\n        <div style="position: relative;margin: 20px auto;font-size: 40px">\n        <div style="text-align:center; top: 50%;bottom: auto;left: 50%;transform: translateY(-50%) translateX(-50%);font-size: 1em;position: absolute;color: #bbb;font-weight: 100;line-height: 0.5;">\n          <div style="color:white;" *ngIf="!isCalibrating">\n              {{value}}\n              <div style="font-size: 0.5em;margin-top: 20px;">MG/L</div>\n          </div>\n          <span style="color:white; font-size: 0.5em; font-weight: 300;" *ngIf="isCalibrating">Calibrage<br>en cours</span>\n        </div>\n        <round-progress style="margin: auto;"\n                        [current]="value"\n                        [max]="0.25"\n                        [background]="\'#6FD7C9\'"\n                        [stroke]="7"\n                        [color]="\'#FA3762\'"\n                        [radius]="90"\n        >\n        </round-progress>\n      </div>\n    </div>\n  </div>\n\n<div style="background: white;height: 40vh">\n    <div *ngIf="isEnding && isMoreThanLimit" style="font-size: 1.5em;font-weight: 300; color: white;background: #FA3762;display: inline-flex;width: 100%;">\n        <div style="min-width: 70%; padding: 15px 20px">Vous pourez prendre le volant dans</div>\n        <div style="font-size: 2.5em; min-width: 30%; padding: 8px 0;font-weight: 400;text-align: center">XH</div>\n    </div>\n\n    <div *ngIf="isEnding && !isMoreThanLimit" style="font-size: 1.5em;font-weight: 300; color: white;background: #6FD7C9;display: inline-flex;width: 100%">\n        <div style="min-width: 100%; padding: 15px 20px">Vous pouvez prendre le volant</div>\n    </div>\n\n    <div style="font-size: 1.5em;font-weight: 300; color: white;background: #FA3762;display: inline-flex;width: 100%;">\n        <div style="min-width: 70%; padding: 15px 20px">Vous pourez prendre le volant dans</div>\n        <div style="font-size: 2.5em; min-width: 30%; padding: 8px 0;font-weight: 400;text-align: center">XH</div>\n    </div>\n\n    <!--<div style="font-size: 1.5em;font-weight: 300; color: white;background: #6FD7C9;display: inline-flex;width: 100%">-->\n        <!--<div style="min-width: 100%; padding: 15px 20px">Vous pouvez prendre le volant</div>-->\n    <!--</div>-->\n\n    <div style="font-size: 2em;font-weight: 200; color: #222227;padding: 20px;background: #ededed;border-top: 1px #222227 solid;">\n        La limite autorisée en <i>France</i> est de <b>0,25 mg/l</b>\n    </div>\n</div>\n  <!--</div>-->\n\n\n\n  <!--<div style="-->\n  <!--display: flex;-->\n  <!--flex-direction: column;-->\n  <!--align-items: center;-->\n  <!--justify-content: center;-->\n  <!--background: white;-->\n  <!--/*border: 5px solid white;*/-->\n  <!--width: 5em;-->\n  <!--height: 5em;-->\n  <!--border-radius: 5em;-->\n  <!--box-shadow: 0 0 20px rgba(255,255,255,0.5);-->\n  <!--color: #177d7b;-->\n  <!--margin: auto;-->\n<!--">-->\n    <!--<span style="font-size: 1.5em; text-align: center; font-weight: bold"> <ion-icon name="bluetooth"></ion-icon></span>-->\n  <!--</div>-->\n</ion-content>\n'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
        __WEBPACK_IMPORTED_MODULE_2__providers_globalVars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map