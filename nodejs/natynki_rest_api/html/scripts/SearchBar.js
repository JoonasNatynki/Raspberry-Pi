
// Initialize the serachbar
function initializeSearchBar()
{
    let form = document.getElementById('Search Form');

    form.addEventListener('submit', onSearchSubmitted);

    function onSearchSubmitted(event)
    {
        event.preventDefault();
        console.log('onSearchSubmitted');
        let searchValue = document.getElementById('Search_Bar').value;
        geocodeSearch(searchValue);
    }
}

// Translate text into coordinates
function geocodeSearch(value)
{
    console.log('geocodeSearch');

    let geoCoder = new google.maps.Geocoder();
    geoCoder.geocode({'address': value}, onSearchResult);
}

function onSearchResult(result, status)
{
    console.log('GOT RESULT!!');

    if(status == google.maps.GeocoderStatus.OK)
    {
        // var googleMap = new google.maps.Map(mapDiv);
        console.log(result[0]);
        let coordinatesOfTheItem = result[0].geometry.location;
        let marker = new google.maps.Marker(
            {
                position: result[0].geometry.location,
                map: googleMap
            });
        markers.push(marker);
        googleMap.setCenter(coordinatesOfTheItem);
        currentCoordinates = coordinatesOfTheItem;
    }
}

initializeSearchBar();
