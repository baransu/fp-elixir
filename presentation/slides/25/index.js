import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./keyword.ex')}
    ranges={[
      { loc: [0, 30], title: 'Keyword list' },
      { loc: [0, 2] },
      { loc: [3, 5] },
      { loc: [6, 7] },
      { loc: [8, 9] },
      { loc: [10, 12] },
      { loc: [13, 17] },
      { loc: [18, 23] },
      { loc: [18, 25] },
      { loc: [18, 27] },
      { loc: [18, 29] }
    ]}
  />
);
