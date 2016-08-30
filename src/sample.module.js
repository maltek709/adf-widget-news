/*
 * The MIT License
 *
 * Copyright (c) 2015, Sebastian Sdorra
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

angular
 .module('adfWidgetSample', ['adf', 'adf.widget.news', 'LocalStorageModule'])
 .config(function(dashboardProvider, localStorageServiceProvider){
   localStorageServiceProvider.setPrefix('adf.news');
   dashboardProvider.structure('4-8', {
      rows: [{
        columns: [{
          styleClass: 'col-md-4',
          widgets: []
        }, {
          styleClass: 'col-md-8',
          widgets: []
        }]
      }]
    })
 }).controller('dashboardController', function($scope, localStorageService){
   var model = localStorageService.get('widgetSampleDashboard');
   if (!model){
     model = {
      rows: [{
        columns: [{
          styleClass: 'col-md-4',
          widgets: []
        }, {
          styleClass: 'col-md-8',
          widgets: [{
            type: 'news',
            title: 'News',
            config: {}
          }]
        }]
      }]
    };
   }
   $scope.dashboard = {
     model: model
   };
   $scope.$on('adfDashboardChanged', function (event, name, model) {
     localStorageService.set(name, model);
   });
 });
