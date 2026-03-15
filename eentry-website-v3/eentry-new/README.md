# イーエントリー株式会社 新ウェブサイト

## ファイル構成

```
eentry-website/
├── index.html          # メインページ（シングルページ構成）
├── css/
│   └── style.css       # 全スタイル定義
├── js/
│   └── main.js         # インタラクション・アニメーション
└── images/             # 画像フォルダ（写真を追加してください）
```

## カスタマイズが必要な箇所

### 1. 代表者プロフィール写真
以下の箇所に岡部正寛社長の写真を挿入してください：
- **ヒーローセクション**: `.hero-photo-frame` の placeholder を `<img>` タグに置き換え
- **プロフィールセクション**: `.profile-photo-box` の placeholder を `<img>` タグに置き換え

```html
<!-- 例：写真の挿入 -->
<img src="images/okabe-masahiro.jpg" alt="岡部正寛" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">
```

### 2. SNS リンクの更新
- X (Twitter): `https://twitter.com/masaokabe` → 実際のアカウントURLに変更
- note: `https://note.com` → 実際のnoteプロフィールURLに変更

### 3. お問い合わせフォーム
`js/main.js` のフォーム送信部分（setTimeout のシミュレーション部分）を、
実際の Google Apps Script エンドポイントに変更してください。

```javascript
// main.js の contact-form handler を修正
const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
  method: 'POST',
  body: new FormData(form)
});
```

### 4. Google Map の埋め込み
`#company` セクションの `.map-placeholder` を以下のように置き換え：
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  width="100%" height="280" style="border:0;border-radius:14px;"
  allowfullscreen loading="lazy">
</iframe>
```

### 5. OGP 画像
`index.html` の `<head>` に以下を追加：
```html
<meta property="og:image" content="https://www.eentry.co.jp/images/ogp.jpg">
```

## デザインコンセプト

**"生命と知性の交差点"** — Warm Authority

### カラーパレット
| 名称 | カラー | 用途 |
|------|--------|------|
| Navy | `#1B2855` | 権威・信頼（見出し・背景） |
| Gold | `#D4831A` | 生命力・温かさ（アクセント） |
| Green | `#3B7A5C` | ウェルネス・健康 |
| Cream | `#F8F5EF` | 読みやすさ・親近感（背景） |

### ブランド戦略の意図
「プロ患者社長」という独自のポジションは、**権威（経営者）と共感（患者）の二面性**を持つ。
- 従来のコーポレートサイトの冷たいデジタル感を排除
- ウォームなクリーム背景とゴールドアクセントで「人間味」を演出
- ネイビーで経営者としての信頼感を維持
- SNSへの動線を全セクションに意図的に配置

## 技術仕様
- HTML5 / CSS3 (カスタムプロパティ使用)
- バニラJavaScript（フレームワーク不要）
- Googleフォント: Noto Serif JP / Noto Sans JP
- レスポンシブ対応（モバイルファースト）
- スクロールアニメーション（IntersectionObserver）
- モバイルメニュー（ハンバーガー）

## 推奨画像サイズ
- 代表者写真（ヒーロー）: 760×960px 以上
- 代表者写真（プロフィール）: 600×800px 以上
- OGP画像: 1200×630px
