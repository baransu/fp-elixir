import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={require('raw-loader!./reduce.txt')}
    ranges={[
      { loc: [0, 35], title: 'Reduce' },
      { loc: [0, 9], note: 'Wersja imperatywna' },
      { loc: [0, 1] },
      { loc: [2, 3] },
      { loc: [4, 9] },
      { loc: [10, 17], note: 'Wersja funkcyjna' },
      { loc: [0, 1] },
      { loc: [10, 13] },
      { loc: [14, 17] },
      { loc: [18, 19] },
      { loc: [20, 34] }, // advanced
      { loc: [20, 26] },
      { loc: [27, 30] },
      { loc: [31, 34] },
      { loc: [27, 34] }
    ]}
  />
);
