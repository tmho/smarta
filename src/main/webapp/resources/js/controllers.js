'use strict';

var smartaApp = angular.module('smartaApp', []);

smartaApp.controller('companiesListController', [ "$scope", "$http", "state", function ($scope, $http, state) {
    $scope.state = state;

    $http.get('/companies/getAll').success(function (data) {
        state.companies = data;
    });

    $scope.findManagers = function (companyId) {
        $http.get('/managers/getManagersForCompany?companyId=' + companyId).success(function (data) {
            state.managers = data;
        });
    }
}]);

smartaApp.controller('addCompanyModalController', [ "$scope", "$http", "state", function ($scope, $http, state) {
    $scope.createCompany = function () {
        $http.post('/companies/create', { name: "david2" }).success(function (data) {
            state.companies = data;
        });
    }
}]);

smartaApp.controller('addManagerModalController', [ "$scope", "$http", "state", function ($scope, $http, state) {
    $scope.createCompany = function () {
        $http.post('/managers/create', { firstname: "tmho" }).success(function (data) {
            state.companies = data;
        });
    }
}]);

smartaApp.factory('state', [
    function () {
        return {
            companies: [],
            managers: []
        };
    }
]);