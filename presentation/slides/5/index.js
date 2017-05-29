import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="c"
    code={require('raw-loader!./immutable.c')}
    ranges={[
      { loc: [0, 6], title: 'Ale jak?!' },
      { loc: [0, 2] },
      { loc: [3, 5] }
    ]}
  />
);
