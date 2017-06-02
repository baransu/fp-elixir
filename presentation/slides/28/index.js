import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={1} fit caps textColor="tertiary">
      Co dalej?
    </Heading>
    <List>
      {[
        'Pozostała składnia',
        'Procesy',
        'OTP',
        'TDD',
        'Meta programming',
        'Mix',
        'Erlang libraries'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>

  </Slide>
);
