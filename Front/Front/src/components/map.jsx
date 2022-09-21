import "../App.css";
port { render } from 'react-dom';
import { BsPlusLg } from "react-icons/bs";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
  GeoJSON,
  Circle,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { map } from 'leaflet';
import "./map.css";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css";
import "leaflet/dist/leaflet.css";
import Ubicacion from "./images/miUbi.png";
import Fuentes from "./Fuentes(zip)-test.json";
import FuenteIco from "./images/logo02.png";
import NavBar from "./navbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading.jsx";
import PopUp from './PopUp';
import PopUp02 from './PopUp02';

function Map() {
  const [datosFuentes, setDatosFuentes] = useState(Fuentes);
  const [llave, setLlave] = useState(9);
  const [datosCargar, setDatosCargar] = useState("");
  const btn_style04 = { color: "E8F0F2", fontSize: "28px", marginTop: "11px" };
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState("");
  const [datosArribados, setDatosArribados] = useState([]);
  const [popup, setPopup] = useState(true)
  const [popup02, setPopup02] = useState(true)




  useEffect(() => {}, [datosFuentes]);

  function loadData() {
    fetch("http://localhost:3000/api/fuentes/")
      .then((resultado) => resultado.json())
      .then(async (objeto_retornado) => {
        if (objeto_retornado.ok === true) {
          await setDatos(objeto_retornado.data);
        } else {
          setError(objeto_retornado.error);
        }
      })
      .catch((error) => setError(error));
  }
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    JsonMasApi();
  }, [datos]);

  if (error !== "") {
    return <h3>Error: {error.message} </h3>;
  }

  if (datos === null) {
    return <Loading />;
  }

  let loveIcon = new L.icon({
    iconUrl: Ubicacion,
    iconRetinaUrl: Ubicacion,
    iconSize: [20, 20],
    popupAnchor: [0, -10],
  });

  function JsonMasApi() {
    if (datos === null) {
      return;
    } else {
      console.log("datosfuentes hasta ahora", datosFuentes);
      console.log("datos desde la api", datos);
      //tengo en datosFuentes todos los datos de las fuentes del JSON
      //tengo en datosFromApi todos los datos desde la API
      //tengo en datosUnidos todos los datos de Fuentes filtrados
      let datosUnidos = JSON.parse(JSON.stringify(datosFuentes));
      //unirlos
      datosUnidos.features = [...datosUnidos.features, ...datos];

      setDatosFuentes(datosUnidos);
      console.log("datos termiados", datosUnidos);
      setLlave(datosUnidos.features.length);
    }
  }

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
    );
  }
  let FuentesIcon = L.icon({
    iconUrl: FuenteIco,
    iconRetinaUrl: FuenteIco,
    iconSize: [40, 40],
    popupAnchor: [0, -15],
  });

  //funcion para probar que agregue y recargue
  //       function agrega(x) {
  // console.log('datos ANTIGUOS', datosFuentes);
  //         let nuevosDatos = JSON.parse(JSON.stringify(datosFuentes));
  //         nuevosDatos.features.push(x);
  //         setDatosFuentes(nuevosDatos);
  //         console.log('datos cargados', nuevosDatos);
  //         setLlave(nuevosDatos.features.length);

  //         // x.preventDefault();
  //         const datos = {
  //            datos_fuente: datosCargar
  //         } ;

  //         fetch("http://localhost:3000/api/fuentes/nuevafuente",
  //         {
  //             headers: {
  //               'Accept': 'application/json',
  //               'Content-Type': 'application/json'
  //             },
  //             method: "POST",
  //             body: JSON.stringify(datos)
  //         })
  //         .then(res => loadData())
  //         .catch(err => console.log("error: ", err))

  //       }

    function agrega(x) {
    
      const fu = {
        datos_fuente: JSON.stringify(x),
      };

      fetch("http://localhost:3000/api/fuentes/nuevafuente", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(fu),
      })
        .then((res) => loadData())
        .catch((err) => console.log("error: ", err));
    }
    console.log(datosFuentes);

  return (
    <>
      {/*}<button onClick={() => setPopup02(false)}> Agregar fuente</button>
          ERA UN BOTO DE PROVA, PERÒ LA ACCIó HA DE PASSAR QUAN S'AGREGUI LA FONT
      {*/}
      <NavBar />
      <button
        onClick={() =>
          agrega({
            type: "Feature",
            properties: { id: "pepito", name: "nueva fuente" },
            geometry: { type: "Point", coordinates: [2.17984, 41.388372] },
          })
        }
      >
        {" "}
        Agregar fuente
      </button>
      <div className="position_map madre">
        {/* lat: 40.463667, lng: -3.74922  */}

        <MapContainer
          center={{ lat: 40.463667, lng: -3.74922 }}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup markers={FuentesIcon}>
            <GeoJSON
              key={llave}
              data={datosFuentes}
              pointToLayer={(feature, latlng) => {
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
      </div>
      <Link to="/new" replace>
        <div className="add_newfont">
          <BsPlusLg style={btn_style04} />
        </div>
      </Link>
    </>
  );
}
export default Map;