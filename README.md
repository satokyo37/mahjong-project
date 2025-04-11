# 麻雀点数計算プロジェクト

このプロジェクトは、麻雀の点数計算を行うWebアプリケーションです。
ロジック（バックエンド）と表示（フロントエンド）をTypeScriptで構築しています。

---

## バックエンド（mahjong-score-calc）

- TypeScript
- 独自の点数計算アルゴリズム（以下のルールに対応）：
  - 青天井（unlimited）
  - 切り上げ満貫あり（withRoundingMangan）
  - 切り上げ満貫なし（strict）

## フロントエンド（mahjong-score-ui）

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- TypeScript
- ESLint（静的解析ツール）

---

## 依存関係のインストール

### npmのインストール
npm install

### reactのインストール
npm install react react-dom
npm install --save-dev @types/react @types/react-dom
