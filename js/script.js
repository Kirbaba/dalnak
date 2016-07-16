var map1, map2, map3;
function initialize() {

    // map.setOptions({styles: styles});
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(55.74929, 37.0720767);

    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 8,
    };
    var map1 = new google.maps.Map(document.getElementById("map"), mapOptions);

  var styles = [
    {
      stylers: [

        { hue: "#000000" },
        { saturation: -100 },
         { visibility: "on" }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      { visibility: "off" },
      { color: "#c7c7c7" },
      { saturation: -100 },
      { lightness: 20 }
    ]
  }
  ];
  var mapOptionsOld = {

      center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
     disableDefaultUI: true,
     styles: styles
  };
  var map2 = new google.maps.Map(document.getElementById("map-old"), mapOptionsOld);
  var myLatlng3 = new google.maps.LatLng(57.0442, 9.9116);
  var mapOptionsKnives = {
       center: myLatlng3, // Координаты центра мы берем из переменной centerLatLng
         zoom: 14,
    };
  var map3 = new google.maps.Map(document.getElementById("mapBlack"), mapOptionsKnives);

}

// Ждем полной загрузки страницы, после этого запускаем initMap()
// google.maps.event.addDomListener(window, "load", initMap);
$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});
