var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_labeled_places_20_02_0 = new ol.format.GeoJSON();
var features_labeled_places_20_02_0 = format_labeled_places_20_02_0.readFeatures(json_labeled_places_20_02_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_labeled_places_20_02_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_labeled_places_20_02_0.addFeatures(features_labeled_places_20_02_0);var lyr_labeled_places_20_02_0 = new ol.layer.Vector({
                source:jsonSource_labeled_places_20_02_0, 
                style: style_labeled_places_20_02_0,
    title: 'labeled_places_20_02<br />\
    <img src="styles/legend/labeled_places_20_02_0_0.png" /> 0<br />\
    <img src="styles/legend/labeled_places_20_02_0_1.png" /> 1<br />\
    <img src="styles/legend/labeled_places_20_02_0_2.png" /> 2<br />\
    <img src="styles/legend/labeled_places_20_02_0_3.png" /> 3<br />\
    <img src="styles/legend/labeled_places_20_02_0_4.png" /> 4<br />\
    <img src="styles/legend/labeled_places_20_02_0_5.png" /> 5<br />\
    <img src="styles/legend/labeled_places_20_02_0_6.png" /> 6<br />\
    <img src="styles/legend/labeled_places_20_02_0_7.png" /> 7<br />\
    <img src="styles/legend/labeled_places_20_02_0_8.png" /> 8<br />\
    <img src="styles/legend/labeled_places_20_02_0_9.png" /> 9<br />\
    <img src="styles/legend/labeled_places_20_02_0_10.png" /> 10<br />\
    <img src="styles/legend/labeled_places_20_02_0_11.png" /> 11<br />\
    <img src="styles/legend/labeled_places_20_02_0_12.png" /> 12<br />\
    <img src="styles/legend/labeled_places_20_02_0_13.png" /> 13<br />\
    <img src="styles/legend/labeled_places_20_02_0_14.png" /> 14<br />\
    <img src="styles/legend/labeled_places_20_02_0_15.png" /> 15<br />\
    <img src="styles/legend/labeled_places_20_02_0_16.png" /> 16<br />\
    <img src="styles/legend/labeled_places_20_02_0_17.png" /> 17<br />\
    <img src="styles/legend/labeled_places_20_02_0_18.png" /> 18<br />\
    <img src="styles/legend/labeled_places_20_02_0_19.png" /> 19<br />\
    <img src="styles/legend/labeled_places_20_02_0_20.png" /> 20<br />\
    <img src="styles/legend/labeled_places_20_02_0_21.png" /> 21<br />\
    <img src="styles/legend/labeled_places_20_02_0_22.png" /> 22<br />\
    <img src="styles/legend/labeled_places_20_02_0_23.png" /> 23<br />\
    <img src="styles/legend/labeled_places_20_02_0_24.png" /> 24<br />\
    <img src="styles/legend/labeled_places_20_02_0_25.png" /> 25<br />\
    <img src="styles/legend/labeled_places_20_02_0_26.png" /> 26<br />\
    <img src="styles/legend/labeled_places_20_02_0_27.png" /> 27<br />\
    <img src="styles/legend/labeled_places_20_02_0_28.png" /> 28<br />\
    <img src="styles/legend/labeled_places_20_02_0_29.png" /> 29<br />\
    <img src="styles/legend/labeled_places_20_02_0_30.png" /> 30<br />\
    <img src="styles/legend/labeled_places_20_02_0_31.png" /> 31<br />\
    <img src="styles/legend/labeled_places_20_02_0_32.png" /> 32<br />\
    <img src="styles/legend/labeled_places_20_02_0_33.png" /> 33<br />\
    <img src="styles/legend/labeled_places_20_02_0_34.png" /> 34<br />\
    <img src="styles/legend/labeled_places_20_02_0_35.png" /> 35<br />\
    <img src="styles/legend/labeled_places_20_02_0_36.png" /> 36<br />\
    <img src="styles/legend/labeled_places_20_02_0_37.png" /> 37<br />\
    <img src="styles/legend/labeled_places_20_02_0_38.png" /> 38<br />\
    <img src="styles/legend/labeled_places_20_02_0_39.png" /> 39<br />\
    <img src="styles/legend/labeled_places_20_02_0_40.png" /> 40<br />\
    <img src="styles/legend/labeled_places_20_02_0_41.png" /> 41<br />\
    <img src="styles/legend/labeled_places_20_02_0_42.png" /> 42<br />\
    <img src="styles/legend/labeled_places_20_02_0_43.png" /> 43<br />\
    <img src="styles/legend/labeled_places_20_02_0_44.png" /> 44<br />\
    <img src="styles/legend/labeled_places_20_02_0_45.png" /> 45<br />\
    <img src="styles/legend/labeled_places_20_02_0_46.png" /> 46<br />\
    <img src="styles/legend/labeled_places_20_02_0_47.png" /> 47<br />\
    <img src="styles/legend/labeled_places_20_02_0_48.png" /> 48<br />\
    <img src="styles/legend/labeled_places_20_02_0_49.png" /> 49<br />\
    <img src="styles/legend/labeled_places_20_02_0_50.png" /> 50<br />\
    <img src="styles/legend/labeled_places_20_02_0_51.png" /> 51<br />\
    <img src="styles/legend/labeled_places_20_02_0_52.png" /> 52<br />\
    <img src="styles/legend/labeled_places_20_02_0_53.png" /> 53<br />\
    <img src="styles/legend/labeled_places_20_02_0_54.png" /> 54<br />\
    <img src="styles/legend/labeled_places_20_02_0_55.png" /> 55<br />\
    <img src="styles/legend/labeled_places_20_02_0_56.png" /> 56<br />\
    <img src="styles/legend/labeled_places_20_02_0_57.png" /> 57<br />\
    <img src="styles/legend/labeled_places_20_02_0_58.png" /> 58<br />\
    <img src="styles/legend/labeled_places_20_02_0_59.png" /> 59<br />\
    <img src="styles/legend/labeled_places_20_02_0_60.png" /> 60<br />\
    <img src="styles/legend/labeled_places_20_02_0_61.png" /> 61<br />\
    <img src="styles/legend/labeled_places_20_02_0_62.png" /> 62<br />\
    <img src="styles/legend/labeled_places_20_02_0_63.png" /> 63<br />\
    <img src="styles/legend/labeled_places_20_02_0_64.png" /> 64<br />\
    <img src="styles/legend/labeled_places_20_02_0_65.png" /> 65<br />\
    <img src="styles/legend/labeled_places_20_02_0_66.png" /> 66<br />\
    <img src="styles/legend/labeled_places_20_02_0_67.png" /> 67<br />\
    <img src="styles/legend/labeled_places_20_02_0_68.png" /> 68<br />\
    <img src="styles/legend/labeled_places_20_02_0_69.png" /> 69<br />\
    <img src="styles/legend/labeled_places_20_02_0_70.png" /> 70<br />\
    <img src="styles/legend/labeled_places_20_02_0_71.png" /> 71<br />\
    <img src="styles/legend/labeled_places_20_02_0_72.png" /> 72<br />\
    <img src="styles/legend/labeled_places_20_02_0_73.png" /> 73<br />\
    <img src="styles/legend/labeled_places_20_02_0_74.png" /> <br />'
        });

lyr_labeled_places_20_02_0.setVisible(true);
var layersList = [baseLayer,lyr_labeled_places_20_02_0];
lyr_labeled_places_20_02_0.set('fieldAliases', {'field_1': 'field_1', 'field_1_1': 'field_1_1', 'Unnamed_ 0': 'Unnamed_ 0', 'address': 'address', 'checkins': 'checkins', 'city': 'city', 'country': 'country', 'created': 'created', 'distance': 'distance', 'group_id': 'group_id', 'group_phot': 'group_phot', 'icon': 'icon', 'latitude': 'latitude', 'longitude': 'longitude', 'pid': 'pid', 'place_id': 'place_id', 'title': 'title', 'type': 'type', 'updated': 'updated', 'settlement': 'settlement', 'street': 'street', 'building_n': 'building_n', 'geocoded': 'geocoded', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'label': 'label', });
lyr_labeled_places_20_02_0.set('fieldImages', {'field_1': 'TextEdit', 'field_1_1': 'TextEdit', 'Unnamed_ 0': 'TextEdit', 'address': 'TextEdit', 'checkins': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'created': 'TextEdit', 'distance': 'TextEdit', 'group_id': 'TextEdit', 'group_phot': 'TextEdit', 'icon': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'pid': 'TextEdit', 'place_id': 'TextEdit', 'title': 'TextEdit', 'type': 'TextEdit', 'updated': 'TextEdit', 'settlement': 'TextEdit', 'street': 'TextEdit', 'building_n': 'TextEdit', 'geocoded': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'label': 'TextEdit', });
lyr_labeled_places_20_02_0.set('fieldLabels', {'field_1': 'no label', 'field_1_1': 'no label', 'Unnamed_ 0': 'no label', 'address': 'no label', 'checkins': 'no label', 'city': 'no label', 'country': 'no label', 'created': 'no label', 'distance': 'no label', 'group_id': 'no label', 'group_phot': 'no label', 'icon': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'pid': 'no label', 'place_id': 'no label', 'title': 'no label', 'type': 'no label', 'updated': 'no label', 'settlement': 'no label', 'street': 'no label', 'building_n': 'no label', 'geocoded': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'label': 'no label', });
lyr_labeled_places_20_02_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_labeled_places_20_02_0.on("postcompose", update);

    var listenerKey = lyr_labeled_places_20_02_0.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });