import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import { render } from 'react-dom';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import './map.css';
import 'leaflet/dist/leaflet.css';
import NavBar from "./navbar.jsx";
import '../App.css'
import Ubicacion from './images/miUbi.png';
import Fuentes from './FuentesCat1.json';
import FuenteIco from './images/logo02.png';


function Map() {

  const btn_style04 = { color: "E8F0F2", fontSize: "35px", marginTop: "13px" }

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
      <NavBar />
      <div class="position_map">
        <MapContainer
<<<<<<< HEAD
          center={{ lat: 51.50853, lng: -0.12574 }}
          zoom={15}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup markers={FuentesIcon}>
          <GeoJSON data={Fuentes}  pointToLayer={(feature, latlng) => {
            if (Marker) {
              return L.marker(latlng, { icon: FuentesIcon });
            }
            return L.marker(latlng);
          }} 
          onEachFeature= {(feature = {}, layer) => {
            const { properties = {} } = feature;
            const { name } = properties;
    
            if ( !name ) return;

            layer.bindPopup(`<p>${name}</p>`);}}
            ></GeoJSON>
          </MarkerClusterGroup>
          <LocationMarker />
        </MapContainer>
        </>


    )
=======
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
      </div>
      <Link to="/new" replace>
        <div class="add_newfont">
          <BsPlusLg style={btn_style04}/>
        </div>
      </Link>
    </>


  )
>>>>>>> main

} export default Map;