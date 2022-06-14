import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useMedium } from '../.';

const App = () => {
  const { articles } = useMedium('driaug');

  if (!articles) {
    return <p>Loading your latest articles</p>;
  }

  return articles.map(article => {
    return (
      <article key={article.guid}>
        <img src={article.image} width={500} alt={article.title}/>
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
