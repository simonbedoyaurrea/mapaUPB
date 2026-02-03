import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  useMapEvents,
} from "react-leaflet";

export default function MapClickLogger() {
  useMapEvents({
    click(e) {
      console.log("Coords:", e.latlng);
    },
  });

  return null;
}
