webpackJsonp([8],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnoncePostulerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AnnoncePostulerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnoncePostulerPage = /** @class */ (function () {
    function AnnoncePostulerPage(navCtrl, navParams, authService, ctrlView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.ctrlView = ctrlView;
        this.titre = this.navParams.get('titre');
        this.demandeur = this.navParams.get('username');
        this.description = this.navParams.get('description');
        this.prix = this.navParams.get('prix');
        this.back = false;
    }
    AnnoncePostulerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnnoncePostulerPage');
    };
    AnnoncePostulerPage.prototype.envoyer = function () {
        console.log(this.prixNego);
        this.authService.setDatapostuler(this.navParams.get('username'), this.navParams.get('titre'), this.prixNego);
        this.back = true;
        this.ctrlView.dismiss();
    };
    AnnoncePostulerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-annonce-postuler',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\annonce-postuler\annonce-postuler.html"*/'<!--\n  Generated template for the AnnoncePostulerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Postuler a un service</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>{{titre}}</h1> \n  <p> Le demandeur de service : {{demandeur}}     </p>\n  <p>Description du servive :</p>\n  <p>{{description}}</p>\n  <h2>Prix : {{prix}}</h2>\n   <ion-item >\n     <ion-label floating> Prix propose</ion-label>\n    <ion-input type="number"  [(ngModel)]="prixNego"></ion-input>\n  </ion-item> \n <button ion-button  (click)="envoyer()">Envoyer</button> \n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\annonce-postuler\annonce-postuler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], AnnoncePostulerPage);
    return AnnoncePostulerPage;
}());

//# sourceMappingURL=annonce-postuler.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnoncePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formannoce_formannoce__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__annonce_postuler_annonce_postuler__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AnnoncePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnoncePage = /** @class */ (function () {
    function AnnoncePage(navCtrl, navParams, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.result = [];
        this.meme = [];
        this.different = [];
        this.i = 0;
        this.j = 0;
        this.k = 0;
        this.visible = false;
    }
    // onViewLoad(){
    // }
    AnnoncePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.useraut = this.authservice.userName;
        this.result = [];
        this.meme = [];
        this.different = [];
        this.i = 0;
        this.j = 0;
        this.k = 0;
        this.latable = this.authservice.getData();
        this.latable.subscribe(function (data) {
            _this.result = data;
            for (_this.i = 0; _this.i < _this.result.length; _this.i++) {
                if (_this.result[_this.i].username == _this.authservice.userName) {
                    _this.meme[_this.j] = _this.result[_this.i];
                    _this.j++;
                }
                else {
                    _this.visible = true;
                    _this.different[_this.k] = _this.result[_this.i];
                    _this.k++;
                }
            }
            console.log(_this.meme);
        });
    };
    AnnoncePage.prototype.nouveauAnnonce = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__formannoce_formannoce__["a" /* FormannocePage */]);
    };
    AnnoncePage.prototype.send = function (titre, tag, description, prix, username) {
        if (this.authservice.userName != username)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__annonce_postuler_annonce_postuler__["a" /* AnnoncePostulerPage */], { titre: titre,
                tag: tag,
                description: description,
                prix: prix,
                username: username
            });
    };
    AnnoncePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-annonce',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\annonce\annonce.html"*/'<!--\n  Generated template for the AnnoncePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Annonce </ion-title>\n    <button class="plus" ion-button (click)="nouveauAnnonce()">\n      <ion-icon  slot="icon-only" name="add"></ion-icon>\n  </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="ion-text-wrap">\n    <ion-item-divider>\n      <ion-label>\n      Nos Services\n      </ion-label>\n    </ion-item-divider>\n  \n    <ion-item>\n        <h2>plombier</h2>\n        <p>chargé de la réalisation ou<br> de la réparation des <br>installations de plomberie</p>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/plombier.png">\n        </ion-thumbnail>\n      </ion-item>\n      <ion-item>\n          <h2>Menuisier</h2>\n          <p>réalise les portes, les fenêtres<br>, les parquets et  boiseries <br>dans le bâtiment, les meubles et les sièges.</p>\n          <ion-thumbnail item-start>\n            <img src="../../assets/imgs/menuisier.jpg">\n          </ion-thumbnail>\n        </ion-item>\n    <ion-item class="ion-text-wrap">\n        <h2>Electricien</h2>\n        <p class="ion-text-wrap"> chargé de la conception, de l’installation<br>, de l’entretien et du dépannage des <br>réseaux et équipements électriques.</p>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/electricien.jpg">\n        </ion-thumbnail>\n      </ion-item>\n  \n    <ion-item-divider>\n      <ion-label class="titre">\n      Mes annonces\n      </ion-label>\n    </ion-item-divider>\n  \n    <ion-item *ngFor="let appareil of meme" (click)="send(appareil.titre_anonce,appareil.tag,appareil.description,appareil.prix,appareil.username)">\n      <h2 id="dis">\n      {{appareil.titre_anonce}}</h2><h3>{{appareil.tag}}</h3> \n      <p >{{appareil.description}}</p><p>{{appareil.prix}}</p>\n      <p>{{appareil.username}}</p>\n    </ion-item>\n    \n    <ion-item-divider>\n      <ion-label class="titre" *ngIf="visible">\n      Les Offres\n      </ion-label>\n    </ion-item-divider>\n  \n    <ion-item *ngFor="let appareil of different" (click)="send(appareil.titre_anonce,appareil.tag,appareil.description,appareil.prix,appareil.username)">\n      <h2 id="dis">\n      {{appareil.titre_anonce}}</h2><h3>{{appareil.tag}}</h3> \n      <p >{{appareil.description}}</p><p>{{appareil.prix}}</p>\n      <p>{{appareil.username}}</p>\n    </ion-item>\n\n  </ion-list>\n\n   \n</ion-content>\n\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\annonce\annonce.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], AnnoncePage);
    return AnnoncePage;
}());

//# sourceMappingURL=annonce.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormannocePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FormannocePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormannocePage = /** @class */ (function () {
    function FormannocePage(navCtrl, navParams, formBuilder, authProvider, ctrlView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.ctrlView = ctrlView;
    }
    FormannocePage.prototype.ngOnInit = function () {
        this.initForm();
    };
    FormannocePage.prototype.initForm = function () {
        this.formulaireForm = this.formBuilder.group({
            titre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            telephone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('0+[5-7]+[0-9]+')])),
            prix: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            metie: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
    };
    FormannocePage.prototype.send = function () {
        this.authProvider.setannonce(this.formulaireForm.value.titre, this.formulaireForm.value.description, this.formulaireForm.value.telephone, this.formulaireForm.value.prix, this.formulaireForm.value.metie);
        this.ctrlView.dismiss();
    };
    FormannocePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formannoce',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\formannoce\formannoce.html"*/'<!--\n  Generated template for the FormannocePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Deposer une annonce</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <form [formGroup]="formulaireForm" > \n        <ion-item>\n            <ion-label floating> Titre de l\'annonce</ion-label>\n            <ion-input formControlName="titre"></ion-input>\n          </ion-item>\n          <ion-item >\n              <ion-label floating> Description</ion-label>\n              <ion-textarea  formControlName="description"></ion-textarea>\n            </ion-item>\n          <ion-item>\n              <ion-label floating> tel</ion-label>\n              <ion-input type="number" formControlName="telephone"></ion-input>\n            </ion-item>\n              <ion-item >\n                  <ion-label floating>Specialite</ion-label>\n            \n                  <ion-select formControlName="metie" [(ngModel)]="metier" >\n                    <ion-option value="Plomberie">#Plomberie</ion-option>\n                    <ion-option value="Menuiserie">#Menuiserie</ion-option>\n                    <ion-option value="Electricien">#Electricien</ion-option>\n                  </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating> Prix</ion-label>\n                    <ion-input type="number" formControlName="prix"></ion-input>\n                  </ion-item>\n                  <button ion-button  (click)="send()" [disabled]="!formulaireForm.valid" >Deposer</button>\n\n      </form>  \n\n\n</ion-content>\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\formannoce\formannoce.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], FormannocePage);
    return FormannocePage;
}());

//# sourceMappingURL=formannoce.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthPage = /** @class */ (function () {
    function AuthPage(navCtrl, navParams, formBuilder, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authservice = authservice;
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthPage');
    };
    AuthPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            user_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            Password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
    };
    AuthPage.prototype.authentifier = function () {
        var _this = this;
        this.authservice.setData(this.authForm.value.user_name, this.authForm.value.Password);
        setTimeout(function () {
            if (_this.authservice.user == _this.authForm.value.user_name) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }
        }, 800);
    };
    AuthPage.prototype.inscrit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inscription_inscription__["a" /* InscriptionPage */]);
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\auth\auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Authentification</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="authForm">\n\n\n    <ion-item>\n      <ion-label floating>User Name</ion-label>\n      <ion-input formControlName="user_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="Password" formControlName="Password"></ion-input>\n    </ion-item>\n   <button ion-button class="submit" (click)="authentifier()">Submit </button>\n  </form>\n <p (click)="inscrit()" class="inscription">Inscription</p> \n <!-- <button ion-button (click)="inscrit()"></button> -->\n</ion-content>\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\auth\auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_inscriptionservice_inscriptionservice__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InscriptionPage = /** @class */ (function () {
    //appareilsList: FormulaireClass;
    function InscriptionPage(navCtrl, navParams, formBuilder, inscService, ctrlView) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.inscService = inscService;
        this.ctrlView = ctrlView;
        this.visibilite = false;
        this.tag = '';
    }
    InscriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InscriptionPage');
    };
    InscriptionPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    InscriptionPage.prototype.initForm = function () {
        this.formulaireForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            prenom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            user_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            // email: ['', Validators.pattern(".+\@.+\..+")],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            typeUser: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            metie: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */]],
        });
    };
    InscriptionPage.prototype.changer = function () {
        this.visibilite = true;
        console.log(this.visibilite);
    };
    InscriptionPage.prototype.changerUn = function () {
        this.visibilite = false;
        this.formulaireForm.value.metie = "";
        console.log(this.visibilite);
    };
    InscriptionPage.prototype.send = function () {
        this.inscService.setinscription(this.formulaireForm.value.name, this.formulaireForm.value.prenom, this.formulaireForm.value.user_name, this.formulaireForm.value.password, this.formulaireForm.value.address, this.formulaireForm.value.typeUser, this.formulaireForm.value.metie, this.formulaireForm.value.email);
        this.ctrlView.dismiss();
    };
    InscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inscription',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\inscription\inscription.html"*/'<!--\n  Generated template for the InscriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="formulaireForm" (ngSubmit)="send()"> \n\n    <ion-item>\n      <ion-label floating> Nom</ion-label>\n      <ion-input formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Prenom</ion-label>\n      <ion-input formControlName="prenom"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> User name</ion-label>\n      <ion-input formControlName="user_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Email</ion-label>\n      <ion-input formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Mot de passe</ion-label>\n      <ion-input formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating> Adresse</ion-label>\n      <ion-input formControlName="address"></ion-input>\n    </ion-item>\n    <ion-list formControlName="typeUser" radio-group [(ngModel)]="valeur" >\n    <ion-item>\n      <ion-label>Client</ion-label>\n      <ion-radio name="client" value="client" (ionSelect)=" changerUn()"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label> Specialiste</ion-label>\n      <ion-radio name="specialiste" value="specialiste" (ionSelect)=" changer()"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n\n    <ion-item *ngIf="visibilite">\n      <ion-label floating>Specialite</ion-label>\n\n      <ion-select formControlName="metie" [(ngModel)]="metier" >\n        <ion-option value="Plombier">#Plomberie</ion-option>\n        <ion-option value="Menuisier">#Menuiserie</ion-option>\n        <ion-option value="Electricien">#Electricien</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n\n\n\n    <button ion-button type="submit"  [disabled]="!formulaireForm.valid">Submit</button>\n\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\inscription\inscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_inscriptionservice_inscriptionservice__["a" /* InscriptionserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], InscriptionPage);
    return InscriptionPage;
}());

//# sourceMappingURL=inscription.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__annonce_annonce__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesannonces_mesannonces__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.profile = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
        this.annonce = __WEBPACK_IMPORTED_MODULE_2__annonce_annonce__["a" /* AnnoncePage */];
        this.mesannonces = __WEBPACK_IMPORTED_MODULE_4__mesannonces_mesannonces__["a" /* MesannoncesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="annonce" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="mesannonces" tabTitle="Mes demandes" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="profile" tabTitle="Profile" tabIcon="contact"></ion-tab>\n    \n  </ion-tabs>\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, formBuilder, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authservice = authservice;
        this.client = false; //
        this.specialiste = false; //
        this.result = [];
        this.condition = false;
        this.visibilite = this.specialiste;
        this.tag = '';
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        this.latable = this.authservice.getInformation();
        this.latable.subscribe(function (data) {
            _this.result = data;
            console.log(_this.result);
            _this.id = _this.result[0];
            _this.nom = _this.result[1];
            _this.prenom = _this.result[2];
            _this.username = _this.result[3];
            _this.email = _this.result[4];
            _this.password = _this.result[5];
            _this.adresse = _this.result[6];
            _this.typecompte = _this.result[7];
            _this.specialite = _this.result[8];
            if (_this.typecompte == 'specialiste') {
                _this.condition = true;
            }
            //  if(this.result[7]=='specialiste')
            //     {this.specialiste=true;
            //     this.client=false;
            //     this.visibilite = this.specialiste;
            //     this.metier=this.result[8];
            //   }
            //  else
            //    { this.client=true;
            //       this.specialiste=false;
            //       this.visibilite = this.specialiste;
            //   }
        });
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.initForm();
        // this.nom='teest';
    };
    ProfilePage.prototype.initForm = function () {
        this.formulaireForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            prenom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            user_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            // email: ['', Validators.pattern(".+\@.+\..+")],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            typecompte: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */]],
            specialite: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */]],
        });
    };
    // changer() {
    //   this.visibilite = true;
    //   console.log(this.visibilite);
    // }
    // changerUn(){
    //   this.visibilite = false;
    //   this.formulaireForm.value.metie=""
    //   console.log(this.visibilite);
    // }
    ProfilePage.prototype.send = function () {
        this.authservice.setprofile(this.id, this.formulaireForm.value.name, this.formulaireForm.value.prenom, this.formulaireForm.value.user_name, this.formulaireForm.value.email, this.formulaireForm.value.password, this.formulaireForm.value.address, this.formulaireForm.value.typecompte, this.formulaireForm.value.specialite);
        console.log(this.formulaireForm.value.prenom);
    };
    ProfilePage.prototype.Deconnexion = function () {
        window.location.reload();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n    <button ion-button (click)="Deconnexion()" class="deconnexion" >\n      <ion-icon  slot="icon-only" name="log-out"></ion-icon>\n    </button>\n  </ion-navbar> \n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="formulaireForm" (ngSubmit)="send()"> \n\n    <ion-item>\n      <ion-label  > Nom :</ion-label>\n      <ion-input value={{nom}} formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label > Prenom :</ion-label>\n      <ion-input value={{prenom}} formControlName="prenom"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label > User name :</ion-label>\n      <ion-input value={{username}} formControlName="user_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label > Email :</ion-label>\n      <ion-input value={{email}} formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label > Mot de passe :</ion-label>\n      <ion-input value={{password}} formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label > Adresse :</ion-label>\n      <ion-input value={{adresse}} formControlName="address"></ion-input>\n    </ion-item>\n    <!-- <ion-list formControlName="typeUser" radio-group [(ngModel)]="valeur" >\n    <ion-item>\n      <ion-label>Client</ion-label>\n      <ion-radio checked={{client}} name="client" value="client" (ionSelect)=" changerUn()"></ion-radio>\n    </ion-item> -->\n    \n    \n    <!-- <ion-item>\n      <ion-label> Specialiste</ion-label>\n      <ion-radio checked={{specialiste}} name="specialiste" value="specialiste" (ionSelect)=" changer()"></ion-radio>\n    </ion-item>\n  </ion-list> -->\n  <ion-item>\n    <ion-label> Type compte</ion-label>\n    <ion-input value={{typecompte}} disabled="true" formControlName="typecompte"></ion-input>\n  </ion-item>\n  <ion-item  *ngIf="condition">\n    <ion-label> specialite</ion-label>\n    <ion-input value={{specialite}} disabled="true" formControlName="specialite"></ion-input>\n  </ion-item>\n\n\n\n    <!-- <ion-item *ngIf="visibilite">\n      <ion-label floating>Specialite</ion-label>\n\n      <ion-select formControlName="metie" [(ngModel)]="metier" >\n        <ion-option *ngIf="metie==Plomberie"  value="Plomberie">#Plomberie</ion-option>\n        <ion-option  *ngIf="metie==Menuiserie" value="Menuiserie">#Menuiserie</ion-option>\n        <ion-option *ngIf="metie==Electricien"	value="Electricien">#Electricien</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n\n\n\n\n    <button ion-button type="submit"  >Submit</button>\n\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesannoncesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MesannoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesannoncesPage = /** @class */ (function () {
    function MesannoncesPage(navCtrl, navParams, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.result = [];
    }
    MesannoncesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.result = [];
        this.latable = this.authservice.getAnnonce();
        this.latable.subscribe(function (data) {
            _this.result = data;
            console.log(_this.result);
        });
        this.user = this.authservice.userName;
    };
    MesannoncesPage.prototype.onRefuser = function (id, client_username, titre_anonce, etat_demande) {
        console.log(id, client_username, titre_anonce, etat_demande);
        this.authservice.accepter(id, client_username, titre_anonce, etat_demande);
        this.ionViewWillEnter();
    };
    MesannoncesPage.prototype.onAccepter = function (id, client_username, titre_anonce, etat_demande) {
        console.log(id, client_username, titre_anonce, etat_demande);
        this.authservice.accepter(id, client_username, titre_anonce, etat_demande);
        this.ionViewWillEnter();
    };
    MesannoncesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mesannonces',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\mesannonces\mesannonces.html"*/'<!--\n  Generated template for the MesannoncesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>Mes annonces</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-card *ngFor="let appareil of result">\n      <ion-card-header>{{ appareil.titre_anonce }}</ion-card-header>\n      <ion-card-content>\n        <p >Nom du specialiste :{{ appareil.specialiste_username }}</p>\n       \n                <p>prix negociable :{{ appareil.prix_negociable}}</p>\n                <h1 *ngIf="appareil.specialiste_username===user" >Etat :{{ appareil.etat_demande}}</h1>\n      </ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button *ngIf="appareil.specialiste_username!==user"\n              ion-button\n              full\n              color="danger"\n              (click)="onRefuser(appareil.id,appareil.client_username,appareil.titre_anonce,\'refusé\')"\n              \n              >refuser</button>\n          </ion-col>\n          <ion-col>\n            <button\n              ion-button\n              full\n              (click)="onAccepter(appareil.id,appareil.client_username,appareil.titre_anonce,\'accepté\')"\n              color="secondary"\n              *ngIf="appareil.specialiste_username!==user"\n              >accepter</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </ion-content>\n  '/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\mesannonces\mesannonces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], MesannoncesPage);
    return MesannoncesPage;
}());

//# sourceMappingURL=mesannonces.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/annonce-postuler/annonce-postuler.module": [
		286,
		7
	],
	"../pages/annonce/annonce.module": [
		287,
		6
	],
	"../pages/auth/auth.module": [
		288,
		5
	],
	"../pages/formannoce/formannoce.module": [
		289,
		4
	],
	"../pages/inscription/inscription.module": [
		290,
		3
	],
	"../pages/mesannonces/mesannonces.module": [
		291,
		2
	],
	"../pages/profile/profile.module": [
		292,
		1
	],
	"../pages/tabs/tabs.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the InscriptionserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InscriptionserviceProvider = /** @class */ (function () {
    function InscriptionserviceProvider(http) {
        this.http = http;
        console.log('Hello InscriptionserviceProvider Provider');
    }
    InscriptionserviceProvider.prototype.setinscription = function (name, prenom, userName, password, address, typeUser, metie, email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest',
        });
        this.name = name;
        this.prenom = prenom;
        this.userName = userName;
        this.password = password;
        this.address = address;
        this.typeUser = typeUser;
        this.email = email;
        if (metie == null || typeof metie == 'undefined' || metie == '') {
            this.metie = "null";
        }
        else {
            this.metie = metie;
        }
        var data = {
            "name": this.name,
            "prenom": this.prenom,
            "username": this.userName,
            "email": this.email,
            "password": this.password,
            "address": this.address,
            "type_compte": this.typeUser,
            "tag": this.metie,
        };
        this.http.post("http://192.168.43.113:8000/api/insererUser", data, { headers: headers }).subscribe(function (res) {
            console.log(res);
        });
    };
    InscriptionserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InscriptionserviceProvider);
    return InscriptionserviceProvider;
}());

//# sourceMappingURL=inscriptionservice.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_authservice_authservice__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_inscriptionservice_inscriptionservice__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_annonce_annonce__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_formannoce_formannoce__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mesannonces_mesannonces__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_annoceservice_annoceservice__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_profileservice_profileservice__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_annonce_postuler_annonce_postuler__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_annonce_annonce__["a" /* AnnoncePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_formannoce_formannoce__["a" /* FormannocePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mesannonces_mesannonces__["a" /* MesannoncesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_annonce_postuler_annonce_postuler__["a" /* AnnoncePostulerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/annonce-postuler/annonce-postuler.module#AnnoncePostulerPageModule', name: 'AnnoncePostulerPage', segment: 'annonce-postuler', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/annonce/annonce.module#AnnoncePageModule', name: 'AnnoncePage', segment: 'annonce', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formannoce/formannoce.module#FormannocePageModule', name: 'FormannocePage', segment: 'formannoce', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inscription/inscription.module#InscriptionPageModule', name: 'InscriptionPage', segment: 'inscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mesannonces/mesannonces.module#MesannoncesPageModule', name: 'MesannoncesPage', segment: 'mesannonces', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_annonce_annonce__["a" /* AnnoncePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_formannoce_formannoce__["a" /* FormannocePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mesannonces_mesannonces__["a" /* MesannoncesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_annonce_postuler_annonce_postuler__["a" /* AnnoncePostulerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_authservice_authservice__["a" /* AuthserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_inscriptionservice_inscriptionservice__["a" /* InscriptionserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_inscriptionservice_inscriptionservice__["a" /* InscriptionserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_annoceservice_annoceservice__["a" /* AnnoceserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_profileservice_profileservice__["a" /* ProfileserviceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_auth__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\issam-lanfouf-ionic\4\servicapp1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnoceserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AnnoceserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AnnoceserviceProvider = /** @class */ (function () {
    function AnnoceserviceProvider(http) {
        this.http = http;
        console.log('Hello AnnoceserviceProvider Provider');
    }
    AnnoceserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AnnoceserviceProvider);
    return AnnoceserviceProvider;
}());

//# sourceMappingURL=annoceservice.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProfileserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileserviceProvider = /** @class */ (function () {
    //username:String;
    function ProfileserviceProvider(http) {
        this.http = http;
    }
    ProfileserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProfileserviceProvider);
    return ProfileserviceProvider;
}());

//# sourceMappingURL=profileservice.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthserviceProvider = /** @class */ (function () {
    function AuthserviceProvider(http, alerte) {
        this.http = http;
        this.alerte = alerte;
        console.log('Hello AuthserviceProvider Provider');
        this.url = "http://192.168.43.113:8000";
    }
    AuthserviceProvider.prototype.setData = function (userName, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        this.userName = userName;
        this.password = password;
        //console.log(this.userName);
        var data = {
            "username": this.userName,
            "password": this.password
        };
        this.http.post(this.url + "/api/VerifierUser", data, { headers: headers }).subscribe(function (res) {
            _this.user = res['exist'];
            console.log(_this.user);
        });
        setTimeout(function () {
            var addTodoAlert = _this.alerte.create({
                title: "Erreur d'authentification",
                message: "cet utilisateur n'existe pas dans notre systeme",
                buttons: [
                    {
                        text: "Exite"
                    }
                ]
            });
            if (_this.user == 'No')
                addTodoAlert.present();
        }, 400);
    };
    AuthserviceProvider.prototype.getData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var data = {
            "username": this.userName,
        };
        return this.http.post(this.url + "/api/GetAnonce", data, { headers: headers });
    };
    AuthserviceProvider.prototype.getInformation = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var data = {
            "username": this.userName,
        };
        return this.http.post(this.url + "/api/GetUser", data, { headers: headers });
    };
    AuthserviceProvider.prototype.setprofile = function (id, name, prenom, userName, email, password, address, typeUser, metie) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        if (metie == null || typeof metie == 'undefined' || metie == '') {
            this.metie = "null";
        }
        else {
            this.metie = metie;
        }
        var data = {
            "id": id,
            "name": name,
            "prenom": prenom,
            "username": userName,
            "email": email,
            "password": password,
            "address": address,
            "type_compte": typeUser,
            "tag": this.metie
        };
        this.http.post(this.url + "/api/UpdateUser", data, { headers: headers }).subscribe();
    };
    AuthserviceProvider.prototype.setannonce = function (titre, description, telephone, prix, metie) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var data = {
            "username": this.userName,
            "titre_anonce": titre,
            "tag": metie,
            "tel": telephone,
            "description": description,
            "prix": prix,
        };
        this.http.post(this.url + "/api/insererAnonce", data, { headers: headers }).subscribe();
        console.log(data);
    };
    AuthserviceProvider.prototype.setDatapostuler = function (client, titre, prix) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var data = {
            "specialiste_username": this.userName,
            "titre_anonce": titre,
            "client_username": client,
            "prix_negociable": prix
        };
        this.http.post(this.url + "/api/insererAnonceDemander", data, { headers: headers }).subscribe();
    };
    AuthserviceProvider.prototype.getAnnonce = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var data = {
            "username": this.userName,
        };
        console.log(this.userName);
        return this.http.post(this.url + "/api/GetAnonceDemander", data, { headers: headers });
    };
    ;
    AuthserviceProvider.prototype.accepter = function (id, user, anonce, etat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': '*',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var data = {
            "id": id,
            "client_username": user,
            "titre_anonce": anonce,
            "etat": etat,
        };
        this.http.post(this.url + "/api/AjouterEtatAnonce", data, { headers: headers }).subscribe(function (res) {
        });
    };
    AuthserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], AuthserviceProvider);
    return AuthserviceProvider;
}());

//# sourceMappingURL=authservice.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map