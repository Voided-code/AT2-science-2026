# Ollama Setup Guide (FREE AI Grading)

## Step 1: Install Ollama

1. Download from https://ollama.ai/download
2. Choose Windows installer
3. Install with default settings

## Step 2: Start Ollama

Open PowerShell and run:
```powershell
ollama run llama2
```

This downloads Llama 2 (~4GB) and starts the server on `http://localhost:11434`

**First run takes ~5-10 minutes** (downloading the model). Keep this window open while using the quiz.

## Step 3: Open the Quiz

- Reload the quiz page in your browser
- The dot next to "Question X" will turn **GREEN** if Ollama is connected
- Type an answer and submit — it will grade automatically using your local AI

## Troubleshooting

**Dot is still red?**
- Make sure Ollama is running (PowerShell window should show `listening on 127.0.0.1:11434`)
- Try refreshing the quiz page
- Check Windows Firewall isn't blocking port 11434

**Want to use a different model?**
Edit `script.js` line ~4 and change:
```javascript
var OLLAMA_MODEL = 'llama2'; // Change to: 'neural-chat', 'mistral', 'orca-mini', etc.
```

Then run: `ollama run neural-chat` (or whichever model)

## Alternative Models (Faster/Smaller)

For faster grading on older computers:
- `ollama run orca-mini` (~1.3GB, fastest)
- `ollama run mistral` (~4GB, balanced)
- `ollama run neural-chat` (~4GB, good for Q&A)

## How it Works

1. You type an answer
2. Quiz sends it to Ollama running locally on your computer
3. Llama 2 reads your answer and the expected answer
4. Returns a score (0 or 1) and brief feedback
5. **All happens offline** — no internet needed after model downloads
