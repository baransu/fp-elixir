import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    transition={[]}
    lang="js"
    code={require('raw-loader!./recursion.txt')}
    ranges={[
      { loc: [0, 22], title: 'Rekurencja' },
      { loc: [0, 7], note: 'Wersja iteracyjna' },
      { loc: [8, 12], note: 'Wersja rekurencyjna' },
      { loc: [13, 17] },
      { loc: [18, 21] },
      { loc: [13, 21] }
    ]}
  />
);
