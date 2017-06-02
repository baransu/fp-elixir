import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./string_bin_char_list.ex')}
    ranges={[
      { loc: [0, 39], title: 'String, Binary, Char list' },
      { loc: [0, 1] },
      { loc: [0, 3] },
      { loc: [4, 5] },
      { loc: [4, 7] },
      { loc: [8, 12] },
      { loc: [13, 14] },
      { loc: [15, 16] },
      { loc: [17, 18] },
      { loc: [19, 20] },
      { loc: [21, 23] },
      { loc: [24, 26] },
      { loc: [27, 29] },
      { loc: [30, 32] },
      { loc: [30, 35] },
      { loc: [30, 38] }
    ]}
  />
);
