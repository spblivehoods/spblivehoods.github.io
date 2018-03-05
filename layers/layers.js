var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
})
]
});
var format_ArtsEntertainment_0 = new ol.format.GeoJSON();
var features_ArtsEntertainment_0 = format_ArtsEntertainment_0.readFeatures(json_ArtsEntertainment_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArtsEntertainment_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ArtsEntertainment_0.addFeatures(features_ArtsEntertainment_0);var lyr_ArtsEntertainment_0 = new ol.layer.Vector({
                source:jsonSource_ArtsEntertainment_0, 
                style: style_ArtsEntertainment_0,
    title: 'Arts&Entertainment<br />\
    <img src="styles/legend/ArtsEntertainment_0_0.png" /> 1<br />\
    <img src="styles/legend/ArtsEntertainment_0_1.png" />  26.2000 - 50.4000 <br />\
    <img src="styles/legend/ArtsEntertainment_0_2.png" />  50.4000 - 74.6000 <br />\
    <img src="styles/legend/ArtsEntertainment_0_3.png" />  74.6000 - 98.8000 <br />\
    <img src="styles/legend/ArtsEntertainment_0_4.png" />  98.8000 - 123.0000 <br />'
        });var format_Food_1 = new ol.format.GeoJSON();
var features_Food_1 = format_Food_1.readFeatures(json_Food_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Food_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Food_1.addFeatures(features_Food_1);var lyr_Food_1 = new ol.layer.Vector({
                source:jsonSource_Food_1, 
                style: style_Food_1,
    title: 'Food<br />\
    <img src="styles/legend/Food_1_0.png" />  1.0000 - 58.6000 <br />\
    <img src="styles/legend/Food_1_1.png" />  58.6000 - 116.2000 <br />\
    <img src="styles/legend/Food_1_2.png" />  116.2000 - 173.8000 <br />\
    <img src="styles/legend/Food_1_3.png" />  173.8000 - 231.4000 <br />\
    <img src="styles/legend/Food_1_4.png" />  231.4000 - 289.0000 <br />'
        });var format_Nightlife_2 = new ol.format.GeoJSON();
var features_Nightlife_2 = format_Nightlife_2.readFeatures(json_Nightlife_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nightlife_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nightlife_2.addFeatures(features_Nightlife_2);var lyr_Nightlife_2 = new ol.layer.Vector({
                source:jsonSource_Nightlife_2, 
                style: style_Nightlife_2,
    title: 'Nightlife<br />\
    <img src="styles/legend/Nightlife_2_0.png" />  3.0000 - 14.6000 <br />\
    <img src="styles/legend/Nightlife_2_1.png" />  14.6000 - 26.2000 <br />\
    <img src="styles/legend/Nightlife_2_2.png" />  26.2000 - 37.8000 <br />\
    <img src="styles/legend/Nightlife_2_3.png" />  37.8000 - 49.4000 <br />\
    <img src="styles/legend/Nightlife_2_4.png" />  49.4000 - 61.0000 <br />'
        });var format_Education_3 = new ol.format.GeoJSON();
var features_Education_3 = format_Education_3.readFeatures(json_Education_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Education_3.addFeatures(features_Education_3);var lyr_Education_3 = new ol.layer.Vector({
                source:jsonSource_Education_3, 
                style: style_Education_3,
    title: 'Education<br />\
    <img src="styles/legend/Education_3_0.png" />  1 - 38 <br />\
    <img src="styles/legend/Education_3_1.png" />  38 - 75 <br />\
    <img src="styles/legend/Education_3_2.png" />  75 - 112 <br />\
    <img src="styles/legend/Education_3_3.png" />  112 - 149 <br />\
    <img src="styles/legend/Education_3_4.png" />  149 - 186 <br />\
    <img src="styles/legend/Education_3_5.png" />  186 - 222 <br />\
    <img src="styles/legend/Education_3_6.png" />  222 - 259 <br />\
    <img src="styles/legend/Education_3_7.png" />  259 - 296 <br />\
    <img src="styles/legend/Education_3_8.png" />  296 - 333 <br />\
    <img src="styles/legend/Education_3_9.png" />  333 - 370 <br />'
        });var format_Office_4 = new ol.format.GeoJSON();
var features_Office_4 = format_Office_4.readFeatures(json_Office_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Office_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Office_4.addFeatures(features_Office_4);var lyr_Office_4 = new ol.layer.Vector({
                source:jsonSource_Office_4, 
                style: style_Office_4,
    title: 'Office<br />\
    <img src="styles/legend/Office_4_0.png" />  18 - 128 <br />\
    <img src="styles/legend/Office_4_1.png" />  128 - 238 <br />\
    <img src="styles/legend/Office_4_2.png" />  238 - 348 <br />\
    <img src="styles/legend/Office_4_3.png" />  348 - 458 <br />\
    <img src="styles/legend/Office_4_4.png" />  458 - 568 <br />\
    <img src="styles/legend/Office_4_5.png" />  568 - 679 <br />\
    <img src="styles/legend/Office_4_6.png" />  679 - 789 <br />\
    <img src="styles/legend/Office_4_7.png" />  789 - 899 <br />\
    <img src="styles/legend/Office_4_8.png" />  899 - 1009 <br />\
    <img src="styles/legend/Office_4_9.png" />  1009 - 1119 <br />'
        });var format_Recriation_5 = new ol.format.GeoJSON();
var features_Recriation_5 = format_Recriation_5.readFeatures(json_Recriation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recriation_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Recriation_5.addFeatures(features_Recriation_5);var lyr_Recriation_5 = new ol.layer.Vector({
                source:jsonSource_Recriation_5, 
                style: style_Recriation_5,
    title: 'Recriation<br />\
    <img src="styles/legend/Recriation_5_0.png" />  7.0000 - 67.8000 <br />\
    <img src="styles/legend/Recriation_5_1.png" />  67.8000 - 128.6000 <br />\
    <img src="styles/legend/Recriation_5_2.png" />  128.6000 - 189.4000 <br />\
    <img src="styles/legend/Recriation_5_3.png" />  189.4000 - 250.2000 <br />\
    <img src="styles/legend/Recriation_5_4.png" />  250.2000 - 311.0000 <br />'
        });var format_Shops_6 = new ol.format.GeoJSON();
var features_Shops_6 = format_Shops_6.readFeatures(json_Shops_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shops_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Shops_6.addFeatures(features_Shops_6);var lyr_Shops_6 = new ol.layer.Vector({
                source:jsonSource_Shops_6, 
                style: style_Shops_6,
    title: 'Shops<br />\
    <img src="styles/legend/Shops_6_0.png" />  6 - 148 <br />\
    <img src="styles/legend/Shops_6_1.png" />  148 - 290 <br />\
    <img src="styles/legend/Shops_6_2.png" />  290 - 432 <br />\
    <img src="styles/legend/Shops_6_3.png" />  432 - 574 <br />\
    <img src="styles/legend/Shops_6_4.png" />  574 - 716 <br />\
    <img src="styles/legend/Shops_6_5.png" />  716 - 858 <br />\
    <img src="styles/legend/Shops_6_6.png" />  858 - 1000 <br />\
    <img src="styles/legend/Shops_6_7.png" />  1000 - 1142 <br />\
    <img src="styles/legend/Shops_6_8.png" />  1142 - 1284 <br />\
    <img src="styles/legend/Shops_6_9.png" />  1284 - 1426 <br />'
        });var format_Travel_7 = new ol.format.GeoJSON();
var features_Travel_7 = format_Travel_7.readFeatures(json_Travel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Travel_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Travel_7.addFeatures(features_Travel_7);var lyr_Travel_7 = new ol.layer.Vector({
                source:jsonSource_Travel_7, 
                style: style_Travel_7,
    title: 'Travel<br />\
    <img src="styles/legend/Travel_7_0.png" />  4.0000 - 37.0000 <br />\
    <img src="styles/legend/Travel_7_1.png" />  37.0000 - 70.0000 <br />\
    <img src="styles/legend/Travel_7_2.png" />  70.0000 - 103.0000 <br />\
    <img src="styles/legend/Travel_7_3.png" />  103.0000 - 136.0000 <br />\
    <img src="styles/legend/Travel_7_4.png" />  136.0000 - 169.0000 <br />'
        });var format_livehoods_8 = new ol.format.GeoJSON();
var features_livehoods_8 = format_livehoods_8.readFeatures(json_livehoods_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_livehoods_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_livehoods_8.addFeatures(features_livehoods_8);var lyr_livehoods_8 = new ol.layer.Vector({
                source:jsonSource_livehoods_8, 
                style: style_livehoods_8,
    title: 'livehoods<br />\
    <img src="styles/legend/livehoods_8_0.png" /> 0<br />\
    <img src="styles/legend/livehoods_8_1.png" /> 1<br />\
    <img src="styles/legend/livehoods_8_2.png" /> 2<br />\
    <img src="styles/legend/livehoods_8_3.png" /> 3<br />\
    <img src="styles/legend/livehoods_8_4.png" /> 4<br />\
    <img src="styles/legend/livehoods_8_5.png" /> 5<br />\
    <img src="styles/legend/livehoods_8_6.png" /> 6<br />\
    <img src="styles/legend/livehoods_8_7.png" /> 7<br />\
    <img src="styles/legend/livehoods_8_8.png" /> 8<br />\
    <img src="styles/legend/livehoods_8_9.png" /> 9<br />\
    <img src="styles/legend/livehoods_8_10.png" /> 10<br />\
    <img src="styles/legend/livehoods_8_11.png" /> 11<br />\
    <img src="styles/legend/livehoods_8_12.png" /> 12<br />\
    <img src="styles/legend/livehoods_8_13.png" /> 13<br />\
    <img src="styles/legend/livehoods_8_14.png" /> 14<br />\
    <img src="styles/legend/livehoods_8_15.png" /> 15<br />\
    <img src="styles/legend/livehoods_8_16.png" /> 16<br />\
    <img src="styles/legend/livehoods_8_17.png" /> 17<br />\
    <img src="styles/legend/livehoods_8_18.png" /> 18<br />\
    <img src="styles/legend/livehoods_8_19.png" /> 19<br />\
    <img src="styles/legend/livehoods_8_20.png" /> 20<br />\
    <img src="styles/legend/livehoods_8_21.png" /> 21<br />\
    <img src="styles/legend/livehoods_8_22.png" /> 22<br />\
    <img src="styles/legend/livehoods_8_23.png" /> 23<br />\
    <img src="styles/legend/livehoods_8_24.png" /> 24<br />\
    <img src="styles/legend/livehoods_8_25.png" /> 25<br />\
    <img src="styles/legend/livehoods_8_26.png" /> 26<br />\
    <img src="styles/legend/livehoods_8_27.png" /> 27<br />\
    <img src="styles/legend/livehoods_8_28.png" /> 28<br />\
    <img src="styles/legend/livehoods_8_29.png" /> 29<br />\
    <img src="styles/legend/livehoods_8_30.png" /> 30<br />\
    <img src="styles/legend/livehoods_8_31.png" /> 31<br />\
    <img src="styles/legend/livehoods_8_32.png" /> 32<br />\
    <img src="styles/legend/livehoods_8_33.png" /> 33<br />\
    <img src="styles/legend/livehoods_8_34.png" /> 34<br />\
    <img src="styles/legend/livehoods_8_35.png" /> 35<br />\
    <img src="styles/legend/livehoods_8_36.png" /> 36<br />\
    <img src="styles/legend/livehoods_8_37.png" /> 37<br />\
    <img src="styles/legend/livehoods_8_38.png" /> 38<br />\
    <img src="styles/legend/livehoods_8_39.png" /> 39<br />\
    <img src="styles/legend/livehoods_8_40.png" /> 40<br />\
    <img src="styles/legend/livehoods_8_41.png" /> 41<br />\
    <img src="styles/legend/livehoods_8_42.png" /> 42<br />\
    <img src="styles/legend/livehoods_8_43.png" /> 43<br />\
    <img src="styles/legend/livehoods_8_44.png" /> 44<br />\
    <img src="styles/legend/livehoods_8_45.png" /> 45<br />\
    <img src="styles/legend/livehoods_8_46.png" /> 46<br />\
    <img src="styles/legend/livehoods_8_47.png" /> 47<br />\
    <img src="styles/legend/livehoods_8_48.png" /> 48<br />\
    <img src="styles/legend/livehoods_8_49.png" /> 49<br />\
    <img src="styles/legend/livehoods_8_50.png" /> 50<br />\
    <img src="styles/legend/livehoods_8_51.png" /> 51<br />\
    <img src="styles/legend/livehoods_8_52.png" /> 52<br />\
    <img src="styles/legend/livehoods_8_53.png" /> 53<br />\
    <img src="styles/legend/livehoods_8_54.png" /> 54<br />\
    <img src="styles/legend/livehoods_8_55.png" /> 55<br />\
    <img src="styles/legend/livehoods_8_56.png" /> 56<br />\
    <img src="styles/legend/livehoods_8_57.png" /> 57<br />\
    <img src="styles/legend/livehoods_8_58.png" /> 58<br />\
    <img src="styles/legend/livehoods_8_59.png" /> 59<br />\
    <img src="styles/legend/livehoods_8_60.png" /> 60<br />\
    <img src="styles/legend/livehoods_8_61.png" /> 61<br />\
    <img src="styles/legend/livehoods_8_62.png" /> 62<br />\
    <img src="styles/legend/livehoods_8_63.png" /> 63<br />\
    <img src="styles/legend/livehoods_8_64.png" /> 64<br />\
    <img src="styles/legend/livehoods_8_65.png" /> 65<br />\
    <img src="styles/legend/livehoods_8_66.png" /> 66<br />\
    <img src="styles/legend/livehoods_8_67.png" /> 67<br />\
    <img src="styles/legend/livehoods_8_68.png" /> 68<br />\
    <img src="styles/legend/livehoods_8_69.png" /> <br />'
        });var format_vk_livehoods_venues_9 = new ol.format.GeoJSON();
var features_vk_livehoods_venues_9 = format_vk_livehoods_venues_9.readFeatures(json_vk_livehoods_venues_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vk_livehoods_venues_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_vk_livehoods_venues_9.addFeatures(features_vk_livehoods_venues_9);var lyr_vk_livehoods_venues_9 = new ol.layer.Vector({
                source:jsonSource_vk_livehoods_venues_9, 
                style: style_vk_livehoods_venues_9,
    title: 'vk_livehoods_venues<br />\
    <img src="styles/legend/vk_livehoods_venues_9_0.png" /> 0<br />\
    <img src="styles/legend/vk_livehoods_venues_9_1.png" /> 1<br />\
    <img src="styles/legend/vk_livehoods_venues_9_2.png" /> 3<br />\
    <img src="styles/legend/vk_livehoods_venues_9_3.png" /> 4<br />\
    <img src="styles/legend/vk_livehoods_venues_9_4.png" /> 5<br />\
    <img src="styles/legend/vk_livehoods_venues_9_5.png" /> 6<br />\
    <img src="styles/legend/vk_livehoods_venues_9_6.png" /> 7<br />\
    <img src="styles/legend/vk_livehoods_venues_9_7.png" /> 8<br />\
    <img src="styles/legend/vk_livehoods_venues_9_8.png" /> 9<br />\
    <img src="styles/legend/vk_livehoods_venues_9_9.png" /> 10<br />\
    <img src="styles/legend/vk_livehoods_venues_9_10.png" /> 11<br />\
    <img src="styles/legend/vk_livehoods_venues_9_11.png" /> 12<br />\
    <img src="styles/legend/vk_livehoods_venues_9_12.png" /> 13<br />\
    <img src="styles/legend/vk_livehoods_venues_9_13.png" /> 14<br />\
    <img src="styles/legend/vk_livehoods_venues_9_14.png" /> 15<br />\
    <img src="styles/legend/vk_livehoods_venues_9_15.png" /> 16<br />\
    <img src="styles/legend/vk_livehoods_venues_9_16.png" /> 17<br />\
    <img src="styles/legend/vk_livehoods_venues_9_17.png" /> 18<br />\
    <img src="styles/legend/vk_livehoods_venues_9_18.png" /> 19<br />\
    <img src="styles/legend/vk_livehoods_venues_9_19.png" /> 20<br />\
    <img src="styles/legend/vk_livehoods_venues_9_20.png" /> 21<br />\
    <img src="styles/legend/vk_livehoods_venues_9_21.png" /> 22<br />\
    <img src="styles/legend/vk_livehoods_venues_9_22.png" /> 23<br />\
    <img src="styles/legend/vk_livehoods_venues_9_23.png" /> 24<br />\
    <img src="styles/legend/vk_livehoods_venues_9_24.png" /> 25<br />\
    <img src="styles/legend/vk_livehoods_venues_9_25.png" /> 26<br />\
    <img src="styles/legend/vk_livehoods_venues_9_26.png" /> 27<br />\
    <img src="styles/legend/vk_livehoods_venues_9_27.png" /> 28<br />\
    <img src="styles/legend/vk_livehoods_venues_9_28.png" /> 29<br />\
    <img src="styles/legend/vk_livehoods_venues_9_29.png" /> 30<br />\
    <img src="styles/legend/vk_livehoods_venues_9_30.png" /> 31<br />\
    <img src="styles/legend/vk_livehoods_venues_9_31.png" /> 32<br />\
    <img src="styles/legend/vk_livehoods_venues_9_32.png" /> 33<br />\
    <img src="styles/legend/vk_livehoods_venues_9_33.png" /> 34<br />\
    <img src="styles/legend/vk_livehoods_venues_9_34.png" /> 35<br />\
    <img src="styles/legend/vk_livehoods_venues_9_35.png" /> 36<br />\
    <img src="styles/legend/vk_livehoods_venues_9_36.png" /> 37<br />\
    <img src="styles/legend/vk_livehoods_venues_9_37.png" /> 38<br />\
    <img src="styles/legend/vk_livehoods_venues_9_38.png" /> 39<br />\
    <img src="styles/legend/vk_livehoods_venues_9_39.png" /> 40<br />\
    <img src="styles/legend/vk_livehoods_venues_9_40.png" /> 41<br />\
    <img src="styles/legend/vk_livehoods_venues_9_41.png" /> 42<br />\
    <img src="styles/legend/vk_livehoods_venues_9_42.png" /> 43<br />\
    <img src="styles/legend/vk_livehoods_venues_9_43.png" /> 44<br />\
    <img src="styles/legend/vk_livehoods_venues_9_44.png" /> 45<br />\
    <img src="styles/legend/vk_livehoods_venues_9_45.png" /> 46<br />\
    <img src="styles/legend/vk_livehoods_venues_9_46.png" /> 47<br />\
    <img src="styles/legend/vk_livehoods_venues_9_47.png" /> 48<br />\
    <img src="styles/legend/vk_livehoods_venues_9_48.png" /> 49<br />\
    <img src="styles/legend/vk_livehoods_venues_9_49.png" /> 50<br />\
    <img src="styles/legend/vk_livehoods_venues_9_50.png" /> 51<br />\
    <img src="styles/legend/vk_livehoods_venues_9_51.png" /> 52<br />\
    <img src="styles/legend/vk_livehoods_venues_9_52.png" /> 53<br />\
    <img src="styles/legend/vk_livehoods_venues_9_53.png" /> 54<br />\
    <img src="styles/legend/vk_livehoods_venues_9_54.png" /> 55<br />\
    <img src="styles/legend/vk_livehoods_venues_9_55.png" /> 56<br />\
    <img src="styles/legend/vk_livehoods_venues_9_56.png" /> 57<br />\
    <img src="styles/legend/vk_livehoods_venues_9_57.png" /> 58<br />\
    <img src="styles/legend/vk_livehoods_venues_9_58.png" /> 59<br />\
    <img src="styles/legend/vk_livehoods_venues_9_59.png" /> 60<br />\
    <img src="styles/legend/vk_livehoods_venues_9_60.png" /> 61<br />\
    <img src="styles/legend/vk_livehoods_venues_9_61.png" /> 62<br />\
    <img src="styles/legend/vk_livehoods_venues_9_62.png" /> 63<br />\
    <img src="styles/legend/vk_livehoods_venues_9_63.png" /> 64<br />\
    <img src="styles/legend/vk_livehoods_venues_9_64.png" /> 65<br />\
    <img src="styles/legend/vk_livehoods_venues_9_65.png" /> 66<br />\
    <img src="styles/legend/vk_livehoods_venues_9_66.png" /> 67<br />\
    <img src="styles/legend/vk_livehoods_venues_9_67.png" /> 68<br />\
    <img src="styles/legend/vk_livehoods_venues_9_68.png" /> 69<br />\
    <img src="styles/legend/vk_livehoods_venues_9_69.png" /> <br />'
        });

lyr_ArtsEntertainment_0.setVisible(false);lyr_Food_1.setVisible(false);lyr_Nightlife_2.setVisible(false);lyr_Education_3.setVisible(false);lyr_Office_4.setVisible(false);lyr_Recriation_5.setVisible(false);lyr_Shops_6.setVisible(false);lyr_Travel_7.setVisible(false);lyr_livehoods_8.setVisible(true);lyr_vk_livehoods_venues_9.setVisible(false);
var layersList = [baseLayer,lyr_ArtsEntertainment_0,lyr_Food_1,lyr_Nightlife_2,lyr_Education_3,lyr_Office_4,lyr_Recriation_5,lyr_Shops_6,lyr_Travel_7,lyr_livehoods_8,lyr_vk_livehoods_venues_9];
lyr_ArtsEntertainment_0.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_Food_1.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_Nightlife_2.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_Education_3.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_Office_4.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_Recriation_5.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_Shops_6.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_Travel_7.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_livehoods_8.set('fieldAliases', {'id': 'id', 'area': 'area', 'perim': 'perim', 'Arts & Entertainment': 'Arts & Entertainment', 'College & University': 'College & University', 'Food': 'Food', 'Nightlife Spot': 'Nightlife Spot', 'Outdoors & Recreation': 'Outdoors & Recreation', 'Professional & Other Places': 'Professional & Other Places', 'Residence': 'Residence', 'Shop & Service': 'Shop & Service', 'Travel & Transport': 'Travel & Transport', });
lyr_vk_livehoods_venues_9.set('fieldAliases', {'address': 'address', 'checkins': 'checkins', 'title': 'title', 'geocoded': 'geocoded', 'new_labels': 'new_labels', });
lyr_ArtsEntertainment_0.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_Food_1.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_Nightlife_2.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_Education_3.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_Office_4.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_Recriation_5.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_Shops_6.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_Travel_7.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_livehoods_8.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perim': 'TextEdit', 'Arts & Entertainment': 'TextEdit', 'College & University': 'TextEdit', 'Food': 'TextEdit', 'Nightlife Spot': 'TextEdit', 'Outdoors & Recreation': 'TextEdit', 'Professional & Other Places': 'TextEdit', 'Residence': 'TextEdit', 'Shop & Service': 'TextEdit', 'Travel & Transport': 'TextEdit', });
lyr_vk_livehoods_venues_9.set('fieldImages', {'address': 'TextEdit', 'checkins': 'TextEdit', 'title': 'TextEdit', 'geocoded': 'TextEdit', 'new_labels': 'TextEdit', });
lyr_ArtsEntertainment_0.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_Food_1.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_Nightlife_2.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_Education_3.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_Office_4.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_Recriation_5.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_Shops_6.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_Travel_7.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_livehoods_8.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perim': 'no label', 'Arts & Entertainment': 'no label', 'College & University': 'no label', 'Food': 'no label', 'Nightlife Spot': 'no label', 'Outdoors & Recreation': 'no label', 'Professional & Other Places': 'no label', 'Residence': 'no label', 'Shop & Service': 'no label', 'Travel & Transport': 'no label', });
lyr_vk_livehoods_venues_9.set('fieldLabels', {'address': 'no label', 'checkins': 'no label', 'title': 'no label', 'geocoded': 'no label', 'new_labels': 'no label', });
lyr_vk_livehoods_venues_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_vk_livehoods_venues_9.on("postcompose", update);

    var listenerKey = lyr_vk_livehoods_venues_9.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });