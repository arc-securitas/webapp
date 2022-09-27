// react
import React, { useState, useEffect, useRef } from 'react';
import styles from './MapWrapper.module.css';

// openlayers
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
import {transform} from 'ol/proj'
import {useGeographic} from 'ol/proj';

/*
  Dear future friends,
  This MapWrapper component works by combining the OpenLayers library with PositionStack's
  Geocoding API. OpenLayers lets us draw the google-maps style map to the screen,
  while PositionStack lets us translate an english address into lat-long coordinates.
  This coordinate is passed into OpenLayers to set the map to the correct place!

  I used this article for OpenLayers: https://taylor.callsen.me/using-openlayers-with-react-functional-components/
  and this one for understanding PositionStack's API: https://positionstack.com/documentation
*/

function MapWrapper(props) {

  // set intial state
  const [ map, setMap ] = useState()
  const [ featuresLayer, setFeaturesLayer ] = useState()
  const [ selectedCoord , setSelectedCoord ] = useState()

  // pull refs
  const mapElement = useRef()

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef()
  mapRef.current = map

  // Sets openlayers to the correct coordinate system for latitude-longitude
  useGeographic();

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect( () => {
    /**
     * Converts the given |address| into lat-long coordinates, then initializes the OpenLayers Map to that location
     */
    async function geocodeForward(address) {
      const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITION_STACK_TEMP}&query=${address}`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      let result = await response.json();
      const coord = [result["data"][0]['longitude'], result["data"][0]['latitude']];

      // create and add vector source layer
      const initalFeaturesLayer = new VectorLayer({
        source: new VectorSource()
      })

      // create map
      const initialMap = new Map({
        target: mapElement.current,
        layers: [
          // Google Maps Terrain
          new TileLayer({
            source: new XYZ({
              url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}',
            })
          }),

          initalFeaturesLayer

        ],
        view: new View({
          projection: 'EPSG:3857',
          center: coord,
          zoom: 18
        }),
        controls: []
      })

      // set map onclick handler
      initialMap.on('click', handleMapClick)

      // save map and vector layer references to state
      setMap(initialMap)
      setFeaturesLayer(initalFeaturesLayer)
    }

    geocodeForward(props.address);
  },[])

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect( () => {

    if (props.features.length) { // may be null on first render

      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: props.features // make sure features is an array
        })
      )

      // fit map to feature extent (with 100px of padding)
      map.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100,100,100,100]
      })

    }

  },[props.features])

  // map click handler
  const handleMapClick = (event) => {

    // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
    //  https://stackoverflow.com/a/60643670
    const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

    // transform coord to EPSG 4326 standard Lat Long
    const transormedCoord = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326')

    // set React state
    setSelectedCoord( transormedCoord )
  }

  // render component
  return (
    <div ref={mapElement} className={styles.wrapper}></div>
  )
}

export default MapWrapper