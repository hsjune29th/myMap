import React from 'react';
import L from 'leaflet';
import './map.scss';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

export default function MyMap(props){
  const url= props.url
  const title= props.title
  return(
    <>
      <MapContainer center={ [10.8002581, 106.729774]} zoom={5}  style={{height: "100vh"}}>
  <TileLayer
    attribution={title}
    url={url}
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</>
  )
}

/*
export default class MyMap extends React.Component {
  render(){
    const url= this.props.url
    const title= this.props.title
    console.log(url)
    return(
    <>
      <MapContainer center={ [10.8002581, 106.729774]} zoom={5}  style={{height: "100vh"}}>
  <TileLayer
    attribution={title}
    url={url}
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</>
    )
  }
  // render() {
  //   return (
  //     <div id="map" style={{ opacity : "1"}}></div>)
  // }
  // setMap(url, title){
  
  //   let myMap = document.getElementById("map")
  //   var map = new L.map(myMap, {
  //     center: [10.8002581, 106.729774],
  //     zoom: 5,
  //     scrollWheelZoom:false,
  //     maxZoom: 20,
  //     minZoom: 2.5,
  //     zoomDelta: 2,
  //   });
  //   L.tileLayer(url, {
  //     attribution:title,
  //   }).addTo(map);
  //   //map.setUrl('https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=toOFSy59NaIVWVgz1jeE');
  //   L.control.scale({ imperial: false }).addTo(map);
  // }
  // componentDidMount() {
  //   this.setMap(this.props.url, this.props.title)
  // }
  // UNSAFE_componentWillUpdate(){
    
  // }
  // shouldComponentUpdate() {
  //   return true;
  // }
  // componentDidUpdate(){
  // }
}


*/