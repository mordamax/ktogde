(function(){
    'use strict';

    angular.module("ktogde.map", ['ktogde.api'])

    .directive("kgMap", ["$timeout", function($timeout){
        return {
            restrict: "E",
            scope: {
                opt: "=options"
            },
            templateUrl: "/partials/map",
            link: function(scope, element, attr){
                var settings = {
                    mapContainer: '#kgmap',
                    zoom: 12,
                    center: {
                        lat: 50.9151558824997,
                        lng: 34.810523986816406
                    }
                }

                scope.$watch("opt", function(options){
                    angular.extend(settings, options);
                    init();
                })

                function init(){

                    window.kgmap = L.map($(settings.mapContainer)[0], {
                        center: new L.LatLng( settings.center.lat, settings.center.lng ),
                        zoom: settings.zoom,
                        layers: [
                            L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpeg',
                            {
                                subdomains: '1234',
                                detectRetina: true
                            })
                        ]
                    });

                    bindEvents();
                }

                function bindEvents(){
                    $(window).on('resize', function(){
                        var header_h = $('body>header>.navbar').height();
                        console.log(header_h);
                        var $map = $(settings.mapContainer);

                        $map.height( $(window).height() - header_h );
                        console.log($map.height());
                        $timeout(function(){
                            window.kgmap.invalidateSize(true);
                        }, 300);
                    })

                    $(window).resize();

                }

            }
        }
    }])
})(this)