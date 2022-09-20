
import '../App.css'
import { BsPlusLg } from "react-icons/bs";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, GeoJSON, Circle } from 'react-leaflet'
import { render } from 'react-dom';
import { useState, useEffect } from "react";
import './map.css';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css';
import Ubicacion from './images/miUbi.png';
import Fuentes from './Fuentes(zip)-test.json';
import FuenteIco from './images/logo02.png';
import NavBar from "./navbar.jsx";
import {Link, useNavigate} from 'react-router-dom';
import { map } from 'leaflet';


function Map() {
  const btn_style04 = { color: "E8F0F2", fontSize: "35px", marginTop: "13px" }
  const [datosFuentes, setDatosFuentes] = useState(Fuentes);
  const [llave, setLlave] = useState(9);

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
        map.flyTo(e.latlng,15);
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

      useEffect(() => {
        console.log('Han cambiado los datos', datosFuentes);
      
      }, [datosFuentes]);

      //funcion para probar que agregue y recargue
      function agrega(x) {  
console.log('datos ANTIGUOS', datosFuentes);
        let nuevosDatos = JSON.parse(JSON.stringify(datosFuentes));
        nuevosDatos.features.push(x);
        setDatosFuentes(nuevosDatos);
        console.log('datos cargados', nuevosDatos);
        setLlave(nuevosDatos.features.length);
      
 
        
      }


    return (
        <>
       <NavBar />
       <button onClick={()=>agrega({ "type": "Feature", "properties": { "id": "pepito", "name": "nueva fuente"},"geometry": { "type": "Point", "coordinates": [ 2.179840, 41.388372 ] } })}> Agregar fuente</button>
      <div className="position_map madre">
      {/* lat: 40.463667, lng: -3.74922  */}
     
        <MapContainer
          center={{ lat: 40.463667, lng: -3.74922 }}
          zoom={5}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup markers={FuentesIcon}>
          
          <GeoJSON key={llave} data={datosFuentes}  pointToLayer={(feature, latlng) => {
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
        <div className="add_newfont">
           <BsPlusLg style={btn_style04}/>
      </div>
     </Link>
        </>


    )

} export default Map;
  