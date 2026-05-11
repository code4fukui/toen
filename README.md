# toen

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple command-line tool to translate Japanese to English using [Gemma3:4b](https://huggingface.co/google/gemma-3-4b-it) via a local inference server.

## Requirements

- [Deno](https://deno.land/)
- A local LLM server (e.g., [Ollama](https://ollama.com/)) running on `127.0.0.1:11434`.
- The `gemma3:4b` model available on the server. You can get it by running:
  ```sh
  ollama pull gemma3:4b
  ```

## Installation

Install the `toen` command globally:

```sh
deno install -f --global --allow-import --allow-net=127.0.0.1:11434 toen.js
```

## Usage

Provide the Japanese text to translate as a command-line argument. Be sure to quote the text.

```sh
$ toen "今日はいい天気ですね"
It's nice weather today, isn't it?
```

If you have not installed the command, you can run the script directly:

```sh
deno run -A toen.js "今日はいい天気ですね"
```

## Uninstallation

```sh
deno uninstall --global toen
```

## Dependencies

- **Model**: [Gemma3:4b](https://huggingface.co/google/gemma-3-4b-it)
- **Library**: [code4fukui/ask](https://github.com/code4fukui/ask)

## License

MIT License