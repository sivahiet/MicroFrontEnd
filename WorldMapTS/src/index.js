"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
const ej2_maps_1 = require("@syncfusion/ej2-maps");
ej2_maps_1.Maps.Inject(ej2_maps_1.Legend, ej2_maps_1.Marker, ej2_maps_1.MapsTooltip, ej2_maps_1.Zoom);
const worldmap_1 = require("./worldmap");
const mount = (el) => {
    let maps = new ej2_maps_1.Maps({
        titleSettings: {
            text: 'Server locations',
            textStyle: {
                size: '16px',
                fontFamily: 'Segoe UI'
            }
        },
        zoomSettings: {
            enable: true
        },
        legendSettings: {
            visible: true,
            textStyle: {
                fontFamily: 'Segoe UI'
            }
        },
        layers: [
            {
                shapeData: worldmap_1.world_map,
                shapePropertyPath: 'continent',
                shapeDataPath: 'continent',
                dataSource: [{
                        "drillColor": "#C13664",
                        "continent": "North America",
                        "CategoryName": "Books",
                        "Sales": 10882,
                        "color": "#71B081"
                    },
                    {
                        "drillColor": "#9C3367",
                        "continent": "South America",
                        "CategoryName": "Books",
                        "Sales": 13776,
                        "color": "#5A9A77"
                    },
                    {
                        "drillColor": "#80306A",
                        "continent": "Africa",
                        "CategoryName": "Books",
                        "Sales": 18718.0,
                        "color": "#498770"
                    },
                    {
                        "drillColor": "#622D6C",
                        "continent": "Europe",
                        "CategoryName": "Books",
                        "Sales": 3746,
                        "color": "#39776C"
                    },
                    {
                        "drillColor": "#462A6D",
                        "continent": "Asia",
                        "CategoryName": "Books",
                        "Sales": 10688,
                        "color": "#266665"
                    },
                    {
                        "drillColor": "#2A2870",
                        "continent": "Australia",
                        "CategoryName": "Books",
                        "Sales": 30716,
                        "color": "#124F5E"
                    }
                ],
                shapeSettings: {
                    colorValuePath: 'color',
                },
                markerSettings: [
                    {
                        visible: true,
                        dataSource: [
                            { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno' },
                            { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel' },
                            { latitude: 40.7424509, longitude: -74.0081468, name: 'New York' },
                            { latitude: -23.5268201, longitude: -46.6489927, name: 'Bom Retiro' },
                            { latitude: 43.6533855, longitude: -79.3729994, name: 'Toronto' },
                            { latitude: 48.8773406, longitude: 2.3299627, name: 'Paris' },
                            { latitude: 52.4643089, longitude: 13.4107368, name: 'Berlin' },
                            { latitude: 19.1555762, longitude: 72.8849595, name: 'Mumbai' },
                            { latitude: 35.6628744, longitude: 139.7345469, name: 'Minato' },
                            { latitude: 51.5326602, longitude: -0.1262422, name: 'London' }
                        ],
                        shape: 'Image',
                        imageUrl: '//ej2.syncfusion.com/demos/src/maps/images/ballon.png',
                        height: 20,
                        width: 20,
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'name',
                            textStyle: {
                                fontFamily: 'Segoe UI'
                            }
                        },
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker1" class="markerTemplate">Asia' +
                            '</div>',
                        dataSource: [
                            { latitude: 50.32087157990324, longitude: 90.015625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker2" class="markerTemplate">Australia' +
                            '</div>',
                        dataSource: [
                            { latitude: -25.88583769986199, longitude: 134.296875 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker3" class="markerTemplate">Africa' +
                            '</div>',
                        dataSource: [
                            { latitude: 16.97274101999902, longitude: 16.390625 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker4" class="markerTemplate">Europe' +
                            '</div>',
                        dataSource: [
                            { latitude: 49.95121990866204, longitude: 18.468749999999998 }
                        ],
                        animationDuration: 0,
                    },
                    {
                        visible: true,
                        template: '<div id="marker5" class="markerTemplate" style="width:50px">North America' +
                            '</div>',
                        dataSource: [
                            { latitude: 59.88893689676585, longitude: -109.3359375 }
                        ],
                        animationDuration: 0
                    },
                    {
                        visible: true,
                        template: '<div id="marker6" class="markerTemplate" style="width:50px">South America' +
                            '</div>',
                        dataSource: [
                            { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                        ],
                        animationDuration: 0
                    },
                ]
            },
        ],
    });
    maps.appendTo(el);
};
exports.mount = mount;
if (process.env.NODE_ENV === "development") {
    const ele = document.getElementById("container");
    if (ele) {
        mount(ele);
    }
}
