import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
      Czym jest programowanie funkcyjne?
    </Heading>
    <List>
      {[
        'Brak stanu',
        'Immutability',
        'Funkcje jako baza jezyka',
        // 'pure functions (brak efektow ubocznych)',
        // 'higher order functions',
        'Wszystko jest wyrażeniem',
        'Kompozycja',
        'Kekurencja'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>
  </Slide>
);
