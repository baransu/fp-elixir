import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./case_cond_if.ex')}
    ranges={[
      { loc: [0, 45], title: 'Case, Cond, If/Unless' },
      { loc: [0, 4] },
      { loc: [5, 9] },
      { loc: [10, 14] },
      { loc: [15, 23] },
      { loc: [24, 30] },
      { loc: [31, 34] },
      { loc: [35, 38] },
      { loc: [39, 44] }
    ]}
  />
);
