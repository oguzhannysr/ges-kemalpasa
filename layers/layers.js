var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GneEnerjiSantralleri_1 = new ol.format.GeoJSON();
var features_GneEnerjiSantralleri_1 = format_GneEnerjiSantralleri_1.readFeatures(json_GneEnerjiSantralleri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GneEnerjiSantralleri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GneEnerjiSantralleri_1.addFeatures(features_GneEnerjiSantralleri_1);cluster_GneEnerjiSantralleri_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GneEnerjiSantralleri_1
});
var lyr_GneEnerjiSantralleri_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GneEnerjiSantralleri_1, 
                style: style_GneEnerjiSantralleri_1,
                popuplayertitle: "Güneş Enerji Santralleri",
                interactive: true,
                title: '<img src="styles/legend/GneEnerjiSantralleri_1.png" /> Güneş Enerji Santralleri'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GneEnerjiSantralleri_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GneEnerjiSantralleri_1];
lyr_GneEnerjiSantralleri_1.set('fieldAliases', {'layer': 'layer', 'path': 'path', });
lyr_GneEnerjiSantralleri_1.set('fieldImages', {'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_GneEnerjiSantralleri_1.set('fieldLabels', {'layer': 'no label', 'path': 'no label', });
lyr_GneEnerjiSantralleri_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});