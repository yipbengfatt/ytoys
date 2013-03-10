//// Start Google Maps ////
function initialize() {
  var myOptions = {
	zoom: 14,
	center: new google.maps.LatLng(22.810929,113.224045),
	mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   var marker = new google.maps.Marker({
      position: new google.maps.LatLng(22.810929,113.224045),
      title:"小将军"
  });
  marker.setMap(map); 
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&sensor=TRUE_OR_FALSE&callback=initialize";
  document.body.appendChild(script);
}
window.onload = loadScript;
//// End Google Maps ////