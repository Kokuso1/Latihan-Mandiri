ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([106.573314, -7.491450, 107.707501, -6.754668]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RumahSakitKabupatenCianjur1_1 = new ol.format.GeoJSON();
var features_RumahSakitKabupatenCianjur1_1 = format_RumahSakitKabupatenCianjur1_1.readFeatures(json_RumahSakitKabupatenCianjur1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RumahSakitKabupatenCianjur1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakitKabupatenCianjur1_1.addFeatures(features_RumahSakitKabupatenCianjur1_1);
var lyr_RumahSakitKabupatenCianjur1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakitKabupatenCianjur1_1, 
                style: style_RumahSakitKabupatenCianjur1_1,
                popuplayertitle: 'Rumah Sakit Kabupaten Cianjur 1',
                interactive: true,
    title: 'Rumah Sakit Kabupaten Cianjur 1<br />\
    <img src="styles/legend/RumahSakitKabupatenCianjur1_1_0.png" /> RS Bhayangkara Cianjur<br />\
    <img src="styles/legend/RumahSakitKabupatenCianjur1_1_1.png" /> RS Edelweiss Bentang Salapan<br />\
    <img src="styles/legend/RumahSakitKabupatenCianjur1_1_2.png" /> RSUD Pagelaran Cianjur<br />\
    <img src="styles/legend/RumahSakitKabupatenCianjur1_1_3.png" /> RSUD Sayang Cianjur<br />\
    <img src="styles/legend/RumahSakitKabupatenCianjur1_1_4.png" /> RSUD Sindangbarang<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_RumahSakitKabupatenCianjur1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RumahSakitKabupatenCianjur1_1];
lyr_RumahSakitKabupatenCianjur1_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X-coord': 'X-coord', 'Y-coord': 'Y-coord', 'Deskripsi': 'Deskripsi', 'Gambar_URL': 'Gambar_URL', });
lyr_RumahSakitKabupatenCianjur1_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X-coord': 'TextEdit', 'Y-coord': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar_URL': 'TextEdit', });
lyr_RumahSakitKabupatenCianjur1_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'header label - always visible', 'X-coord': 'inline label - visible with data', 'Y-coord': 'inline label - visible with data', 'Deskripsi': 'header label - always visible', 'Gambar_URL': 'inline label - visible with data', });
lyr_RumahSakitKabupatenCianjur1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});