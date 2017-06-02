import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./map.ex')}
    ranges={[
      { loc: [0, 29], title: 'Map' },
      { loc: [0, 1] },
      { loc: [2, 4] },
      { loc: [5, 7] },
      { loc: [8, 10] },
      { loc: [11, 12] },
      { loc: [13, 14] },
      { loc: [15, 17] },
      { loc: [18, 20] },
      { loc: [21, 23] },
      { loc: [24, 25] },
      { loc: [26, 28] }
    ]}
  />
);
