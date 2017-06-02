import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./pattern_matching.ex')}
    ranges={[
      { loc: [0, 19], title: 'Pattern Matching' },
      { loc: [0, 1] },
      { loc: [0, 3] },
      { loc: [4, 5] },
      { loc: [6, 7] },
      { loc: [6, 9] },
      { loc: [6, 12] },
      { loc: [13, 14] },
      { loc: [13, 16] },
      { loc: [13, 18] }
    ]}
  />
);
