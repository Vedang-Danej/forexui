import React from 'react';
import { Container } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <Container fluid className="my-3 border-form">
      <h2 className="heading">Welcome To The ForexUI</h2>
      <p className="fs-5">
        This application allows you to view current live rates of top currencies and also convert
        any amount of one currency into another.
      </p>
      <h2 className="heading">Available Currencies</h2>
      <p className="fs-5">
        I've only included a few currencies (based on highest traded) to make the UI simple to use.
        The list of Available currencies are :-
      </p>
      <ul class="list-group">
        <li class="list-group-item">Indian Rupees (INR)</li>
        <li class="list-group-item">US dollar (USD)</li>
        <li class="list-group-item">Euro (EUR)</li>
        <li class="list-group-item">Japanese yen (JPY)</li>
        <li class="list-group-item">British pound sterling (GBP)</li>
        <li class="list-group-item">Chinese renminbi (CNH)</li>
        <li class="list-group-item">Australian dollar (AUD)</li>
        <li class="list-group-item">Canadian dollar (CAD)</li>
        <li class="list-group-item">Swiss franc (CHF)</li>
        <li class="list-group-item">Hong Kong dollar (HKD)</li>
        <li class="list-group-item">New Zealand dollar (NZD)</li>
      </ul>
    </Container>
  );
};

export default HomeScreen;
