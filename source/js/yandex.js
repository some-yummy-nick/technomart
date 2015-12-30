var myMap;

function init(ymaps) {

    myMap = new ymaps.Map('myMap', {

        center: [55.686979777460984, 37.52965449999998],
        zoom: 15
    });


    var myPlacemark = new ymaps.Placemark([55.686979777460984, 37.52965449999998], {
        hintContent: 'ул.Строителей, 15'
    }, {
        preset: 'twirl#redIcon'
    });

    myMap.geoObjects.add(myPlacemark);
}