import styles from './widgetMap.scss';
import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View, Overlay } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { BORDER_COLOR, BORDER_WIDTH, CAPTIAL_COLOR, CAPITAL_RADIUS, GEO_DATA } from './constants';
import { labels } from '../../../../assets/atlases/countriesAtlas';

function WidgetMap(props) {
  useEffect(() => {
    new Map({
      target: document.getElementById('map-container'),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: `../../assets/geodata/${props.country}.json`,
          }),
          style: new Style({
            stroke: new Stroke({
              color: BORDER_COLOR,
              width: BORDER_WIDTH,
            }),
          }),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [
              new Feature({
                geometry: new Point(fromLonLat(GEO_DATA[props.country].capital)),
              }),
            ],
          }),
          style: new Style({
            image: new Circle({
              radius: CAPITAL_RADIUS,
              fill: new Fill({ color: CAPTIAL_COLOR }),
            }),
          }),
        }),
      ],
      overlays: [
        new Overlay({
          element: document.getElementById('popup'),
          position: fromLonLat(GEO_DATA[props.country].capital),
          positioning: 'bottom-center',
        }),
      ],
      view: new View({
        center: fromLonLat(GEO_DATA[props.country].center),
        zoom: GEO_DATA[props.country].zoom,
      }),
    });
  }, []);

  return (
    <div className={styles['widget-map']}>
      <p className={styles['header']}>{labels[props.lang][props.country].name}</p>
      <div className={styles['map-container']} id="map-container">
        <div className={styles['popup']} id="popup">
          {labels[props.lang][props.country].capital}
        </div>
      </div>
    </div>
  );
}

export default WidgetMap;
