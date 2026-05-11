# toen

ローカルの推論サーバーを介して [Gemma3:4b](https://huggingface.co/google/gemma-3-4b-it) を使用し、日本語を英語に翻訳するシンプルなコマンドラインツールです。

## 要件

- [Deno](https://deno.land/)
- `127.0.0.1:11434` で稼働するローカルLLMサーバー（例: [Ollama](https://ollama.com/)）
- サーバー上で `gemma3:4b` モデルが利用可能であること。以下のコマンドを実行して取得できます:
  ```sh
  ollama pull gemma3:4b
  ```

## インストール

`toen` コマンドをグローバルにインストールします:

```sh
deno install -f --global --allow-import --allow-net=127.0.0.1:11434 toen.js
```

## 使い方

翻訳する日本語のテキストをコマンドライン引数として指定します。テキストは必ず引用符で囲んでください。

```sh
$ toen "今日はいい天気ですね"
It's nice weather today, isn't it?
```

コマンドをインストールしていない場合は、スクリプトを直接実行することも可能です:

```sh
deno run -A toen.js "今日はいい天気ですね"
```

## アンインストール

```sh
deno uninstall --global toen
```

## 依存関係

- **モデル**: [Gemma3:4b](https://huggingface.co/google/gemma-3-4b-it)
- **ライブラリ**: [code4fukui/ask](https://github.com/code4fukui/ask)

## ライセンス

MIT License
