import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useMedium } from '../.';

const App = () => {
  const medium = useMedium('driaug');

  if (!medium) {
    return <p>Loading your latest articles</p>;
  }

  return medium.map(article => {
    return (
      <article key={article.guid}>
        <p className={'title'}>{article.title}</p>
        <p className={'description'}>{article.description}</p>
        <a href={article.link} target={'_blank'} rel={'noreferrer'}>
          Read the article
        </a>
      </article>
    );
  });
};

ReactDOM.render(<App />, document.getElementById('root'));
