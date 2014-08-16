
// Initialization stuff
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  $('#panel').removeClass('hidden');
  if (isNaN(crd.longitude)) {
    $('#notice').text("Something went wrong");
  } else{
    $('#notice').text("Something worked");
    $('#longitude').text(crd.longitude + " longitude");
    $('#latitude').text(crd.latitude + " latitude");
  };
  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  $('#panel').removeClass('hidden');
  console.warn('ERROR(' + err.code + '): ' + err.message);
  $('#notice').text('ERROR(' + err.code + '): ' + err.message);
};

// onClick
function clicked() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else{ //Geolocation not in navigator
    $('#button').addClass('disabled');
    $('#panel').removeClass('hidden');
    $('#notice').text('Unforunatly, geolocation is not supported in your browser.');
  };
};