import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={1} fit caps textColor="tertiary">
      Higher order functions
    </Heading>
    <List>
      {[
        'Funkcja jako argument',
        'Funkcja moze zwrócić funckje',
        'Funkcje anonimowe (lambda)'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>
  </Slide>
);
