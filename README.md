# hello-ts (@heiwa4126/hello-ts)

TypeScript でパッケージを書く練習兼テンプレート。

## install

```sh
npm install @heiwa4126/hello-ts
hello-ts
```

## usage

```javascript
// CommonJS example
const { hello } = require("@heiwa4126/hello-ts");

console.log(hello());
console.log(hello("world"));

// ESMScript and TypeScript example
import { hello } from "@heiwa4126/hello-ts";

console.log(hello());
console.log(hello("world"));
```

## 開発

```sh
npm i
npm run watch &
## ./src の下をいろいろ編集する。 ./dist に出来る
npm run lint
npm run lint:package
npm run format
npm test
git add --all && git commit -am '...'
npm verson patch
git push && git push --tags
npm run build && npm publish --access=public # or `npm run pack`
```
