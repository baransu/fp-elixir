import React from 'react';
import { Slide, List, ListItem, Heading } from 'spectacle';

export default (
  <Slide>
    <Heading size={1} fit caps textColor="tertiary">
      Żródła
    </Heading>
    <List>
      {[
        'http://learnyousomeerlang.com/',
        'http://elixir-lang.org/getting-started/',
        'https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536'
      ].map((text, index) => (
        <ListItem textColor="secondary" key={index}>{text}</ListItem>
      ))}
    </List>

  </Slide>
);
