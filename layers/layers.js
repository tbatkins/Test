var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Amenitygrassland_1 = new ol.format.GeoJSON();
var features_Amenitygrassland_1 = format_Amenitygrassland_1.readFeatures(json_Amenitygrassland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amenitygrassland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amenitygrassland_1.addFeatures(features_Amenitygrassland_1);
var lyr_Amenitygrassland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amenitygrassland_1, 
                style: style_Amenitygrassland_1,
                popuplayertitle: 'Amenity grassland',
                interactive: true,
                title: '<img src="styles/legend/Amenitygrassland_1.png" /> Amenity grassland'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Amenitygrassland_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Amenitygrassland_1];
lyr_Amenitygrassland_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Street view': 'Street view', });
lyr_Amenitygrassland_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Street view': 'TextEdit', });
lyr_Amenitygrassland_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Street view': 'inline label - always visible', });
lyr_Amenitygrassland_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});