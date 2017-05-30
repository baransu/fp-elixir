import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={3} caps textColor="tertiary">
      Kompozycja
    </Heading>
    <List>
      {[
        'Male bloczki',
        'Łączenie w wieksza abstrakcje',
        'Immutability'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>
  </Slide>
);
