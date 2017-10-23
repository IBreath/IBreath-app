webpackJsonp([0],{

/***/ 100:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalVars);

//# sourceMappingURL=globalVars.js.map

/***/ }),

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalVars__ = __webpack_require__(100);
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
    function HomePage(bluetoothSerial, gv) {
        this.bluetoothSerial = bluetoothSerial;
        this.gv = gv;
        this.bluetoothSerial.read().then(function (data) {
            console.log(JSON.stringify(data));
        });
        document.addEventListener('deviceReady', this.read, false);
        // this.test = this.bluetoothSerial.read();
        // console.log(JSON.stringify(this.test));
    }
    HomePage.prototype.read = function () {
        // var data = this.bluetoothSerial.read().then(data => {
        //     console.log(JSON.stringify(data));
        // });
        // console.log(JSON.stringify(data));
    };
    HomePage.prototype.onData = function (data) {
        console.log(JSON.stringify(data));
    };
    HomePage.prototype.onFailed = function (data) {
        console.log(JSON.stringify(data));
    };
    HomePage.prototype.data1 = function () {
        this.bluetoothSerial.write('1').then(function (data) {
            console.log(data);
        }, function (data) {
            console.error(data);
        });
        console.log('data1');
    };
    HomePage.prototype.data2 = function () {
        this.bluetoothSerial.write('0').then(function (data) {
            console.log(data);
        }, function (data) {
            console.error(data);
        });
        console.log('data2');
        // this.bluetoothSerial.write(1).then(success, failure);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <label>Ici : {{ gv.bluetoothName }}</label>\n  <button ion-button (click)="data1()">Donnée 1</button>\n  <button ion-button (click)="data2()">Donnée 2</button>\n  <button ion-button (click)="read()">read</button>\n  <!--<div style="-->\n  <!--display: flex;-->\n  <!--flex-direction: column;-->\n  <!--align-items: center;-->\n  <!--justify-content: center;-->\n  <!--background: white;-->\n  <!--/*border: 5px solid white;*/-->\n  <!--width: 5em;-->\n  <!--height: 5em;-->\n  <!--border-radius: 5em;-->\n  <!--box-shadow: 0 0 20px rgba(255,255,255,0.5);-->\n  <!--color: #177d7b;-->\n  <!--margin: auto;-->\n<!--">-->\n    <!--<span style="font-size: 1.5em; text-align: center; font-weight: bold"> <ion-icon name="bluetooth"></ion-icon></span>-->\n  <!--</div>-->\n</ion-content>\n'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_2__providers_globalVars__["a" /* GlobalVars */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(100);
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
        this.success = function (data) {
            _this.gv.setBluetoothName('test');
            console.log(JSON.stringify(data));
            alert(data);
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
    BluetoothPage.prototype.selectDevice = function (address) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bluetooth',template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/bluetooth/bluetooth.html"*/'<!--<ion-header no-border>-->\n  <!--<ion-navbar text-center="">-->\n    <!--<ion-title>Bluetooth</ion-title>-->\n  <!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bluetooth</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list padding>\n    <ion-list-header style="margin: 40px 0 0 0">\n      Appareils associés\n    </ion-list-header>\n\n    <ion-item *ngIf="!pairedDevices">\n      <div class="address">\n      Aucun appareils accociés\n      </div>\n    </ion-item>\n\n    <ion-item *ngFor="let device of pairedDevices">\n      <span (click)="selectDevice(device.address)">\n        <div class="name">{{device.name}}</div>\n        <div class="address">{{device.address}}</div>\n      </span>\n    </ion-item>\n\n    <ion-list-header style="margin: 40px 0 0 0">\n      Appareils disponibles\n    </ion-list-header>\n\n    <ion-item *ngIf="!unpairedDevices">\n      <div class="address">\n        Aucun appareils disponibles\n      </div>\n    </ion-item>\n\n    <ion-item *ngFor=\'let device of unpairedDevices\'>\n      <span (click)="selectDevice(device.address)">\n          <div class="name">{{device.name}}</div>\n          <div class="address">{{device.address}}</div>\n      </span>\n    </ion-item>\n  </ion-list>\n\n  <div style="position: fixed; bottom: 75px; left: 50%; transform: translateX(-50%);">\n    <div style="display: flex; justify-content:center;">\n      <div class="btn-bluetooth">\n        <button color="grey" round ion-button large icon-only (click)="startScanning()">\n          <ion-icon name="bluetooth"></ion-icon>\n        </button>\n        <ion-spinner name="crescent" *ngIf="gettingDevices"></ion-spinner>\n      </div>\n\n      <div class="btn-bluetooth">\n        <button color="white" round ion-button large icon-only (click)="disconnect()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/bluetooth/bluetooth.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */]])
], BluetoothPage);

//# sourceMappingURL=bluetooth.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_measure_service_measure_service__ = __webpack_require__(197);
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
            console.log(JSON.stringify(data));
        });
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mes données</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list padding>\n    <ion-list-header>\n      Dernières mesures\n    </ion-list-header>\n\n    <!--<ion-item *ngFor="let measure of measures">-->\n      <!--<span>-->\n        <!--<div class="name">{{device.name}}</div>-->\n        <!--<div class="address">{{device.address}}</div>-->\n      <!--</span>-->\n    <!--</ion-item>-->\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/pages/dashboard/dashboard.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_measure_service_measure_service__["a" /* MeasureService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_measure_service_measure_service__["a" /* MeasureService */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__(268);
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
    MeasureService.prototype.findMeasures = function () {
        var _this = this;
        if (this.measures) {
            return Promise.resolve(this.measures);
        }
        // Dont have the data yet
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* API_ENDPOINT */] + '/measure')
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MeasureService);

//# sourceMappingURL=measure-service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_bluetooth_serial__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_measure_service_measure_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_globalVars__ = __webpack_require__(100);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__["a" /* BluetoothPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__["a" /* BluetoothPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_measure_service_measure_service__["a" /* MeasureService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_globalVars__["a" /* GlobalVars */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(196);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_bluetooth_bluetooth__["a" /* BluetoothPage */];
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/corentin/INSSET/Projets/iBreath-app/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title><span>i</span>Breath</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/corentin/INSSET/Projets/iBreath-app/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINT; });
var API_ENDPOINT = 'http://192.168.43.243:8100/api';
//# sourceMappingURL=constants.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map