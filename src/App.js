import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getMapDataByCountryId } from './components/apis';
import HighMaps from './components/HighMaps';
import Selector from './components/Selector';

function App() {
  const [countryId] = useState('us');
  const [mapData, setMapData] = useState({});
  const [select, setSelect] = useState('1')

  const handleOnChange = (event) => {
    setSelect(event.target.value)
  }

  useEffect(() => {
    if (countryId) {
      getMapDataByCountryId(countryId)
        .then((res) => {
          setMapData(res);
        })
        .catch((err) => console.log({ err }));
    }
  }, [countryId]);

  return (
    <Container style={{ marginTop: 20 }}>
      <Selector value={select} handleOnChange={handleOnChange} />
      <div style={{ height: '500px', marginTop: 10 }}>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12}>
            <HighMaps select={select} mapData={mapData} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
