![Decorative Banner](https://banners.beyondco.de/Use-Medium.png?theme=light&packageManager=yarn+add&packageName=use-medium&pattern=leaf&style=style_1&description=Get+your+latest+Medium+articles+in+React&md=1&showWatermark=0&fontSize=100px&images=rss)

## Installation
- `npm i use-medium`
- `yarn add use-medium`

## Usage
```tsx
import { useMedium } from 'use-medium';

const Articles = () => {
    const articles = useMedium("driaug");

    return (
      <ul>
        {articles.map(article => (
          <li key={article.guid}>
            <a href={article.link}>{article.title}</a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    );
};
```