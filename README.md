# Svelte Sports App

This is a test project to introduce [myself](https://github.com/alex-bowers) to Svelte. I have not included a lot of styles or any tests.

The app pulls articles from an API and then displays them.

## Screenshots

**Mobile**

<img src="https://i.gyazo.com/86dc08bff1d1eedd0b079a0e01de796f.png" data-canonical-src="https://i.gyazo.com/86dc08bff1d1eedd0b079a0e01de796f.png" height="500" />

**Desktop**

[![Image from Gyazo](https://i.gyazo.com/9322a64915da6b8aa9c9ca4cc0c1ff35.png)](https://gyazo.com/9322a64915da6b8aa9c9ca4cc0c1ff35)

## To Get Started

You will need to familiarise yourself with [NewsAPI](https://newsapi.org/). Then get an API Key.

Then create a `.env` file in the root directory. Add the following parameters and set the values based on what you want from NewsAPI.

```
NEWS_URL=
NEWS_KEY=
```

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000).
