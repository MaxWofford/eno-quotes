var lat = "";
var lon = "";
function display(lat, lon) {
  $('#panel').removeClass('hidden');
  $('#longitude').text(lon);
  $('#latitude').text(lat);
};

function clicked() {
  if ("geolocation" in navigator) {
    console.log('cake');
    var watchID = navigator.geolocation.watchPosition(function(position) {
      display(lat, lon);
    });
  } else{ //Geolocation not in navigator
    $('#button').addClass("disabled");
  };
};