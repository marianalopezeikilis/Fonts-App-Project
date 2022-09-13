import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import { render } from 'react-dom';
import { useState } from "react";
import './map.css';
import 'leaflet/dist/leaflet.css';
import Ubicacion from './images/miUbi.png';
import Fuentes from './FuentesCat(zip).json';
import FuenteIco from './images/logo02.png';



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
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }
      

    return (
        <>
        <MapContainer
<<<<<<< HEAD
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
=======
          center={{ lat: 51.50853, lng: -0.12574 }}
          zoom={15}
>>>>>>> af808fdb4cd8aa90f77119b519cfcf2b9e3f8b95
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
        </>


    )

} export default Map;