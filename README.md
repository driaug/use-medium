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

## Remarks
### Proxy
This project makes use of a free Proxy service to access the Medium API. If for any reason you want to use another service then you can specify it in the configuration paramters
```ts
const articles = useMedium("driaug", {
  proxy: "https://my-custom-proxy.com/"
});
```
The above configuration will result in the following endpoint: `https://my-custom-proxy.com/https://medium.com/feed/@driaug`.