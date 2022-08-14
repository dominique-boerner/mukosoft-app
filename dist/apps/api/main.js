/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/api/v1/cookbook/controller/cookbook.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CookbookController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cookbook_service_1 = __webpack_require__("./apps/api/src/app/api/v1/cookbook/services/cookbook.service.ts");
let CookbookController = class CookbookController {
    constructor(cookbookService) {
        this.cookbookService = cookbookService;
    }
    getRecipes() {
        return this.cookbookService.getAllRecipes().then((recipes) => recipes);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)("/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CookbookController.prototype, "getRecipes", null);
CookbookController = tslib_1.__decorate([
    (0, common_1.Controller)({
        version: "1",
        path: "cookbook",
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cookbook_service_1.CookbookService !== "undefined" && cookbook_service_1.CookbookService) === "function" ? _a : Object])
], CookbookController);
exports.CookbookController = CookbookController;


/***/ }),

/***/ "./apps/api/src/app/api/v1/cookbook/services/cookbook.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CookbookService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const contentful_1 = __webpack_require__("./apps/api/src/app/config/contentful.ts");
const contentful = __webpack_require__("contentful");
let CookbookService = class CookbookService {
    getAllRecipes() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const client = contentful.createClient(contentful_1.contentfulLicense);
            return yield client.getEntries("recipe").then((entry) => entry.items).then((recipes) => {
                return recipes.map((recipe) => {
                    return {
                        title: recipe.fields.title,
                        amount: recipe.fields.amount,
                        ingredients: recipe.fields.ingredients,
                        instructions: recipe.fields.instructions,
                        kcal: recipe.fields.kcal,
                        protein: recipe.fields.protein,
                        fat: recipe.fields.fat,
                        carbohydrates: recipe.fields.carbohydrates
                    };
                });
            });
        });
    }
};
CookbookService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CookbookService);
exports.CookbookService = CookbookService;


/***/ }),

/***/ "./apps/api/src/app/api/v1/medication/controller/medication.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const medication_service_1 = __webpack_require__("./apps/api/src/app/api/v1/medication/services/medication.service.ts");
const api_implicit_query_decorator_1 = __webpack_require__("@nestjs/swagger/dist/decorators/api-implicit-query.decorator");
let MedicationController = class MedicationController {
    constructor(medicationService) {
        this.medicationService = medicationService;
    }
    getMedication(name, count, page) {
        return this.medicationService.getMedication(name, count, page);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, api_implicit_query_decorator_1.ApiImplicitQuery)({
        name: "count",
        required: false,
        type: Number,
    }),
    (0, api_implicit_query_decorator_1.ApiImplicitQuery)({
        name: "page",
        required: false,
        type: Number,
    }),
    tslib_1.__param(0, (0, common_1.Query)("name")),
    tslib_1.__param(1, (0, common_1.Query)("count")),
    tslib_1.__param(2, (0, common_1.Query)("page")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], MedicationController.prototype, "getMedication", null);
MedicationController = tslib_1.__decorate([
    (0, common_1.Controller)({
        version: "1",
        path: "medication",
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof medication_service_1.MedicationService !== "undefined" && medication_service_1.MedicationService) === "function" ? _a : Object])
], MedicationController);
exports.MedicationController = MedicationController;


/***/ }),

/***/ "./apps/api/src/app/api/v1/medication/services/medication.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const txml_1 = __webpack_require__("txml");
const fs = __webpack_require__("fs");
let MedicationService = class MedicationService {
    constructor() {
        this.medicationXmlPath = "apps/api/resources/medication/oddb_product.xml";
        this.medicationXmlTestPath = "apps/api/resources/medication/oddb_product.xml";
        this.medications = [];
        this.readMedicationFromFile();
    }
    readMedicationFromFile() {
        const file = fs.readFileSync(this.medicationXmlPath, { encoding: "utf8" });
        this.medications = (0, txml_1.simplify)((0, txml_1.parse)(file)).PRODUCT.PRD;
    }
    getMedication(name, count = 10, page = 0) {
        const medications = this.medications.filter((medication) => {
            return medication.DSCRD.toLowerCase().includes(name.toLowerCase());
        });
        const medicationsCount = medications.length;
        return {
            meta: {
                totalNumber: medicationsCount,
                totalPages: Math.floor(medicationsCount / count),
                page: page,
                countPerPage: count,
                count: medications.slice(page * count, page * count + count).length,
            },
            data: medications.slice(page * count, page * count + count + 1),
        };
    }
};
MedicationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], MedicationService);
exports.MedicationService = MedicationService;


/***/ }),

/***/ "./apps/api/src/app/api/v1/my-doc/controller/my-doc.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyDocController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const my_doc_service_1 = __webpack_require__("./apps/api/src/app/api/v1/my-doc/services/my-doc.service.ts");
const api_implicit_query_decorator_1 = __webpack_require__("@nestjs/swagger/dist/decorators/api-implicit-query.decorator");
let MyDocController = class MyDocController {
    constructor(myDocService) {
        this.myDocService = myDocService;
    }
    getUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.myDocService
                .getAllUsers()
                .then((response) => response);
        });
    }
    getUsersById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.myDocService
                .getUser(id)
                .then((response) => response);
        });
    }
    getNews(id, sort) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sortBy = sort ? sort : "asc";
            return yield this.myDocService
                .getNews(id, sortBy)
                .then((response) => response);
        });
    }
    getMultipleNews(ids, sort) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const idArray = ids.split(",");
            const sortBy = sort ? sort : "asc";
            return yield this.myDocService
                .getMultipleNews(idArray, sortBy)
                .then((response) => response);
        });
    }
    getMembers(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.myDocService.getMembers(id).then((response) => response);
        });
    }
    getImage(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.myDocService.getImage(id).then((response) => response);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)("users"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], MyDocController.prototype, "getUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)("users/:id"),
    tslib_1.__param(0, (0, common_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MyDocController.prototype, "getUsersById", null);
tslib_1.__decorate([
    (0, common_1.Get)("news/:id"),
    (0, api_implicit_query_decorator_1.ApiImplicitQuery)({
        name: "sort",
        required: false,
        type: String,
    }),
    tslib_1.__param(0, (0, common_1.Param)("id")),
    tslib_1.__param(1, (0, common_1.Query)("sort")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MyDocController.prototype, "getNews", null);
tslib_1.__decorate([
    (0, common_1.Get)("news/"),
    (0, api_implicit_query_decorator_1.ApiImplicitQuery)({
        name: "sort",
        required: false,
        type: String,
    }),
    tslib_1.__param(0, (0, common_1.Query)("ids")),
    tslib_1.__param(1, (0, common_1.Query)("sort")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], MyDocController.prototype, "getMultipleNews", null);
tslib_1.__decorate([
    (0, common_1.Get)("team/:id"),
    tslib_1.__param(0, (0, common_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MyDocController.prototype, "getMembers", null);
tslib_1.__decorate([
    (0, common_1.Get)("image/:id"),
    tslib_1.__param(0, (0, common_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MyDocController.prototype, "getImage", null);
MyDocController = tslib_1.__decorate([
    (0, common_1.Controller)({
        version: "1",
        path: "my-doc",
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof my_doc_service_1.MyDocService !== "undefined" && my_doc_service_1.MyDocService) === "function" ? _a : Object])
], MyDocController);
exports.MyDocController = MyDocController;


/***/ }),

/***/ "./apps/api/src/app/api/v1/my-doc/services/my-doc.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyDocService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const axios_1 = __webpack_require__("axios");
let MyDocService = class MyDocService {
    constructor() {
        this.MY_DOC_BASE_URL = "https://my-doc.net";
        this.defaultParams = {
            module: "mydoc",
            sektion: "show_doctor",
            uuid: "",
            return: "json",
        };
        /**
         * Defines a list of cf specific doctors, self-help groups and communities
         */
        this.MUKO_ID_CATALOG = [
            "b22c3ba0-99e1-11eb-9c65-64652e69642d",
            "ca718dfc-c509-11eb-b6b9-64652e69642d",
            "f8484114-5779-11ec-b3ad-64652e69642d",
            "00051148-dc2e-11e3-9aea-5b61b214e2c0",
        ];
    }
    getAllUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield Promise.all(this.MUKO_ID_CATALOG.map((id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const params = Object.assign(Object.assign({}, this.defaultParams), { uuid: id });
                return yield axios_1.default
                    .get(this.MY_DOC_BASE_URL, { params: params })
                    .then((r) => r.data)
                    .then((responseData) => {
                    return responseData.success ? responseData : [];
                });
            }))).then((results) => {
                return results.filter((result) => result.success === true);
            });
            return results;
        });
    }
    getUser(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = Object.assign(Object.assign({}, this.defaultParams), { uuid: id });
            return yield axios_1.default
                .get(this.MY_DOC_BASE_URL, { params: params })
                .then((r) => r.data)
                .then((responseData) => {
                return responseData;
            });
        });
    }
    getNews(id, sort = "asc") {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = Object.assign(Object.assign({}, this.defaultParams), { uuid: id });
            return yield axios_1.default
                .get(this.MY_DOC_BASE_URL, { params: params })
                .then((r) => r.data)
                .then((responseData) => {
                if (responseData.success) {
                    return responseData.data.DoctorNewsItems.sort((a, b) => {
                        if (sort === "asc") {
                            return (new Date(a.updated_at).valueOf() -
                                new Date(b.updated_at).valueOf());
                        }
                        else if (sort === "desc") {
                            return (new Date(b.updated_at).valueOf() -
                                new Date(a.updated_at).valueOf());
                        }
                    });
                }
                else {
                    return [];
                }
            });
        });
    }
    getMembers(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = Object.assign(Object.assign({}, this.defaultParams), { uuid: id });
            return yield axios_1.default
                .get(this.MY_DOC_BASE_URL, { params: params })
                .then((r) => r.data)
                .then((responseData) => {
                return responseData.success ? responseData.data.Employees : [];
            });
        });
    }
    getImage(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = Object.assign(Object.assign({}, this.defaultParams), { uuid: id });
            return yield axios_1.default
                .get(this.MY_DOC_BASE_URL, { params: params })
                .then((r) => r.data)
                .then((responseData) => {
                return responseData.success ? responseData.data._image : "";
            });
        });
    }
    getMultipleNews(ids, sort = "asc") {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield Promise.all(ids.map((id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const params = Object.assign(Object.assign({}, this.defaultParams), { uuid: id });
                return yield axios_1.default
                    .get(this.MY_DOC_BASE_URL, { params: params })
                    .then((r) => r.data)
                    .then((responseData) => {
                    return responseData.success
                        ? responseData.data.DoctorNewsItems
                        : [];
                });
            }))).then((results) => results
                .filter((result) => {
                return result.length > 0;
            })
                .flat(1)
                .sort((a, b) => {
                if (sort === "asc") {
                    return (new Date(a.updated_at).valueOf() -
                        new Date(b.updated_at).valueOf());
                }
                else if (sort === "desc") {
                    return (new Date(b.updated_at).valueOf() -
                        new Date(a.updated_at).valueOf());
                }
            }));
        });
    }
};
MyDocService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], MyDocService);
exports.MyDocService = MyDocService;


/***/ }),

/***/ "./apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppController = class AppController {
};
AppController = tslib_1.__decorate([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_controller_1 = __webpack_require__("./apps/api/src/app/app.controller.ts");
const my_doc_controller_1 = __webpack_require__("./apps/api/src/app/api/v1/my-doc/controller/my-doc.controller.ts");
const my_doc_service_1 = __webpack_require__("./apps/api/src/app/api/v1/my-doc/services/my-doc.service.ts");
const medication_controller_1 = __webpack_require__("./apps/api/src/app/api/v1/medication/controller/medication.controller.ts");
const medication_service_1 = __webpack_require__("./apps/api/src/app/api/v1/medication/services/medication.service.ts");
const config_1 = __webpack_require__("@nestjs/config");
const configuration_1 = __webpack_require__("./apps/api/src/app/config/configuration.ts");
const cookbook_controller_1 = __webpack_require__("./apps/api/src/app/api/v1/cookbook/controller/cookbook.controller.ts");
const cookbook_service_1 = __webpack_require__("./apps/api/src/app/api/v1/cookbook/services/cookbook.service.ts");
const v1Controllers = [
    my_doc_controller_1.MyDocController,
    medication_controller_1.MedicationController,
    cookbook_controller_1.CookbookController,
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
            }),
        ],
        controllers: [app_controller_1.AppController, ...v1Controllers],
        providers: [my_doc_service_1.MyDocService, medication_service_1.MedicationService, cookbook_service_1.CookbookService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/config/configuration.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = () => ({
    port: parseInt(process.env.PORT, 10) || 9000
});


/***/ }),

/***/ "./apps/api/src/app/config/contentful.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.contentfulLicense = void 0;
exports.contentfulLicense = {
    space: "g3p7gkgur52h",
    accessToken: "IOpNhXfXPTQcRHInfTH2gXIVKoztIUhHr8cGDpq9USw"
};


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/swagger/dist/decorators/api-implicit-query.decorator":
/***/ ((module) => {

module.exports = require("@nestjs/swagger/dist/decorators/api-implicit-query.decorator");

/***/ }),

/***/ "axios":
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "contentful":
/***/ ((module) => {

module.exports = require("contentful");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "txml":
/***/ ((module) => {

module.exports = require("txml");

/***/ }),

/***/ "fs":
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map