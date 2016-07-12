
  // function initMap() {
  // var  map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8
  //
  //   });
  //
  // }
  function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(55.74929, 37.0720767);

    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
    };

    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
