import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={require('raw-loader!./map.txt')}
    ranges={[
      { loc: [0, 19], title: 'Map' },
      { loc: [0, 11], note: 'Wersja imperatywna' },
      { loc: [0, 1] },
      { loc: [2, 5] },
      { loc: [6, 9] },
      { loc: [10, 11] },
      { loc: [12, 18], note: 'Wersja funkcyjna' },
      { loc: [0, 1] },
      { loc: [12, 13] },
      { loc: [14, 16] },
      { loc: [17, 18] }
    ]}
  />
);
