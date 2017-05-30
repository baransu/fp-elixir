import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={3} caps textColor="tertiary">
      Pętle
    </Heading>
    <List>
      {[
        'Brak for, while, do while',
        'Rekurencja',
        'Rekurencja ogonowa'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>
  </Slide>
);
