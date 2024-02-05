import React from 'react';
import { Card } from 'react-bootstrap';

const ConvertResult = ({ result }) => {
  return (
    <Card className="text-center my-3 convert_card">
      <Card.Header>Result</Card.Header>
      <Card.Body>
        <Card.Title>Converting From : {result.from} </Card.Title>
        <Card.Title>Converting To : {result.to} </Card.Title>
        <Card.Title>
          Result : {result.amount} {result.from} = {result.units} {result.to}{' '}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ConvertResult;
