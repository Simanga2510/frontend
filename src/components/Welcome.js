import React from "react";
import {Card, Button } from 'react-bootstrap';

const Welcome = () => (
<Card >
      
      <Card.Body>
        <Card.Title>Welcome to Image Gallery</Card.Title>
        <Card.Text>
          This is an application that retrieves photoes using Unspash API.
          In order to start, enter any Search iterm in the input field.
        </Card.Text>
        <Button variant="primary" href="https://unsplash.com" 
        target="_blank">Learn more</Button>
      </Card.Body>
    </Card>
);

export default Welcome;
