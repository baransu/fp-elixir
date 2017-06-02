import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./recursion.ex')}
    ranges={[
      { loc: [0, 37], title: 'Rekurencja' },
      { loc: [0, 8] },
      { loc: [9, 13] },
      { loc: [14, 18] },
      { loc: [19, 22] },
      { loc: [19, 24] },
      { loc: [25, 26] },
      { loc: [27, 28] },
      { loc: [27, 30] },
      { loc: [31, 32] },
      { loc: [31, 34] },
      { loc: [35, 36] }
    ]}
  />
);
