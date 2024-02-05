import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

const Rates = ({ rates, symbol }) => {
  const keys = Object.keys(rates);
  const newKeys = keys.filter((key) => rates[key] !== 1);
  return (
    <Card style={{ margin: '10px' }}>
      <ListGroup className="text-center" variant="flush">
        {newKeys.map((currency, i) => (
          <ListGroup.Item key={keys[i]}>
            1 {symbol} = {rates[currency]} {currency}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Rates;
