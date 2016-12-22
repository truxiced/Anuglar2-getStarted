System.register(['angular2/core', 'app/components/list/list.component', 'app/services/countries.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, list_component_1, countries_service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (countries_service_1_1) {
                countries_service_1 = countries_service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(countriesService) {
                    this.title = "This is a title";
                    //Sets value to list.
                    this.items = countriesService.getCountries();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h1>Courses</h1>\n            {{ title }}\n        <br />\n        <list\n        [items] = items\n        ></list>",
                        directives: [list_component_1.ListComponent],
                        providers: [countries_service_1.CountriesService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof countries_service_1.CountriesService !== 'undefined' && countries_service_1.CountriesService) === 'function' && _a) || Object])
                ], CoursesComponent);
                return CoursesComponent;
                var _a;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map