/**
 * Created by egragus on 12/22/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CountriesService;
    return {
        setters:[],
        execute: function() {
            CountriesService = (function () {
                function CountriesService() {
                }
                CountriesService.prototype.getCountries = function () {
                    return ["Sweden", "Danmark", "USA"];
                };
                return CountriesService;
            }());
            exports_1("CountriesService", CountriesService);
        }
    }
});
//# sourceMappingURL=countries.service.js.map