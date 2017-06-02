import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./modules_functions.ex')}
    ranges={[
      { loc: [0, 38], title: 'Moduły i funkcje' },
      { loc: [0, 3] },
      { loc: [4, 5] },
      { loc: [6, 11] },
      { loc: [12, 14] },
      { loc: [15, 22] },
      { loc: [23, 28] },
      { loc: [29, 33] },
      { loc: [34, 37] }
    ]}
  />
);
