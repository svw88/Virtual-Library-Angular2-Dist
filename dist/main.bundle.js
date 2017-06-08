webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'my-app',
        template: "\n    <navigation></navigation>\n    <div align=\"center\" class=\"container-fluid main\">\n      <router-outlet></router-outlet>\n    </div>\n    "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_app_routing__ = __webpack_require__("../../../../../src/app/routing/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_google_books_service__ = __webpack_require__("../../../../../src/app/services/google-books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_book_list_object_component__ = __webpack_require__("../../../../../src/app/components/book-list-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_favorites_component__ = __webpack_require__("../../../../../src/app/components/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_search_page_component__ = __webpack_require__("../../../../../src/app/components/search-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_component__ = __webpack_require__("../../../../../src/app/components/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_favorite_component__ = __webpack_require__("../../../../../src/app/components/favorite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_book_page_component__ = __webpack_require__("../../../../../src/app/components/book-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_book_page_object_component__ = __webpack_require__("../../../../../src/app/components/book-page-object.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pagination_component__ = __webpack_require__("../../../../../src/app/components/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_highlight_pipe__ = __webpack_require__("../../../../../src/app/pipes/highlight.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__routing_app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_favorites_component__["a" /* FavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_book_list_object_component__["a" /* BookListObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_search_page_component__["a" /* SearchPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_favorite_component__["a" /* FavoriteComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_book_page_component__["a" /* BookPageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_book_page_object_component__["a" /* BookPageObjectComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_highlight_pipe__["a" /* HighlightPipe */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_google_books_service__["a" /* GoogleBookService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-list-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_favorite__ = __webpack_require__("../../../../../src/app/interfaces/favorite.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_favorite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_favorite__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListObjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListObjectComponent = (function () {
    function BookListObjectComponent() {
        this.favoriteChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    BookListObjectComponent.prototype.onFavoriteClick = function ($event) {
        $event.stopPropagation();
    };
    BookListObjectComponent.prototype.onFavoriteChange = function ($event) {
        this.isFavorite = $event.newValue;
        this.favoriteChange.emit({ value: $event.newValue, book: this.book });
    };
    return BookListObjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_favorite__["Favorite"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_favorite__["Favorite"]) === "function" && _a || Object)
], BookListObjectComponent.prototype, "book", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BookListObjectComponent.prototype, "isFavorite", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BookListObjectComponent.prototype, "search", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], BookListObjectComponent.prototype, "favoriteChange", void 0);
BookListObjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'bookListObject',
        template: "\n    <div [ngClass]=\"{'favorite-background' : isFavorite}\" class=\"media list-item-border cursor-pointer\">\n        <div class=\"media-left vertical-align-middle\">\n           <img [src]=\"book.imgUrl\" alt=\"Image not available\" class=\"media-object thumb\" style=\"width:100px\">\n        </div>\n        <div class=\"media-body vertical-align-middle\">\n            <h4 class=\"media-heading\" [innerHtml]=\"book.title | highlight : search\"></h4>\n            <div>\n            <label>Authors: </label>\n            <label *ngFor=\"let author of book.authors\">({{author}})</label>\n            </div>\n            <div>\n            <label>Published: </label>\n            <label>{{book.published}}</label>\n            </div>\n        </div>\n         <div class=\"media-right vertical-align-middle\">\n            <favorite [isFavorite]=\"isFavorite\" \n                (click)=\"onFavoriteClick($event)\" \n                (change)=\"onFavoriteChange($event)\">\n            </favorite>\n        </div>\n    </div>\n    "
    })
], BookListObjectComponent);

var _a;
//# sourceMappingURL=book-list-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-page-object.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_book_object__ = __webpack_require__("../../../../../src/app/interfaces/book-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_book_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_book_object__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPageObjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookPageObjectComponent = (function () {
    function BookPageObjectComponent() {
    }
    return BookPageObjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_book_object__["Book"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_book_object__["Book"]) === "function" && _a || Object)
], BookPageObjectComponent.prototype, "book", void 0);
BookPageObjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'bookPageObject',
        template: "\n    <div class=\"media list-item-border\">\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{book.title}}</h4>\n            <div>\n            <label>Authors: </label>\n            <label *ngFor=\"let author of book.authors\">({{author}})</label>\n            </div>\n            <div>\n            <label>Published: </label>\n            <label>{{book.published}}</label>\n            </div>\n            <div>\n            <label>Description: </label>\n            <p>{{book.description}}</p>\n            </div>\n             <div>\n            <label>Pages: </label>\n            <label>{{book.pageCount}}</label>\n            </div>\n             <div>\n            <label>Maturity Rating: </label>\n            <label>{{book.maturityRating}}</label>\n            </div>\n             <div>\n            <label>Buy Link: </label>\n            <a [href]=\"book.buyLink\">{{book.buyLink}}</a>\n            </div>\n        </div>\n    </div>\n    "
    })
], BookPageObjectComponent);

var _a;
//# sourceMappingURL=book-page-object.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__ = __webpack_require__("../../../../../src/app/services/google-books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookPageComponent = (function () {
    function BookPageComponent(_postService, _route, _router) {
        this._postService = _postService;
        this._route = _route;
        this._router = _router;
        this.isLoading = true;
    }
    BookPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) {
            _this._postService.getBook(params["name"], params["author"])
                .then(function (posts) {
                _this.book = posts.items[0];
                _this.isLoading = false;
            });
        });
    };
    ;
    BookPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ;
    return BookPageComponent;
}());
BookPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: "\n    <div *ngIf=\"isLoading\">\n          <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    </div>\n    <div *ngIf=\"!isLoading \">\n        <bookPageObject \n            [book]=\"{title: book.volumeInfo.title,\n                     imgUrl: book.volumeInfo.imageLinks?.thumbnail,\n                     authors: book.volumeInfo.authors,\n                     published: book.volumeInfo.publisher + ' - ' + book.volumeInfo.publishedDate,\n                     description: book.volumeInfo.description,\n                     pageCount: book.volumeInfo.pageCount,\n                     maturityRating: book.volumeInfo.maturityRating,\n                     buyLink: book.saleInfo.buyLink\n                    }\"        \n            >\n        </bookPageObject> \n    </div>     \n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__["a" /* GoogleBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__["a" /* GoogleBookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BookPageComponent);

var _a, _b, _c;
//# sourceMappingURL=book-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/favorite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoriteComponent = (function () {
    function FavoriteComponent() {
        this.isFavorite = false;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    };
    return FavoriteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FavoriteComponent.prototype, "isFavorite", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], FavoriteComponent.prototype, "change", void 0);
FavoriteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'favorite',
        template: "\n        <i class=\"glyphicon glyphicon-x2\"\n            [class.glyphicon-star-empty]=\"!isFavorite\"\n            [class.glyphicon-star]=\"isFavorite\"\n            (click)=\"onClick()\">\n        </i>\n        "
    })
], FavoriteComponent);

//# sourceMappingURL=favorite.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__ = __webpack_require__("../../../../../src/app/services/google-books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritesComponent = (function () {
    function FavoritesComponent(_postService, _route, _router) {
        this._postService = _postService;
        this._route = _route;
        this._router = _router;
        this.isLoading = true;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getFavorites()
            .then(function (posts) {
            _this.books = posts;
            _this.isLoading = false;
        });
    };
    ;
    FavoritesComponent.prototype.changeFavorites = function ($event) {
        if ($event.value) {
            this.books.push($event.book);
        }
        else {
            this.books.splice(this.books.indexOf(this.books.find(function (item) { return item.title == $event.book.title && item.published == $event.book.published; })), 1);
        }
        ;
        this._postService.setFavorites(this.books);
    };
    FavoritesComponent.prototype.onBookClick = function (title, author) {
        this._router.navigate(['book', title, author]);
    };
    return FavoritesComponent;
}());
FavoritesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: "\n     <div *ngIf=\"isLoading\">\n          <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    </div>\n    <div *ngIf=\"!isLoading \">\n        <bookListObject \n            *ngFor=\"let b of books\"\n            [book]=\"{authors: b.authors,\n                     imgUrl: b.imgUrl,\n                     published: b.published,\n                     title: b.title\n                    }\"                                         \n            (click)=\"onBookClick(b.title, b.authors[0])\"\n            (favoriteChange)=\"changeFavorites($event)\"\n            [isFavorite]=\"true\">\n        </bookListObject> \n    </div>     \n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__["a" /* GoogleBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__["a" /* GoogleBookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], FavoritesComponent);

var _a, _b, _c;
//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: "\n    <h1>Welcome To The Virtual Library</h1> \n    <search></search> \n    "
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'navigation',
        template: "\n    <nav class=\"navbar navbar-inverse nav-background\">\n      <div class=\"container-fluid\" align=\"center\">\n      <ul class=\"nav navbar-nav pull-left display-inline\">\n         <li><a routerLink=\"/\">Home</a></li>\n          <li><a routerLink=\"favorites\">Favorites</a></li>         \n        </ul>\n        <search *ngIf=\"router.url != '/'\"></search>\n      </div><!-- /.container-fluid -->\n    </nav>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: "\n    <h1>Not Found</h1>\n    "
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    PaginationComponent.prototype.onClick = function (value) {
        this.index = value;
        this.change.emit(this.index);
    };
    return PaginationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "change", void 0);
PaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'pagination',
        template: "\n    <nav aria-label=\"Page navigation\">\n      <ul class=\"pagination\">\n        <li *ngIf=\"index > 1\">\n          <a (click)=\"onClick(index - 1)\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n          </a>\n        </li>\n            <li *ngIf=\"index > 2\"><a (click)=\"onClick(index - 2)\">{{index - 2}}</a></li>\n            <li *ngIf=\"index > 1\"><a (click)=\"onClick(index - 1)\">{{index - 1}}</a></li>\n            <li class=\"active\"><a>{{index}}</a></li>\n            <li><a (click)=\"onClick(index + 1)\">{{index + 1}}</a></li>\n            <li><a (click)=\"onClick(index + 2)\">{{index + 2}}</a></li>\n        <li>\n          <a (click)=\"onClick(index + 1)\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    "
    })
], PaginationComponent);

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__ = __webpack_require__("../../../../../src/app/services/google-books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPageComponent = (function () {
    function SearchPageComponent(_postService, _route, _router) {
        this._postService = _postService;
        this._route = _route;
        this._router = _router;
        this.isLoading = true;
        this.index = 1;
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) {
            _this._postService.getBooks(params["name"], 0)
                .then(function (posts) {
                _this.books = posts.items;
                _this.isLoading = false;
                _this.index = 1;
                _this.search = params["name"];
            });
            _this._postService.getFavorites()
                .then(function (posts) {
                _this.favorites = posts;
            });
        });
    };
    ;
    SearchPageComponent.prototype.onPageChange = function ($event) {
        var _this = this;
        this.isLoading = true;
        this.index = $event;
        this._postService.getBooks(this.search, (this.index * 5) - 5)
            .then(function (posts) {
            _this.books = posts.items;
            _this.isLoading = false;
        });
    };
    SearchPageComponent.prototype.isFavorite = function (book) {
        if (this.favorites.find(function (item) { return item.title == book.title && item.published == book.published; }) == undefined)
            return false;
        return true;
    };
    SearchPageComponent.prototype.changeFavorites = function ($event) {
        if ($event.value) {
            this.favorites.push($event.book);
        }
        else {
            this.favorites.splice(this.favorites.indexOf(this.favorites.find(function (item) { return item.title == $event.book.title && item.published == $event.book.published; })), 1);
        }
        ;
        this._postService.setFavorites(this.favorites);
    };
    SearchPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ;
    SearchPageComponent.prototype.onBookClick = function (title, author) {
        this._router.navigate(['book', title, author]);
    };
    return SearchPageComponent;
}());
SearchPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: "\n    <div *ngIf=\"isLoading\">\n          <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    </div>\n    <div *ngIf=\"!isLoading \">\n        <bookListObject \n            *ngFor=\"let b of books\"\n            [book]=\"{title: b.volumeInfo.title,\n                     imgUrl: b.volumeInfo.imageLinks?.thumbnail,\n                     authors: b.volumeInfo.authors,\n                     published: b.volumeInfo.publisher + ' - ' + b.volumeInfo.publishedDate\n                    }\" \n            [isFavorite]=\"isFavorite({title: b.volumeInfo.title,\n                     imgUrl: b.volumeInfo.imageLinks?.thumbnail,\n                     authors: b.volumeInfo.authors,\n                     published: b.volumeInfo.publisher + ' - ' + b.volumeInfo.publishedDate\n                    })\"  \n            [search]=\"search\"                                      \n            (click)=\"onBookClick(b.volumeInfo.title, b.volumeInfo.authors[0])\"\n            (favoriteChange)=\"changeFavorites($event)\">\n        </bookListObject> \n        <pagination (change)=\"onPageChange($event)\" [index]=\"index\"></pagination>\n    </div>     \n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__["a" /* GoogleBookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_google_books_service__["a" /* GoogleBookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SearchPageComponent);

var _a, _b, _c;
//# sourceMappingURL=search-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(_router) {
        this._router = _router;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            search: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]()
        });
    }
    ;
    SearchComponent.prototype.search = function () {
        this._router.navigate(['search', this.form.controls.search.value]);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'search',
        template: "\n    <form class=\"display-inline\" [formGroup]=\"form\" (ngSubmit)=\"search()\">\n    <div class=\"form-group\">\n          <input formControlName=\"search\" id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search\">\n          <button type=\"submit\" class=\"btn btn-default\">Search</button> \n    </div>\n    </form>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/book-object.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=book-object.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/favorite.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/highlight.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (text, search) {
        if (search == undefined) {
            return text;
        }
        else {
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            pattern = pattern.split(' ').filter(function (t) {
                return t.length > 0;
            }).join('|');
            var regex = new RegExp(pattern, 'gi');
            return search ? text.replace(regex, function (match) { return "<span class=\"highlight\">" + match + "</span>"; }) : text;
        }
        ;
    };
    ;
    return HighlightPipe;
}());
HighlightPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'highlight' })
], HighlightPipe);

//# sourceMappingURL=highlight.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/routing/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_favorites_component__ = __webpack_require__("../../../../../src/app/components/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_search_page_component__ = __webpack_require__("../../../../../src/app/components/search-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_book_page_component__ = __webpack_require__("../../../../../src/app/components/book-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_2__components_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'book/:name/:author', component: __WEBPACK_IMPORTED_MODULE_5__components_book_page_component__["a" /* BookPageComponent */] },
    { path: 'search/:name', component: __WEBPACK_IMPORTED_MODULE_3__components_search_page_component__["a" /* SearchPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__components_not_found_component__["a" /* NotFoundComponent */] }
]);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/services/google-books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleBookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleBookService = (function () {
    function GoogleBookService(_http) {
        this._http = _http;
        this._url = "https://www.googleapis.com/books/v1/volumes?q=";
    }
    GoogleBookService.prototype.getFavorites = function () {
        return this._http.get('/favoritesList')
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    GoogleBookService.prototype.setFavorites = function (favorites) {
        return this._http.post('/favoritesList', favorites)
            .toPromise();
    };
    GoogleBookService.prototype.getBooks = function (name, index) {
        return this._http.get(this._url + name + "&maxResults=5&startIndex=" + index)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    GoogleBookService.prototype.getBook = function (name, author) {
        return this._http.get(this._url + name + "+inauthor:" + author + "&maxResults=1")
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    return GoogleBookService;
}());
GoogleBookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GoogleBookService);

var _a;
//# sourceMappingURL=google-books.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map