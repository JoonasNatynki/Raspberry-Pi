let flickrbutton = document.getElementById('flickrbutton');
flickrbutton.addEventListener("click", onClick);

function onClick()
{
    let params = 
    {
			'method': 'flickr.photos.search',
			'api_key': '8c84b7c0142d8776759fb72252c1ffaf',
			'lat':currentCoordinates.lat,
			'lon':currentCoordinates.lng,
			'radius':2, // DEFAULT: 5 km, MAX 32 km
			'format':'json',
			'extras':'url_m,geo', // url_o: include photo URL for original size image, url_c: 800x800, url_q: 150x150
                            // geo: include geolocation data into result set
			//'tags':'cat,dog,horse,cow', --> limit results by specific tags
	}

    $.ajax(
        {
            "url": "https://api.flickr.com/services/rest/",
            "dataType": "jsonp",
            "data": params,
        }
    );
}

function jsonFlickrApi(data)
{
    if(markers.length != 0)
    {
        clearMarkers(markers);
    }
    console.log(markers);
    data.photos.photo.forEach(function(element) 
    {
        createMarker(element.latitude, element.longitude);
    }, this);

    data.photos.photo.forEach(function(element) {
        addImage(element.url_m);
    }, this);
}

function drawCircle()
{
    // TODO
}