import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  Polygon,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapClickLogger from "./MapClickLogger";

// 🔧 Fix iconos (Vite/React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function CampusMap() {
  const upb = [6.2428, -75.5893];

  /* 🟩 Coordenadas aproximadas de canchas (puedes ajustarlas luego moviéndolas visualmente) */

  const futbol = [
    [6.242706062510374, -75.59160232042751],
    [6.242706062510374, -75.59102299711103],
    [6.241767522653422, -75.59154867937968],
    [6.241778187888508, -75.59096399195839],
  ];
  const tenis = [
    [6.242268321978382, -75.5886572599411],
    [6.241937699898875, -75.58868944644928],
    [6.241921702051029, -75.5885285139084],
    [6.242236326302398, -75.5885124206543],
  ];

  const padel = [
    { lat: 6.2416262753162535, lng: -75.58870661289802 },
    { lat: 6.241572949123152, lng: -75.58855104477517 },
    { lat: 6.24191423666518, lng: -75.58869051964395 },
    { lat: 6.241892906200326, lng: -75.58854031593911 },
  ];

  const pool = [
    [6.241356444446754, -75.59136092662813],
    [6.241367109690211, -75.59116244316102],
    [6.241047152291916, -75.591157078743],
    [6.241036487041945, -75.59133410453798],
  ];

  const style = (color) => ({
    color,
    fillColor: color,
    fillOpacity: 0.2,
  });

  return (
    <MapContainer
      center={upb}
      zoom={17} // 👈 más alejado (antes 17-18)
      minZoom={17}
      style={{
        height: "600px",
        width: "600px",
        borderRadius: "12px",
        filter: "saturate(0.8)",
      }}
    >
      <MapClickLogger />
      {/* 🛰️ Satélite */}
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

      {/* 📍 Marcador principal */}
      <Marker position={upb}>
        <Popup>
          <b>UPB Medellín</b>
          <br />
          Campus principal
        </Popup>
      </Marker>

      {/* ⚽ Fútbol */}
      <Rectangle bounds={futbol} pathOptions={style("green")}>
        <Popup>⚽ Cancha de Fútbol</Popup>
      </Rectangle>

      {/* 🎾 Tenis */}
      <Rectangle bounds={tenis} pathOptions={style("orange")}>
        <Popup>🎾 Canchas de Tenis</Popup>
      </Rectangle>

      <Rectangle bounds={pool} pathOptions={style("blue")}>
        <Popup>🏊🏼‍♀️piscina</Popup>
      </Rectangle>

      {/* 🟦 Pádel */}
      <Rectangle bounds={padel} pathOptions={style("blue")}>
        <Popup>🟦 Cancha de Pádel</Popup>
      </Rectangle>
    </MapContainer>
  );
}
