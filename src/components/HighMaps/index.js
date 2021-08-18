import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import fakeData1 from '../../Data.json'

highchartsMap(Highcharts);

const initOptions = {
  chart: {
    height: '500',
  },
  title: {
    text: '',
  },
  mapNavigation: {
    enabled: true,
  },
  credits: {
      enabled: false,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, '#3399FF'],
      [0.4, '#3366CC'],
      [0.6, '#0066CC'],
      [0.8, '#0033FF'],
      [1, '#000099'],
    ],
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'bottom',
    enabled: false,
  },
  series: [
    {
      name: 'Số lượng khách hàng',
      joinBy: ['hc-key', 'key'],
      
    }
  ],
};

const HighMaps = ({ mapData, select }) => {
  const [options, setOptions] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const chartRef = useRef(null);

 

  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties['hc-key'],
        value: index,
      }));
      if (select && select === '1') {
        setOptions(() => ({
          ...initOptions,
          series: [
            { ...initOptions.series[0], data: fakeData1, mapData: mapData },
          ],
        }));
      } else if  (select && select === '2'){
        setOptions(() => ({
          ...initOptions,
          series: [
            { ...initOptions.series[0], data: fakeData, mapData: mapData },
          ],
        }));
      }
      

      if (!mapLoaded) setMapLoaded(true);
    }
  }, [mapData, mapLoaded, select]);
  
  if (!mapLoaded) return null;
  


  return (
    <>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'mapChart'}
        ref={chartRef}
    />
    </>
  )
}

export default HighMaps
