import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, GeoJSON } from 'react-leaflet'
import { render } from 'react-dom';
import { useState } from "react";
import './map.css';
import 'leaflet/dist/leaflet.css';
import Ubicacion from './miUbi.png';
import Fuentes from './FuentesCat.json';


function Map() {
    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
        let loveIcon = L.icon({
          iconUrl: Ubicacion,
          iconRetinaUrl: Ubicacion,
          width: "150%",
          heigth: "150%",
        });
        return position === null ? null : (
          <Marker position={position} icon={loveIcon} >
            <Popup>Estás aquí!</Popup>
          </Marker>
        )
      }

      
    return (
        <>
        <MapContainer
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={15}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={Fuentes}  />

          <LocationMarker />
        </MapContainer>
        </>


    )

} export default Map;