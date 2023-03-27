(function () {
    var setting = { "height": 209, "width": 470, "zoom": 17, "queryString": "Santa Clara 361, Luján, Provincia de Buenos Aires, Argentina", "place_id": "Ej1TYW50YSBDbGFyYSAzNjEsIEx1asOhbiwgUHJvdmluY2lhIGRlIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hIjESLwoUChIJqc1KLMB9vJURmeth9CIFVkMQ6QIqFAoSCW9pBvbAfbyVEd7puJqcJ1w8", "satellite": true, "centerCoord": [-34.566897560941534, -59.127961199999994], "cid": "0x8048f5ac1798f545", "lang": "es", "cityUrl": "/argentina/pilar-27032", "cityAnchorText": "Mapa de Pilar (Buenos Aires), South Argentina, Argentina", "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3", "embed_id": "899606" };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=899606';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();