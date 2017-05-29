import React from 'react';
import { Slide, Text } from 'spectacle';

import { SnippetSlide } from '../../utils';

export default (
  <Slide>
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      Brak stanu
    </Text>
    <SnippetSlide
      snippets={[
        { lang: 'js', source: require('raw-loader!./statefull.js') },
        { lang: 'js', source: require('raw-loader!./stateless.js') }
      ]}
    />
  </Slide>
);
