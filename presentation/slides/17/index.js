import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./primitives.ex')}
    ranges={[
      { loc: [0, 20], title: 'Podstawowe typy' },
      { loc: [0, 2] },
      { loc: [3, 4] },
      { loc: [5, 6] },
      { loc: [7, 8] },
      { loc: [9, 10] },
      { loc: [11, 12] },
      { loc: [13, 14] },
      { loc: [15, 16] },
      { loc: [17, 19] }
    ]}
  />
);
