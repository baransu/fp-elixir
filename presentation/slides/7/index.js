import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={1} fit caps textColor="tertiary">
      Pure functions
    </Heading>
    <List>
      {[
        'Brak efektów ubocznych',
        'Deterministycznoś',
        'Unit testing',
        'Kompozycja'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>
  </Slide>
);
