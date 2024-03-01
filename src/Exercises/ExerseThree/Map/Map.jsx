import React, { useRef, useEffect } from 'react';
import L from 'leaflet';

function Map({coord, location }) {
    const mapRef = useRef(null);

    useEffect(() => {

        const map = L.map(mapRef.current).setView([coord.longitude, coord.latitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([coord.latitude, coord.longitude]).addTo(map)
            .bindPopup(`${location.street.number} ${location.street.name} ${location.city} ${location.postcode}`).openPopup();
    }, [coord.longitude, coord.latitude]);

    return (
        <div ref={mapRef} style={{ height: '400px' }}></div>
    );
}

export default Map;
