import React from 'react';
import L from 'leaflet';
import './map.scss';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';


export default class MyMap extends React.Component {
  render() {
    return (
      <div id="map" style={{ opacity : "1"}}></div>)
  }
  setMap(url, title){
    //let {url, title}= this.props
    let myMap = document.getElementById("map")
    var map = new L.map(myMap, {
      center: [10.8002581, 106.729774],
      zoom: 5,
      scrollWheelZoom:false,
      maxZoom: 20,
      minZoom: 2.5,
      zoomDelta: 2,
    });
    L.tileLayer(url, {
      attribution:title,
    }).addTo(map);
    //map.setUrl('https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=toOFSy59NaIVWVgz1jeE');
    L.control.scale({ imperial: false }).addTo(map);
  }
  componentDidMount() {
    this.setMap(this.props.url, this.props.title)
  }
  UNSAFE_componentWillUpdate(){
    
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate(){
  }
}


