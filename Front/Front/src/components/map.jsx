
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
import { Link, useNavigate } from 'react-router-dom';
import { map } from 'leaflet';
import PopUp from './PopUp';
import PopUp02 from './PopUp02';


function Map() {
  const [datosFuentes, setDatosFuentes] = useState(Fuentes);
  const [llave, setLlave] = useState(9);
  const btn_style04 = { color: "E8F0F2", fontSize: "28px", marginTop: "11px" }
  const [popup, setPopup] = useState(true)
  const [popup02, setPopup02] = useState(true)


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
        map.flyTo(e.latlng, 15);
      });
    }, []);

    return position === null ? null : (

      <Marker position={position} icon={loveIcon}>
        <Popup>Estás aquí!</Popup>
      </Marker>

    )

      ;
  }
  let FuentesIcon = L.icon({
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
      <button onClick={() => agrega({ "type": "Feature", "properties": { "id": "pepito", "name": "nueva fuente" }, "geometry": { "type": "Point", "coordinates": [2.179840, 41.388372] } })}> Agregar fuente</button>
      {/*}<button onClick={() => setPopup02(false)}> Agregar fuente</button>
          ERA UN BOTO DE PROVA, PERÒ LA ACCIó HA DE PASSAR QUAN S'AGREGUI LA FONT
      {*/}

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



            <GeoJSON key={llave} data={datosFuentes} pointToLayer={(feature, latlng) => {

              if (Marker) {
                return L.marker(latlng, { icon: FuentesIcon });
              }
              return L.marker(latlng);
            }}
              onEachFeature={(feature = {}, layer) => {
                const { properties = {} } = feature;
                const { name } = properties;

                if (!name) return;

                layer.bindPopup(`<p>${name}</p>`);
              }}
            ></GeoJSON>
          </MarkerClusterGroup>
          <LocationMarker />
        </MapContainer>
      </div>

      {/*If de la constante popup (true y false)
          True: Se ve el boton de añadir fuente
          False: Se ve el PopUp que anuncia que estas en añadir fuente y esconde el boton añadir fuente*/}
      {popup ? (<div className="add_newfont" onClick={() => setPopup(false)}>
          <BsPlusLg style={btn_style04} />
        </div>) : (
        <PopUp setPopup={setPopup}>
        </PopUp>
      )}

      {/*If que sirve para vizibilizar el PopUp02 que anuncia que se ha añadido una fuente
          True: està escondido
          False: Es visible -> setPopup02(false)
      
      */}
      {popup02 ? <></> : (
        <PopUp02 setPopup02={setPopup02}>
        </PopUp02>
      )}
    </>


  )

} export default Map;
