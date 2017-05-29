import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={require('raw-loader!./hof.js')}
    ranges={[
      { loc: [0, 34], title: 'Przykłady' },
      { loc: [0, 1] }, // header
      { loc: [2, 3] },
      { loc: [4, 7] },
      { loc: [8, 11] },
      { loc: [12, 13] },
      { loc: [2, 13] },
      { loc: [14, 15] }, // header
      { loc: [16, 19] },
      { loc: [20, 25] },
      { loc: [16, 25] },
      { loc: [26, 27] }, // header
      { loc: [28, 31] },
      { loc: [32, 33] },
      { loc: [28, 33] }
    ]}
  />
);
