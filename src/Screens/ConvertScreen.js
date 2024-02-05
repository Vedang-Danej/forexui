import React, { useEffect, useState } from 'react';
import { Form, Container, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import ConvertResult from '../components/ConvertResult';

const ConvertScreen = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState({});
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getConversion();
    // eslint-disable-next-line
  }, [url]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // input validation
    // only == to compare value to amount as intial value is a string, entered value
    // will be a number, both can't be zero
    // eslint-disable-next-line
    if (fromCurrency === '' || toCurrency === '' || amount == 0) {
      setError(true);
      setErrorMessage('Please fill all the details!');
      // show error message for two seconds only
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setUrl(
        `https://api.forexrateapi.com/v1/convert?api_key=1cc74fc6750ade64c42a8a6ac388d4f1&from=${fromCurrency}&to=${toCurrency}&amount=${Number(
          amount
        )}`
      );
    }
  };

  // if url is not empty, then get data from forex API. If request fails, display error message
  const getConversion = async () => {
    if (url !== '') {
      try {
        // show spinner while request is pending
        setLoading(true);
        const { data } = await axios.get(url);
        if (data.success) {
          setResult({
            from: data.query.from,
            to: data.query.to,
            amount: data.query.amount,
            units: data.result,
          });
          setLoading(false);
        } else throw new Error('Something went wrong with the Forex API.');
      } catch (error) {
        // show error message if request fails
        setError(true);
        setErrorMessage('Something went wrong with the Forex API.');
        setTimeout(() => {
          setError(false);
        }, 2000);
        setLoading(false);
      }
    }
  };

  return (
    <Container fluid className="my-3 border-form">
      <Form className="convert_form" onSubmit={onSubmitHandler}>
        <Form.Group className="form_group" style={{ marginRight: '5px' }} controlId="select-root">
          <Form.Label>Convert From</Form.Label>
          <Form.Control as="select" onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="">Choose Currency</option>
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
        <Form.Group className="form_group" style={{ marginRight: '5px' }} controlId="select-root">
          <Form.Label>Convert To</Form.Label>
          <Form.Control as="select" onChange={(e) => setToCurrency(e.target.value)}>
            <option value="">Choose Currency</option>
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
        <Form.Group className="form_group" style={{ marginRight: '5px' }} controlId="select-root">
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
        </Form.Group>
        <Form.Group className="button_div">
          <Button className="convert_button" type="submit" variant="primary">
            Go
          </Button>
        </Form.Group>
      </Form>
      {error && (
        <Alert className="error" key="warning" variant="warning">
          {errorMessage}
        </Alert>
      )}
      {loading ? (
        <Spinner className="spinner" animation="border" />
      ) : Object.keys(result).length ? (
        <ConvertResult result={result} />
      ) : (
        ''
      )}
    </Container>
  );
};

export default ConvertScreen;
