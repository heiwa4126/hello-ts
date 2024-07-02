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
npm run ex0
## ./src の下をいろいろ編集する。 ./dist に出来る
npm run lint
npm run lint:package
npm run format
npm test
## cjsとesmのテスト
npm run build
npm run linklocal
npm run ex1
npm run ex2
# ローカルに発行して試す。1個上にtarballできる。よそのプロジェクトでnpm i foo.tgzする
npm run pack
# 発行準備 & バージョニング
git add --all && git commit -am '...'
npm verson patch
git push && git push --tags
# npmjs.com に発行
npm run build && npm publish --access=public
```

TypeScript めんどくさい...
