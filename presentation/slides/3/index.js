import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Czemu brak stanu jest dobry?
    </Heading>
    <List>
      {[
        'Lepsza wielowątkowość',
        'Deterministyczność',
        'Pure functions',
        'Łatwiejsze testowanie (unit testing)',
        'Hot code deployment',
        'Time travel debugging'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>

  </Slide>
);
