# 麻雀点数計算プロジェクト

このプロジェクトは、麻雀の点数計算を行うWebアプリケーションです。
ロジック（バックエンド）と表示（フロントエンド）をTypeScriptで構築しています。

---

## プロジェクト構成

mahjong-project/ ├── mahjong-score-calc/ # 点数計算のロジック（TypeScript）
                 ├── mahjong-score-ui/ # ユーザーインターフェース（React + Vite）

---

## 使用技術

### バックエンド（mahjong-score-calc）

- TypeScript
- 独自の点数計算アルゴリズム（以下のルールに対応）：
  - 青天井（unlimited）
  - 切り上げ満貫あり（withRoundingMangan）
  - 切り上げ満貫なし（strict）

### フロントエンド（mahjong-score-ui）

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- TypeScript
- ESLint（静的解析ツール）

---

## 開発環境の使い方

### 1. このリポジトリをクローン

```bash
git clone <このリポジトリのURL>
cd mahjong-project

cd mahjong-score-calc
npm install

cd ../mahjong-score-ui
npm install

cd mahjong-score-ui
npm run dev

