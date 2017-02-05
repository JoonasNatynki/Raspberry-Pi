
/* global $ wikipediaMarkers googleMap google clearMarkers */
const button = document.getElementById('Search_Wikipedia');
button.addEventListener('click', buttonClicked);

function buttonClicked()
{

    let center = googleMap.getCenter();
    console.log('Button clicked');
    $.ajax(
    {
        url: 'http://api.geonames.org/findNearbyWikipediaJSON?username=Katulobotomia',
        datatype: 'json',
        data: 
        {
            lat: center.lat,
            lng: center.lng,
        },
        success: sukses,
    });
}
function sukses(data)
{
    console.log('Sukses!');
    clearMarkers(wikipediaMarkers);
    data.geonames.forEach(handleArticle);
}

function handleArticle(article)
{
    let marker = new google.maps.Marker(
    {
    position: {lat: article.lat, lng: article.lng},
    map: googleMap,
    });
    wikipediaMarkers.push(marker);
}