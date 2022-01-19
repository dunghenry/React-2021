import { useEffect, useState } from "react";
import { Container, Typography } from '@material-ui/core';
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Summary from "./components/Summary";
import Highlight from "./components/Highlight";
import moment from 'moment';
import 'moment/locale/vi';
import '@fontsource/roboto';
import { sortBy } from 'lodash';
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      // console.log(res.data);
      // setCountries(res.data);
        const { data } = res;
        const countries = sortBy(data, 'Country');
      setCountries(countries);
      setSelectedCountryId('vn');
    });
  }, []);

  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value);
    // console.log(e.target.value);
  };

  useEffect(() => {
    //! Call api
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
        // console.log({report});
      });
    }
  },[countries, selectedCountryId]);

  return (
    <Container style={{marginTop: '20px'}}>
      <Typography variant="h3" component='h3'>
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format('LLL')}</Typography>
      <CountrySelector countries={countries} handleOnchange={handleOnchange} value={selectedCountryId} />
      <Highlight report={report}  />
      <Summary report={report} selectedCountryId={selectedCountryId} />
    </Container>
  );
}

export default App;
