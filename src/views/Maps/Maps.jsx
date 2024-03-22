import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Maps = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Pune's coordinates
    const puneLatLng = [18.5204, 73.8567];

    const map = L.map(mapRef.current).setView(puneLatLng, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Add a marker at Pune's location
    L.marker(puneLatLng).addTo(map)
      .bindPopup('Pune, India')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: '100vh',width:'100vw' }} />;
};

export default Maps;
