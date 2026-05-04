# 必要な画像リスト

すべての画像は `ace/img/` 以下に配置します。  
画像がない場合は CSS で自動的にプレースホルダーが表示されるので、
後から差し替えるだけで反映されます。

---

## 背景画像 (`img/bg/`) — 6枚

| ファイル名 | 内容 | 推奨サイズ |
|---|---|---|
| `courtroom_wide.png` | 法廷全景（両サイドが見渡せる横構図） | 800×480 |
| `courtroom_judge.png` | 裁判長席（中央から見上げる構図） | 800×480 |
| `courtroom_defense.png` | 弁護側席（左側視点） | 800×480 |
| `courtroom_prosecution.png` | 検察側席（右側視点） | 800×480 |
| `courtroom_witness.png` | 証言台（中央視点） | 800×480 |
| `corridor.png` | 法廷外の廊下 | 800×480 |

---

## キャラクタースプライト (`img/char/`) — 22枚

立ち絵。背景は透過PNG推奨。キャラクターは画面下部に表示されます。

### 成歩堂 龍一（弁護士・プレイヤー） — 6ポーズ
| ファイル名 | 表情/ポーズ |
|---|---|
| `phoenix_normal.png` | 通常・待機 |
| `phoenix_point.png` | 指差し（異議！ポーズ） |
| `phoenix_think.png` | 考える・うつむき |
| `phoenix_surprised.png` | 驚き |
| `phoenix_confident.png` | 自信満々 |
| `phoenix_damaged.png` | ダメージ（心証悪化時） |

### 綾里 真宵（助手） — 4ポーズ
| ファイル名 | 表情/ポーズ |
|---|---|
| `maya_normal.png` | 通常 |
| `maya_happy.png` | 喜び |
| `maya_worried.png` | 心配 |
| `maya_excited.png` | 興奮 |

### 御剣 怜侍（検察官） — 5ポーズ
| ファイル名 | 表情/ポーズ |
|---|---|
| `edgeworth_normal.png` | 通常 |
| `edgeworth_point.png` | 指差し（異議！ポーズ） |
| `edgeworth_smirk.png` | 不敵な笑み |
| `edgeworth_surprised.png` | 驚き |
| `edgeworth_thinking.png` | 考える |

### 裁判長 — 3ポーズ
| ファイル名 | 表情/ポーズ |
|---|---|
| `judge_normal.png` | 通常 |
| `judge_surprised.png` | 驚き |
| `judge_stern.png` | 厳しい顔 |

### 上条 京介（証人） — 5ポーズ
| ファイル名 | 表情/ポーズ |
|---|---|
| `kamijo_normal.png` | 通常 |
| `kamijo_nervous.png` | 焦り・動揺 |
| `kamijo_surprised.png` | 驚き |
| `kamijo_lying.png` | 嘘をついている（強がり） |
| `kamijo_breakdown.png` | 崩壊（真実を告白する直前） |

> **推奨サイズ**: 幅 220px × 高さ 320px（透過PNG）  
> 足元から頭まで収まるように描いてください。

---

## 証拠品画像 (`img/evidence/`) — 4枚

証拠品メニューに表示されるアイコン/サムネイル。

| ファイル名 | 内容 | 推奨サイズ |
|---|---|---|
| `autopsy.png` | 検死報告書（書類のイメージ） | 140×140 |
| `elevator_log.png` | エレベーター記録（印刷物） | 140×140 |
| `work_log.png` | 勤怠記録（タイムカードなど） | 140×140 |
| `security_cam.png` | 防犯カメラ映像（スクリーンショット風） | 140×140 |

---

## ポートレート画像 (`img/portrait/`) — 4枚

フラッシュ演出（「異議あり！」など）の際に左端に表示されるバストアップ。

| ファイル名 | 内容 | 推奨サイズ |
|---|---|---|
| `phoenix.png` | 成歩堂 龍一（指差し顔） | 200×280 |
| `edgeworth.png` | 御剣 怜侍（指差し顔） | 200×280 |
| `kamijo.png` | 上条 京介（驚き顔） | 200×280 |
| `maya.png` | 綾里 真宵（通常顔） | 200×280 |

> 背景は透過PNG推奨。

---

## UI画像 (`img/ui/`) — 3枚（オプション）

フラッシュ演出のテキスト部分を画像で置き換えたい場合に使用。  
**未指定の場合はCSSのテキストで代用されます（省略可）。**

| ファイル名 | 内容 | 推奨サイズ |
|---|---|---|
| `objection.png` | 「異議あり！」ロゴ | 300×120 |
| `hold_it.png` | 「待った！」ロゴ | 300×120 |
| `take_that.png` | 「どうだ！」ロゴ | 300×120 |

---

## 合計

| カテゴリ | 枚数 |
|---|---|
| 背景 | 6枚 |
| キャラクタースプライト | 22枚 |
| 証拠品 | 4枚 |
| ポートレート | 4枚 |
| UIロゴ（省略可） | 3枚 |
| **合計** | **39枚（必須 36枚）** |

---

## 差し替え方法

`game.js` の先頭にある `IMAGES` オブジェクトにパスが集約されています。  
デフォルトでは `img/` 以下の上記パスを参照しています。  
別のパスやURLに変更したい場合は `IMAGES` オブジェクトを編集してください。

```js
const IMAGES = {
  bg: {
    courtroom_wide: 'img/bg/courtroom_wide.png', // ← ここを変更
    ...
  },
  ...
};
```

画像が存在しない場合でも、CSSのプレースホルダーが自動表示されるので
ゲームは問題なく動作します。
