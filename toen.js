import { showChat } from "https://code4fukui.github.io/ask/showChat.js";

const s = Deno.args[0];
if (!s) {
  console.log("toen [Japanese text]");
  Deno.exit(1);
}
const prompt = "下記の日本語英語に翻訳してください。返答は端的に英語のみでOKです。\n" + s;
await showChat(prompt);
