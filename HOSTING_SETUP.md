# Hosting Setup

The school laptop does not install anything. It just opens the final website URL.

The AI runs on the hosted server:

```text
browser -> your website URL -> /api/mark -> free hosted AI
```

## Render

1. Push this folder to GitHub.
2. In Render, create a new Blueprint or Web Service from the repo.
3. Render gives you a URL like:

```text
https://science-at2-quiz.onrender.com
```

That is the URL you use on the school laptop.

No `npm install` packages are needed. The server uses only built-in Node features.

## Optional Better AI

The default setup uses a free no-key hosted AI route. It can be slower or less reliable than a paid/provider API.

If you ever get a free Gemini API key, you can add this environment variable in Render:

```text
GEMINI_API_KEY=your Gemini key
```

Then the same URL will use Gemini instead.
