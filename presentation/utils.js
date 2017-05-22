import React, { Component } from 'react';

import { Layout, Fill, CodePane } from 'spectacle';

export class SnippetSlide extends Component {
  render() {
    const { snippets } = this.props;
    return (
      <Layout>
        {snippets.map((snippet, index) => (
          <Fill key={index}>
            <CodePane {...snippet} />
          </Fill>
        ))}
      </Layout>
    );
  }
}
