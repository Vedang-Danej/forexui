import { Form, Container, Button, Spinner, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Rates from '../components/Rates';

const LiveRateScreen = () => {
  const [base, setBase] = useState('');
  const [url, setUrl] = useState('');
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(false);
  const [symbol, setSymbol] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getRates();
    // eslint-disable-next-line
  }, [url]);

  const handleBaseChange = (e) => {
    setBase(e.target.value);
  };
  const onSubmitHandler = (e) => {
    // prevent default behaviour of reload
    e.preventDefault();
    if (base === '') {
      // input validation, show error message in the UI
      setError(true);
      setErrorMessage('Please fill all the details!');
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else
      setUrl(
        `https://api.forexrateapi.com/v1/latest?api_key=1cc74fc6750ade64c42a8a6ac388d4f1&base=${base}&currencies=EUR,JPY,INR,EUR,JPY,GBP,CNH,AUD,CAD,CHF,HKD,NZD,USD`
      );
  };

  // if url is not empty, then get data from forex API. If request fails, display error message
  const getRates = async () => {
    if (url !== '') {
      try {
        // show spinner, while request is pending
        setLoading(true);
        const { data } = await axios.get(url);
        // successfull request
        if (data.success) {
          setRates(data.rates);
          setSymbol(data.base);
          setLoading(false);
        } else throw new Error('Something went wrong with the Forex API.');
      } catch (error) {
        // failed request, display error
        setError(true);
        setErrorMessage(error.message);
        // error message is only shown for two seconds
        setTimeout(() => {
          setError(false);
        }, 2000);
        setLoading(false);
      }
    }
  };
  return (
    <Container fluid className="my-3 border-form">
      <Form style={{ display: 'flex' }} onSubmit={onSubmitHandler}>
        <Form.Group style={{ width: '40%' }} controlId="select-root">
          <Form.Control as="select" onChange={handleBaseChange}>
            <option value="">Select Base Currency</option>
            <option value="INR">Indian Rupees</option>
            <option value="USD">US dollar</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Japanese yen</option>
            <option value="GBP">British pound sterling</option>
            <option value="CNH">Chinese renminbi</option>
            <option value="AUD">Australian dollar</option>
            <option value="CAD">Canadian dollar</option>
            <option value="CHF">Swiss franc</option>
            <option value="HKD">Hong Kong dollar</option>
            <option value="NZD">New Zealand dollar</option>
          </Form.Control>
        </Form.Group>
        <Button style={{ marginLeft: '10px' }} type="submit" variant="primary">
          Go
        </Button>
      </Form>
      {/* display error message if error is true in the state */}
      {error && (
        <Alert className="error" key="warning" variant="warning">
          {errorMessage}
        </Alert>
      )}
      {/* if loding is true, show a spinner, else if 'rates' object is not empty, 
        show Rates */}
      {loading ? (
        <Spinner className="spinner" animation="border" />
      ) : Object.keys(rates).length ? (
        <Rates rates={rates} symbol={symbol} />
      ) : (
        ''
      )}
    </Container>
  );
};

export default LiveRateScreen;
