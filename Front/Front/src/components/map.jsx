
import '../App.css'
import { BsPlusLg } from "react-icons/bs";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, GeoJSON, Circle } from 'react-leaflet'
import { render } from 'react-dom';
import { useState, useEffect } from "react";
import './map.css';
//import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
//import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css';
import Ubicacion from './images/miUbi.png';
import Fuentes from './FuentesCat(zip).json';
import FuenteIco from './images/logo02.png';
import NavBar from "./navbar.jsx";
import {Link, useNavigate} from 'react-router-dom';

function Map() {
  const btn_style04 = { color: "E8F0F2", fontSize: "35px", marginTop: "13px" }

  const {datosFuentes, setDatosFuentes } = useState(Fuentes);
  let loveIcon = new L.icon({
    iconUrl: Ubicacion,
    iconRetinaUrl: Ubicacion,
    iconSize: [20, 20],
    popupAnchor: [0, -10],
  });

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, []);

    return position === null ? null : (
     
      <Marker position={position} icon={loveIcon}>
        <Popup>Estás aquí!</Popup>
      </Marker>
  
    )

    ;
  }
      let FuentesIcon =  L.icon({
        iconUrl: FuenteIco,
        iconRetinaUrl: FuenteIco,
        iconSize: [40, 40],
        popupAnchor: [0, -15],
      });

    return (
        <>
       <NavBar />
      <div className="position_map">

        <MapContainer
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
        </div>  
        <Link to="/new" replace>
        <div class="add_newfont">
           <BsPlusLg style={btn_style04}/>
      </div>
     </Link>
        </>


    )

} export default Map;