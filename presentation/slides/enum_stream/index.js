import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="elixir"
    code={require('raw-loader!./enum_stream.ex')}
    ranges={[
      { loc: [0, 30], title: 'Enumerable, Stream' },
      { loc: [0, 2] },
      { loc: [3, 5] },
      { loc: [6, 8] },
      { loc: [9, 14] },
      { loc: [15, 21] },
      { loc: [22, 23] },
      { loc: [22, 24] },
      { loc: [25, 26] },
      { loc: [25, 27] },
      { loc: [25, 29] }
    ]}
  />
);
