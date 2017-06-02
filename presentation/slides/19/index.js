import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./operators.ex')}
    ranges={[
      { loc: [0, 16], title: 'Podstawowe operatory' },
      { loc: [0, 1] },
      { loc: [2, 4] },
      { loc: [5, 6] },
      { loc: [7, 8] },
      { loc: [9, 10] },
      { loc: [11, 12] },
      { loc: [13, 15] }
    ]}
  />
);
