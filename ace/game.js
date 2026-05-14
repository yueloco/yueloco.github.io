'use strict';

/* ================================================================
   画像マニフェスト
   実際の画像ファイルを用意したらここのパスを書き換えてください。
   存在しない場合はCSSのプレースホルダーが表示されます。
   ================================================================ */
const IMAGES = {
  bg: {
    courtroom_wide:        'img/bg/courtroom_wide.png',
    courtroom_judge:       'img/bg/courtroom_judge.png',
    courtroom_defense:     'img/bg/courtroom_defense.png',
    courtroom_prosecution: 'img/bg/courtroom_prosecution.png',
    courtroom_witness:     'img/bg/courtroom_witness.png',
    corridor:              'img/bg/corridor.png',
  },
  characters: {
    phoenix:   {
      normal:     'img/char/phoenix_normal.png',
      point:      'img/char/phoenix_point.png',
      think:      'img/char/phoenix_think.png',
      surprised:  'img/char/phoenix_surprised.png',
      confident:  'img/char/phoenix_confident.png',
      damaged:    'img/char/phoenix_damaged.png',
    },
    maya: {
      normal:    'img/char/maya_normal.png',
      happy:     'img/char/maya_happy.png',
      worried:   'img/char/maya_worried.png',
      excited:   'img/char/maya_excited.png',
    },
    edgeworth: {
      normal:    'img/char/edgeworth_normal.png',
      point:     'img/char/edgeworth_point.png',
      smirk:     'img/char/edgeworth_smirk.png',
      surprised: 'img/char/edgeworth_surprised.png',
      thinking:  'img/char/edgeworth_thinking.png',
    },
    judge: {
      normal:    'img/char/judge_normal.png',
      surprised: 'img/char/judge_surprised.png',
      stern:     'img/char/judge_stern.png',
    },
    kamijo: {
      normal:    'img/char/kamijo_normal.png',
      nervous:   'img/char/kamijo_nervous.png',
      surprised: 'img/char/kamijo_surprised.png',
      breakdown: 'img/char/kamijo_breakdown.png',
      lying:     'img/char/kamijo_lying.png',
    },
    misaki: {
      normal:    'img/char/misaki_normal.png',
    },
    kimura: {
      normal:    'img/char/kimura_normal.png',
      nervous:   'img/char/kimura_nervous.png',
      surprised: 'img/char/kimura_surprised.png',
      breakdown: 'img/char/kimura_breakdown.png',
      lying:     'img/char/kimura_lying.png',
    },
    kuroda: {
      normal:    'img/char/kuroda_normal.png',
    },
    tamura: {
      normal:    'img/char/tamura_normal.png',
      nervous:   'img/char/tamura_nervous.png',
      surprised: 'img/char/tamura_surprised.png',
      breakdown: 'img/char/tamura_breakdown.png',
    },
    fujiwara: {
      normal:    'img/char/fujiwara_normal.png',
    },
    sakamoto: {
      normal:    'img/char/sakamoto_normal.png',
      nervous:   'img/char/sakamoto_nervous.png',
      surprised: 'img/char/sakamoto_surprised.png',
      lying:     'img/char/sakamoto_lying.png',
      breakdown: 'img/char/sakamoto_breakdown.png',
    },
  },
  evidence: {
    autopsy:        'img/evidence/autopsy.png',
    elevator_log:   'img/evidence/elevator_log.png',
    work_log:       'img/evidence/work_log.png',
    security_cam:   'img/evidence/security_cam.png',
    knife:          'img/evidence/knife.png',
    alibi_card:     'img/evidence/alibi_card.png',
    mansion_cam:    'img/evidence/mansion_cam.png',
    diary:          'img/evidence/diary.png',
    wine_bottle:    'img/evidence/wine_bottle.png',
    inn_cam:        'img/evidence/inn_cam.png',
    medical_report: 'img/evidence/medical_report.png',
    guest_register:  'img/evidence/guest_register.png',
    insurance_doc:   'img/evidence/insurance_doc.png',
    phone_record:    'img/evidence/phone_record.png',
    neighbor_log:    'img/evidence/neighbor_log.png',
    forensics:       'img/evidence/forensics.png',
  },
  ui: {
    objection: 'img/ui/objection.png',
    hold_it:   'img/ui/hold_it.png',
    take_that: 'img/ui/take_that.png',
  },
  portraits: {
    phoenix:   'img/portrait/phoenix.png',
    edgeworth: 'img/portrait/edgeworth.png',
    kamijo:    'img/portrait/kamijo.png',
    maya:      'img/portrait/maya.png',
  },
};

/* ================================================================
   証拠品データ
   ================================================================ */
const EVIDENCE_DATA = {
  autopsy: {
    id: 'autopsy', case: 1,
    name: '検死報告書',
    icon: '📋',
    desc: '被害者・山本隆の検死報告書。\n死亡推定時刻：22:00〜23:00。\n鈍器による後頭部への一撃が致死原因。',
  },
  elevator_log: {
    id: 'elevator_log', case: 1,
    name: 'エレベーター記録',
    icon: '🗒️',
    desc: '当日のエレベーター運行記録（写し）。\n22:20 → 8階行き\n23:05 → 1階行き\n※オリジナルは検察が押収',
  },
  work_log: {
    id: 'work_log', case: 1,
    name: '勤怠記録',
    icon: '🕐',
    desc: '被告・田中浩二の当日の勤怠記録。\n退社打刻：21:03\n警備員の署名あり。',
  },
  security_cam: {
    id: 'security_cam', case: 1,
    name: '防犯カメラ映像',
    icon: '📷',
    desc: '1Fエントランスの防犯カメラ映像。\n21:05、田中に見える人物が\nビルを出る姿が確認できる。',
  },
  /* ---- 第2話の証拠 ---- */
  knife: {
    id: 'knife', case: 2,
    name: '凶器の包丁',
    icon: '🔪',
    desc: '現場で発見された刃渡り18cmの包丁。\n被告・中村美咲の指紋は\n柄の部分から検出されていない。',
  },
  alibi_card: {
    id: 'alibi_card', case: 2,
    name: '社員証ログ',
    icon: '🪪',
    desc: '中村美咲の入退館記録。\n3月20日 入館：18:00\n　　　　退館：19:25\n会社のセキュリティゲート記録。',
  },
  mansion_cam: {
    id: 'mansion_cam', case: 2,
    name: 'マンション防犯映像',
    icon: '🎥',
    desc: 'マンション玄関の防犯カメラ映像。\n18:42、証人・木村が外出。\n18:55、証人・木村が帰宅。\n美咲の帰宅は19:30。',
  },
  diary: {
    id: 'diary', case: 2,
    name: '高橋拓海の日記',
    icon: '📔',
    desc: '被害者・高橋拓海の私的な日記。\n「最近、美咲が誰かに尾けられている。\n　隣人の様子もおかしい。一度問い詰めるか」\nと記載がある。',
  },
  /* ---- 第3話の証拠 ---- */
  wine_bottle: {
    id: 'wine_bottle', case: 3,
    name: 'ワインボトル',
    icon: '🍷',
    desc: '現場・書斎で発見されたボトル。\n黒田の指紋が柄の部分に検出された。\n被害者と黒田が夕食時に共に飲んだとされる。',
  },
  inn_cam: {
    id: 'inn_cam', case: 3,
    name: '旅館システムログ',
    icon: '🖥️',
    desc: '旅館「白川荘」の玄関システムログ。\n21:30　黒田 誠　外出\n22:15　黒田 誠　帰館\n自動記録のため改ざん不可。',
  },
  medical_report: {
    id: 'medical_report', case: 3,
    name: '毒物検査報告書',
    icon: '🧪',
    desc: '被害者・白川義一の毒物検査結果。\n使用毒物：アコニチン（トリカブト由来）\n致死量到達まで：30〜60分\n推定投与時刻：21:30〜22:00',
  },
  guest_register: {
    id: 'guest_register', case: 3,
    name: '宿泊台帳',
    icon: '📒',
    desc: '黒田が宿泊したときの台帳。\n「旅館売却の相談のため、週1で来館」\nと旅館側のメモあり。\n来館歴：計4回（直近2週間）',
  },
  /* ---- 第4話の証拠 ---- */
  insurance_doc: {
    id: 'insurance_doc', case: 4,
    name: '保険証書',
    icon: '📄',
    desc: '被害者・藤原浩一の生命保険証書。\n保険金額：5,000万円\n受取人：坂本 純一（旧友として登録）\n締結日：2年前',
  },
  phone_record: {
    id: 'phone_record', case: 4,
    name: '通話記録',
    icon: '📱',
    desc: '事件当日の通話記録。\n21:45 被害者→坂本への着信\n通話時間：3分12秒\n22:00以降の着信・発信なし',
  },
  neighbor_log: {
    id: 'neighbor_log', case: 4,
    name: 'マンション入退館記録',
    icon: '🔐',
    desc: 'マンションのオートロック入退館記録。\n21:52　坂本 純一　入館\n22:18　坂本 純一　退館\n自動システムによる記録のため改ざん不可。',
  },
  forensics: {
    id: 'forensics', case: 4,
    name: '死因鑑定書',
    icon: '🔬',
    desc: '司法解剖による死因鑑定書。\n死因：頸部圧迫による窒息死\n推定死亡時刻：22:00〜22:30\n※鈍器による外傷は認められない',
  },
};

/* ================================================================
   キャラクターデータ（表示名・スプライト情報）
   ================================================================ */
const CHARS = {
  phoenix:   { id: 'phoenix',   label: '成歩堂 龍一\n（弁護士）',  spkClass: 'spk-phoenix',   spkName: '成歩堂 龍一' },
  maya:      { id: 'maya',      label: '綾里 真宵\n（助手）',      spkClass: 'spk-maya',      spkName: '綾里 真宵' },
  edgeworth: { id: 'edgeworth', label: '御剣 怜侍\n（検察官）',    spkClass: 'spk-edgeworth', spkName: '御剣 怜侍' },
  judge:     { id: 'judge',     label: '裁判長',                   spkClass: 'spk-judge',     spkName: '裁判長' },
  kamijo:    { id: 'kamijo',    label: '上条 京介\n（証人）',       spkClass: 'spk-kamijo',    spkName: '上条 京介' },
  misaki:    { id: 'misaki',    label: '中村 美咲\n（被告人）',     spkClass: 'spk-misaki',    spkName: '中村 美咲' },
  kimura:    { id: 'kimura',    label: '木村 真一\n（証人）',       spkClass: 'spk-kimura',    spkName: '木村 真一' },
  kuroda:    { id: 'kuroda',    label: '黒田 誠\n（被告人）',       spkClass: 'spk-kuroda',    spkName: '黒田 誠' },
  tamura:    { id: 'tamura',    label: '田村 玲子\n（証人）',       spkClass: 'spk-tamura',    spkName: '田村 玲子' },
  fujiwara:  { id: 'fujiwara',  label: '藤原 夏美\n（被告人）',     spkClass: 'spk-fujiwara',  spkName: '藤原 夏美' },
  sakamoto:  { id: 'sakamoto',  label: '坂本 純一\n（証人）',       spkClass: 'spk-sakamoto',  spkName: '坂本 純一' },
  narration: { id: 'none',      label: '',                         spkClass: 'spk-narration', spkName: '' },
  system:    { id: 'none',      label: '',                         spkClass: 'spk-system',    spkName: '―' },
};

/* ================================================================
   シナリオデータ
   各ステップ: { speaker, text, bg, left, right, center, leftPose,
                 rightPose, centerPose, anim, goto }
   ================================================================ */
const SCENES = {};

/* ---- オープニング ---- */
SCENES['opening'] = [
  { type: 'scene_label', text: '第1日　午前9時\n地方裁判所 第3法廷', bg: 'black', goto: 'court_open' },
];

SCENES['court_open'] = [
  {
    speaker: 'narration', bg: 'courtroom_wide',
    text: '― とある地方裁判所。第3法廷。',
  },
  {
    speaker: 'narration', bg: 'courtroom_wide',
    text: '田中浩二は、会社の上司・山本隆部長を\n殺害した疑いで起訴されている。',
  },
  {
    speaker: 'narration', bg: 'courtroom_wide',
    text: '弁護を引き受けたのは、\n新人弁護士・成歩堂 龍一。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: 'では、公判を開廷いたします。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本件は、3月15日夜に発生した\n株式会社スターライト8階での殺人事件です。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '検察側、準備は？',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: 'もちろんです、裁判長。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'point',
    text: '本件は明白です。被告・田中浩二が\n被害者を撲殺した証拠がそろっています。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think',
    text: '（証拠がそろっている… か。\n　でも何かがおかしい）',
  },
  {
    speaker: 'maya', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'normal',
    text: '成歩堂くん、緊張してる？',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'happy',
    text: '少しな。でも——田中さんは無実だ。\nそれだけは確かだ。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'smirk',
    text: '検察側が冒頭陳述を行います。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'point',
    text: '被告は当日22時頃、\n8階のオフィスで山本部長を撲殺しました。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'point',
    text: '凶器は現場で発見されたガラス製の灰皿。\n被告のネクタイピンも現場に落ちていました。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think',
    text: '（ネクタイピン…田中さんは\n　「落とした覚えがない」と言っていた）',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: 'では証人を呼んでください。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本件の唯一の目撃者です。\n証人は宣誓を。',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal',
    text: '私、上条京介は……\n真実のみを述べることを誓います。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '証人、当日夜の状況を\n証言してください。',
    goto: 'testimony_intro',
  },
];

/* ---- 証言導入 ---- */
SCENES['testimony_intro'] = [
  {
    speaker: 'system', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal',
    text: '＜証言＞　上条 京介の証言が始まります。',
  },
  {
    type: 'crossexam_start',
  },
];

/* ---- 矛盾発見後 ---- */
SCENES['after_contradiction'] = [
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: 'な……なんと！\n証人、どういうことですか！',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'breakdown',
    text: 'う……うぅ……',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous',
    text: 'わかりました……全て話します。',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal',
    text: 'エレベーター記録を……\n改ざんしたのは、私です。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: '記録の改ざん！？',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal',
    text: '22時20分、私は8階に上がりました。\n山本部長から書類を受け取るために。',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous',
    text: 'でも部長は……既に倒れていたんです。\n床に、血を流して……',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal',
    text: '怖くなって……\nエレベーター記録を書き換えてしまいました。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'surprised',
    text: 'つまり……証人が8階に着いた時、\n部長はすでに死亡していた！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'surprised',
    text: '……！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'thinking',
    text: '（22時20分に証人が8階に到着した時点で\n　部長は既に死んでいた……）',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '田中さんの退社打刻は21時3分！\n防犯カメラには21時5分に\nビルを出る姿が映っています！',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    anim: 'objection',
    text: '被告には、アリバイが成立します！',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: 'む……これは重大な事実です。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'stern',
    text: '本公判は一時中断とします。\n検察は証拠を再精査すること。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本日の審理はここまでとします。\n閉廷！',
  },
  {
    goto: 'epilogue',
  },
];

/* ---- エピローグ ---- */
SCENES['epilogue'] = [
  {
    type: 'scene_label', text: '第1日　審理終了後\n法廷の廊下', bg: 'corridor', goto: 'epilogue_2',
  },
];

SCENES['epilogue_2'] = [
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'excited',
    text: '成歩堂くん、すごかったよ！\n証言の矛盾、バッチリ見つけたね！',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'happy',
    text: 'エレベーター記録が鍵だった。\n数字は嘘をつかない。',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'worried',
    text: 'でも……本当の犯人は\nまだわからないんでしょ？',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'think',
    right: 'maya', rightPose: 'worried',
    text: '……ああ。上条が8階に着いた22時20分より前に\n山本さんを殺した人物がいるはずだ。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'normal',
    text: '田中さんのためにも、\n真実を明らかにしないとな。',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'excited',
    text: 'うん！一緒にがんばろう、成歩堂くん！',
  },
  {
    speaker: 'narration', bg: 'corridor',
    text: '―― 第一回公判　終了 ――',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '真実は……まだ、闇の中にある。\n\n翌日、第二回公判が始まろうとしていた――',
  },
  { type: 'scene_label', text: '第2日　午前10時\n地方裁判所 第3法廷', bg: 'black', goto: 'day2_court' },
];

/* ================================================================
   反対尋問データ
   ================================================================ */
const CROSSEXAM = {
  witnessName: '上条 京介',
  maxHealth: 5,

  statements: [
    /* 0 */
    {
      text: 'その夜、私は管理人として\n22時から翌朝2時の夜間勤務をしておりました。',
      pressScene: [
        { speaker: 'phoenix',   text: '証人、22時から勤務と\nおっしゃいましたね？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'kamijo',    text: 'はい、そうです。', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal' },
        { speaker: 'phoenix',   text: '22時「から」——ということは\n21時台は席を離れていた？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
        { speaker: 'kamijo',    text: '……少し前から席についていましたよ。\n21時55分頃には。', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous' },
        { speaker: 'phoenix',   text: '（21時55分……田中さんが退社した\n　21時3分より後だ）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: null,
    },
    /* 1 */
    {
      text: '田中さんが帰ったのは21時頃です。\nエントランスで見送りました。',
      pressScene: [
        { speaker: 'phoenix',   text: '「見送った」というのは\nどのような状況で？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'kamijo',    text: '受付カウンターのガラス越しに\n見えたんです。', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal' },
        { speaker: 'phoenix',   text: 'ガラス越しに……顔まで\nはっきり確認できましたか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
        { speaker: 'kamijo',    text: '……それは、まあ……\nでも田中さんのコートでしたよ。', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous' },
        { speaker: 'maya',      text: '（コートで人を特定するの？\n　それって証言になるの？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal', right: 'maya', rightPose: 'worried' },
      ],
      contradicts: null,
    },
    /* 2 ★ここが矛盾のある証言 */
    {
      text: '22時以降、エレベーターで\n8階に行った者はおりません。\n私が保証します。',
      pressScene: [
        { speaker: 'phoenix',   text: '断言できるんですか？\n「22時以降は誰もいない」と。', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point', anim: 'hold_it' },
        { speaker: 'kamijo',    text: 'もちろんです！\nエレベーター記録は私が管理しています！', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'lying' },
        { speaker: 'phoenix',   text: 'その記録を見れば\n証明できるんですね？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
        { speaker: 'kamijo',    text: '……で、できますとも！\n22時以降の8階行きは一切ありません！', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous' },
      ],
      pressUpdate: 'その記録を確認すれば\n一目瞭然です。22時以降、\nエレベーターで8階に行った者はおりません。',
      contradicts: 'elevator_log',
      wrongPenalty: '証拠の内容が証言と\n矛盾しません。',
    },
    /* 3 */
    {
      text: '深夜0時頃、8階の方向から\n物音が聞こえた気がしましたが……\n気のせいかと思いました。',
      pressScene: [
        { speaker: 'phoenix',   text: 'その「物音」について\nもう少し詳しく。', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'kamijo',    text: '「ガタン」という音でした。\n棚から物が落ちたような……', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal' },
        { speaker: 'phoenix',   text: '深夜0時の物音……\n被害者の死亡推定時刻は22時〜23時です。', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
        { speaker: 'maya',      text: '（時間がずれてる！\n　真犯人が何かを持ち出したの？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal', right: 'maya', rightPose: 'excited' },
      ],
      contradicts: null,
    },
    /* 4 */
    {
      text: '私は何も怪しいことは\nしておりません。\n田中さんが犯人に間違いありません。',
      pressScene: [
        { speaker: 'phoenix',   text: '「何も怪しいことはしていない」……\nでは、エレベーター記録を今すぐ\n見せてもらえますか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point' },
        { speaker: 'kamijo',    text: '……今は……持っていません。', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous' },
        { speaker: 'edgeworth', text: '異議あり！', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'point', anim: 'objection' },
        { speaker: 'edgeworth', text: 'エレベーター記録は\n既に検察が証拠として押収しています。', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal' },
        { speaker: 'judge',     text: 'むむ……では弁護側は\n手元の証拠で戦うしかありませんね。', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal' },
        { speaker: 'maya',      text: '（でも私たちも同じ記録の写しを\n　持ってるよね？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think', right: 'maya', rightPose: 'normal' },
      ],
      contradicts: null,
    },
  ],
};

/* ================================================================
   第2反対尋問データ
   ================================================================ */
const CROSSEXAM2 = {
  witnessName: '上条 京介',
  maxHealth: 5,
  contradictionLines: [
    { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
      text: '勤怠記録を見てください！\n8階の在室ログには15分の滞在記録があります！\n「すぐ戻った」は嘘です！' },
    { speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'surprised',
      text: 'そ……それは……！' },
    { speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'breakdown',
      text: '……もう……隠せません……！' },
  ],
  nextScene: 'day2_after_contradiction',
  statements: [
    /* 0 */
    {
      text: '8階に到着した際、\n部屋には誰もいませんでした。',
      pressScene: [
        { speaker: 'phoenix', text: '「誰もいなかった」——本当ですか？\n何か音や気配は感じませんでしたか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'kamijo', text: '……実は……', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous' },
        { speaker: 'kamijo', text: '非常階段の方から……\n何かが動く音がしたような……', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous' },
        { speaker: 'phoenix', text: '（非常階段……！）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'surprised' },
        { speaker: 'maya', text: '（誰かが階段で逃げた？\n　それって犯人じゃないの！？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal', right: 'maya', rightPose: 'worried' },
      ],
      contradicts: null,
    },
    /* 1 */
    {
      text: '私は今度こそ正直に\n証言しています。',
      pressScene: [
        { speaker: 'phoenix', text: '「今度こそ」……昨日は\n証言を偽りましたよね？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point' },
        { speaker: 'kamijo', text: '……それは……怖かったんです。\n死体を見て、パニックになって……', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous' },
        { speaker: 'kamijo', text: 'もし私が疑われたら……\nそう思って改ざんしてしまいました。', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal' },
        { speaker: 'phoenix', text: '（証人は何か……まだ隠している）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: null,
    },
    /* 2 ★矛盾 work_log */
    {
      text: '被害者を発見後、私は\nすぐにエレベーターで管理室へ戻りました。',
      pressScene: [
        { speaker: 'phoenix', text: '「すぐに」——それは何分くらいで？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'kamijo', text: '2、3分……いや、\nほんの一瞬でしたよ。', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous' },
        { speaker: 'phoenix', text: '（一瞬……勤怠記録と照らし合わせれば\n　はっきりするはずだ）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: 'work_log',
      wrongPenalty: 'この証拠では証言の矛盾を突けない。\n別の証拠を試してみてください。',
    },
  ],
};

/* ---- 第2日シーン ---- */
SCENES['day2_court'] = [
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '第二回公判を開廷いたします。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '昨日の証言で新たな事実が発覚しました。\n引き続き証人を尋問いたします。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'thinking',
    text: '……検察は昨日の証言を\n重く受け止めています。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '本日、証人に再度の証言を\n求めることに同意します。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'normal',
    text: '（今日こそ——真実を明らかにする）',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '証人・上条京介を\n再召喚します。',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous',
    text: '……よろしくお願いします。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '証人、8階での状況をより詳しく\n証言してください。',
    goto: 'day2_testimony',
  },
];

SCENES['day2_testimony'] = [
  {
    speaker: 'system', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous',
    text: '＜第二証言＞　上条 京介の再証言が始まります。\n勤怠記録に注目してください。',
  },
  { type: 'crossexam_start', ceData: 'crossexam2' },
];

SCENES['day2_after_contradiction'] = [
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'breakdown',
    text: '……実は……8階に15分ほど\n留まっていました。',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous',
    text: '倒れている部長を見て、\n助けられないか確認したんです……',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'breakdown',
    text: 'そして……非常階段のドアが\n閉まる音がして……',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous',
    text: '薄暗い廊下に、\n人影が見えたんです。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'surprised',
    right: 'maya', rightPose: 'surprised',
    text: '人影！？\n誰だったんですか！？',
  },
  {
    speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'normal',
    text: '……林 義雄……\n山本部長の直属の部下……副部長です。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: 'な……なんと！！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'surprised',
    text: '……！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'thinking',
    text: '（林副部長……彼は山本部長による\n　横領告発の被害者だ。動機がある……）',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    right: 'maya', rightPose: 'excited',
    anim: 'objection',
    text: '林義雄が8階に潜んでいた！\n被告・田中さんが退社した後に\n殺害は行われたんです！',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '検死報告書の死亡推定時刻は\n21時10分から21時50分。\n田中さんのアリバイは完璧です！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '…………',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'thinking',
    text: '（……成歩堂の言う通りだ。\n　証拠は全て田中の無実を指し示している）',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '……裁判長。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'point',
    text: '検察は、被告・田中浩二に対する\n起訴を取り下げます。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: 'な……！\n御剣検事、それは——',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'smirk',
    text: '真実の前には……\n検察も潔く非を認めるべきでしょう。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'stern',
    text: '……よろしい。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本件被告・田中浩二に対し、\n無　罪　を言い渡す！',
  },
  {
    speaker: 'narration', bg: 'courtroom_wide',
    text: '――　閉　廷　――',
  },
  { type: 'scene_label', text: '判決後\n法廷の廊下', bg: 'corridor', goto: 'ending' },
];

SCENES['ending'] = [
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'excited',
    text: 'やった！無罪！\n成歩堂くん、すごい！！',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'happy',
    text: '田中さんが助かった。\nそれだけで十分だ。',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'normal',
    text: 'でも……御剣さんって\nかっこよかったね。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'think',
    right: 'maya', rightPose: 'happy',
    text: '……あいつは昔から\nああいうやつなんだ。',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'normal',
    text: '……成歩堂。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'surprised',
    right: 'edgeworth', rightPose: 'normal',
    text: '御剣……',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'smirk',
    text: '今日は……負けを認めよう。\nだが次は負けん。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'edgeworth', rightPose: 'smirk',
    text: 'ああ。法廷で会おう、御剣。',
  },
  {
    speaker: 'narration', bg: 'corridor',
    text: '真実は、明かされた。\n田中浩二は自由の身となった。',
  },
  {
    speaker: 'narration', bg: 'corridor',
    text: '林義雄は後日、\n別件の横領と殺人の疑いで逮捕される。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '成歩堂 龍一の、長い戦いは\nまだ始まったばかりだ――',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '―― 第1話　完 ――\n\n　　　…',
  },
  { type: 'scene_label', text: '― そして、数ヶ月後 ―', bg: 'black', goto: 'case2_opening', setCase: 2 },
];

/* ================================================================
   第2話「沈黙のアリバイ」
   ================================================================ */

SCENES['case2_opening'] = [
  { type: 'scene_label', text: '第2話\n沈黙のアリバイ', bg: 'black', goto: 'case2_brief' },
];

SCENES['case2_brief'] = [
  {
    speaker: 'narration', bg: 'black',
    text: '3月20日　夜――\nとあるマンションの一室で、\n若い男性が刺殺された。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '逮捕されたのは、被害者の婚約者。\n勤め先から戻ったばかりの女性、中村美咲。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: 'そして弁護人は、再び——\n成歩堂 龍一。',
  },
  { type: 'scene_label', text: '第1日　午前9時\n地方裁判所 第3法廷', bg: 'black', goto: 'case2_court' },
];

SCENES['case2_court'] = [
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本日、中村美咲被告人に対する\n殺人事件の公判を開廷します。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '弁護人、被告人は\n冒頭陳述を行いますか。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'normal',
    text: 'はい、裁判長。\n被告人・中村美咲は無実です。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'smirk',
    text: '……ふん、また君か、成歩堂。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'point',
    text: '今回は明確な目撃証言がある。\n簡単には覆らんぞ。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'happy',
    text: '（御剣……あの一件以来、\n　彼の目つきが少し変わった気がする）',
  },
  {
    speaker: 'maya', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'worried',
    text: '成歩堂くん、美咲さん\n本当に犯人じゃないんだよね？',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'normal',
    text: 'ああ。彼女には\nアリバイがある——必ずだ。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '検察、証人を呼んでください。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '本件唯一の目撃者を召喚します。\n被告人のマンションの隣人——木村 真一氏。',
  },
  {
    speaker: 'kimura', bg: 'courtroom_witness', center: 'kimura', centerPose: 'normal',
    text: '……木村 真一です。\n真実のみを述べると誓います。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think',
    text: '（妙に落ち着いてる……\n　慣れているような口ぶりだ）',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '証人、3月20日の夜の\n状況を証言してください。',
    goto: 'case2_testimony',
  },
];

SCENES['case2_testimony'] = [
  {
    speaker: 'system', bg: 'courtroom_witness', center: 'kimura', centerPose: 'normal',
    text: '＜証言＞　木村 真一の証言が始まります。',
  },
  { type: 'crossexam_start', ceData: 'crossexam3' },
];

SCENES['case2_after_contradiction'] = [
  {
    speaker: 'kimura', bg: 'courtroom_witness', center: 'kimura', centerPose: 'nervous',
    text: 'そ、それは……\nなにかの間違いだ……！',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '間違いではありません。\n会社のセキュリティゲートは\n社員証なしには通過できない。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '美咲さんは19:25まで会社にいた。\n18:50に部屋にいるはずがないんです！',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: 'な……なんと！\n証人、これは事実ですか！？',
  },
  {
    speaker: 'kimura', bg: 'courtroom_witness', center: 'kimura', centerPose: 'lying',
    text: '……見間違えただけです！\n暗かったから……！',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    right: 'maya', rightPose: 'excited',
    anim: 'objection',
    text: 'マンションの防犯映像によれば、\n18:42に外出したのは——あなただ！',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: 'そして帰宅は18:55。\nその間の13分間、\nあなたはどこで何をしていた？',
  },
  {
    speaker: 'kimura', bg: 'courtroom_witness', center: 'kimura', centerPose: 'nervous',
    text: 'う……うぅ……',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: 'さらに——被害者・高橋拓海の日記です。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal',
    text: '「美咲が誰かに尾けられている。\n　隣人の様子もおかしい。\n　一度問い詰めるか」と。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'thinking',
    text: '（証人は被告人を\n　ストーキングしていた……\n　そして被害者に発覚しかけた）',
  },
  {
    speaker: 'kimura', bg: 'courtroom_witness', center: 'kimura', centerPose: 'breakdown',
    text: 'ぐぅぁぁぁぁ！！',
  },
  {
    speaker: 'kimura', bg: 'courtroom_witness', center: 'kimura', centerPose: 'breakdown',
    text: 'あの男が……あの男が悪いんだ！\n美咲さんから俺を引き離そうとした！',
  },
  {
    speaker: 'kimura', bg: 'courtroom_witness', center: 'kimura', centerPose: 'nervous',
    text: '部屋に押しかけて……\n口論になって……\n気づいたら、包丁を……！',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: '自……自白！？',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'excited',
    text: '裁判長。被告人・中村美咲は\n全くの無実です。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '……検察は、被告人に対する\n起訴を取り下げます。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本件被告・中村美咲に対し、\n無　罪　を言い渡す！',
  },
  {
    speaker: 'narration', bg: 'courtroom_wide',
    text: '――　閉　廷　――',
  },
  { type: 'scene_label', text: '判決後\n法廷の廊下', bg: 'corridor', goto: 'case2_ending' },
];

SCENES['case2_ending'] = [
  {
    speaker: 'misaki', bg: 'corridor', center: 'misaki', centerPose: 'normal',
    text: '成歩堂先生……本当に、\nありがとうございました。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'happy',
    text: 'いえ。真実が明らかになって、\n本当によかった。',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'worried',
    text: '美咲さん、しばらくは\n大変だと思うけど……',
  },
  {
    speaker: 'misaki', bg: 'corridor', center: 'misaki', centerPose: 'normal',
    text: '……拓海の分まで、\n生きていきます。',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'normal',
    text: '……成歩堂。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'edgeworth', rightPose: 'normal',
    text: '御剣。',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'thinking',
    text: '今回も……君に救われた。\n検察の見立ては甘かった。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'edgeworth', rightPose: 'normal',
    text: '見立てじゃない。真実だ。\nそして真実は——いつだって、\n誰かを救うためにある。',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'smirk',
    text: 'フ……成長したな、成歩堂。',
  },
  {
    speaker: 'narration', bg: 'corridor',
    text: 'こうして、第2の事件も終わりを告げた。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: 'だが——\n成歩堂の前に立ちはだかる事件は、\nこれで最後ではない。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '正義のために、真実のために。\n新人弁護士・成歩堂 龍一の戦いは、\nまだまだ続く。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '―― 第2話　完 ――',
  },
  { type: 'scene_label', text: '― さらに数週間後 ―', bg: 'black', goto: 'case3_opening', setCase: 3 },
];

/* ================================================================
   第3話「偽りの遺書」
   ================================================================ */

SCENES['case3_opening'] = [
  { type: 'scene_label', text: '第3話\n偽りの遺書', bg: 'black', goto: 'case3_brief' },
];

SCENES['case3_brief'] = [
  {
    speaker: 'narration', bg: 'black',
    text: '静岡・山間の老舗旅館「白川荘」。\n明治から続く由緒ある宿の主人が、\n書斎で毒殺された。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '現場に残ったのは、ひとつのワインボトル。\nそこに刻まれていたのは、\n宿の再建を頼まれた経営コンサルタントの指紋。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '逮捕されたのは——黒田 誠、42歳。\n彼が無実だと信じた者が、\nまた成歩堂の元を訪れた。',
  },
  { type: 'scene_label', text: '第1日　午前9時\n地方裁判所 第3法廷', bg: 'black', goto: 'case3_court' },
];

SCENES['case3_court'] = [
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本日、黒田誠被告人に対する\n殺人事件の公判を開廷いたします。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '検察は冒頭陳述を行います。\n被告人は現場に居合わせており、\n指紋が凶器に残されていた。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'point',
    text: 'さらに目撃証言もある。\n有罪は疑いようがありません。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think',
    right: 'maya', rightPose: 'worried',
    text: '（指紋……でも黒田さんは\n　「ワインを一緒に飲んだだけだ」と言っていた）',
  },
  {
    speaker: 'maya', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'worried',
    text: 'あの証人、なんか\n嫌な感じがするんだよね……',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'normal',
    text: '直感か。\nでも——証拠で証明するのが俺の仕事だ。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '検察側、証人を呼んでください。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '旅館「白川荘」の女将、\n田村 玲子さんを召喚します。',
  },
  {
    speaker: 'tamura', bg: 'courtroom_witness', center: 'tamura', centerPose: 'normal',
    text: '田村 玲子でございます。\n真実のみを申し述べます。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think',
    text: '（落ち着きすぎている……\n　何かを準備してきた顔だ）',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '証人、事件当夜の状況を\n証言してください。',
    goto: 'case3_testimony',
  },
];

SCENES['case3_testimony'] = [
  {
    speaker: 'system', bg: 'courtroom_witness', center: 'tamura', centerPose: 'normal',
    text: '＜証言＞　田村 玲子の証言が始まります。\n旅館の防犯カメラ記録に注目してください。',
  },
  { type: 'crossexam_start', ceData: 'crossexam4' },
];

SCENES['case3_after_contradiction'] = [
  {
    speaker: 'tamura', bg: 'courtroom_witness', center: 'tamura', centerPose: 'nervous',
    text: 'そ、そんなはず……\n記録が間違っているのでは……？',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '旅館のシステムログは\n自動で生成されます。\n改ざんは不可能です。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '黒田さんが21:30に外出した後、\n白川さんが毒を盛られたとすれば——\n犯行が可能な人物は限られる。',
  },
  {
    speaker: 'maya', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'worried',
    text: '（成歩堂くん……！）',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    right: 'maya', rightPose: 'excited',
    anim: 'objection',
    text: '毒物検査報告書によれば、\n致死量に達するまで30分から1時間。\n黒田さんが戻ったのは22:15。\n——間に合わない！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'surprised',
    text: '……！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'thinking',
    text: '（黒田が外出した21:30から22:15の間に\n　毒が盛られたとすれば……\n　旅館に残っていた者が……）',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: '証人！\nこれはどういうことですか！',
  },
  {
    speaker: 'tamura', bg: 'courtroom_witness', center: 'tamura', centerPose: 'nervous',
    text: '…………',
  },
  {
    speaker: 'tamura', bg: 'courtroom_witness', center: 'tamura', centerPose: 'breakdown',
    text: '……旦那様は……\n旅館を売るとおっしゃった……！',
  },
  {
    speaker: 'tamura', bg: 'courtroom_witness', center: 'tamura', centerPose: 'breakdown',
    text: '私が30年……30年守ってきたこの旅館を！\nあの男（黒田）のせいで！',
  },
  {
    speaker: 'tamura', bg: 'courtroom_witness', center: 'tamura', centerPose: 'nervous',
    text: '旦那様がいなければ……\n私が女将として守っていけると……\n思ったんです……',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: '自……自白！！',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'excited',
    text: '裁判長。\n被告人・黒田誠に対する\n嫌疑は完全に晴れました。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '……検察は起訴を取り下げます。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本件被告・黒田誠に対し、\n無　罪　を言い渡す！',
  },
  {
    speaker: 'narration', bg: 'courtroom_wide',
    text: '――　閉　廷　――',
  },
  { type: 'scene_label', text: '判決後\n法廷の廊下', bg: 'corridor', goto: 'case3_ending' },
];

SCENES['case3_ending'] = [
  {
    speaker: 'kuroda', bg: 'corridor', center: 'kuroda', centerPose: 'normal',
    text: '成歩堂先生……\n助けていただきありがとうございます。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'happy',
    text: 'あなたは無実でした。\nそれが証明できてよかった。',
  },
  {
    speaker: 'kuroda', bg: 'corridor', center: 'kuroda', centerPose: 'normal',
    text: '田村さんが……まさか。\n彼女こそ、旅館を最も愛していた\n人だったのに……',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'worried',
    text: '……愛しすぎたんだよ、きっと。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'think',
    right: 'maya', rightPose: 'worried',
    text: '（愛が犯罪の動機になる……\n　法廷で何度もそれを見てきた）',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'normal',
    text: '成歩堂。……よくやった。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'surprised',
    right: 'edgeworth', rightPose: 'smirk',
    text: '御剣……素直に言えるようになったじゃないか。',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'thinking',
    text: '……余計なことを言うな。\n次は負けん。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'edgeworth', rightPose: 'normal',
    text: '楽しみにしてるよ。',
  },
  {
    speaker: 'narration', bg: 'corridor',
    text: '旅館「白川荘」は後日、\n残されたスタッフによって\n再建への道を歩み始めた。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '真実を暴くことは、\n時に誰かを深く傷つける。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: 'それでも——\n成歩堂 龍一は今日も法廷に立つ。\n依頼人の未来を信じて。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '―― 第3話　完 ――',
  },
  { type: 'scene_label', text: '― 数日後 ―', bg: 'black', goto: 'case4_opening', setCase: 4 },
];

/* ================================================================
   第4反対尋問データ（第3話）
   ================================================================ */
const CROSSEXAM4 = {
  witnessName: '田村 玲子',
  witnessId:   'tamura',
  maxHealth:   5,
  contradictionLines: [
    { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
      text: '旅館のシステムログを見てください！\n黒田さんは21:30に玄関を出ています！' },
    { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
      text: '夜10時——22:00に書斎で\n黒田さんの声を聞いたというのは\n絶対に不可能です！' },
    { speaker: 'tamura', bg: 'courtroom_witness', center: 'tamura', centerPose: 'surprised',
      text: '……そ、そんな……！' },
  ],
  nextScene: 'case3_after_contradiction',
  statements: [
    /* 0 */
    {
      text: '夜10時頃、書斎から\n激しい言い争いの声が聞こえました。',
      pressScene: [
        { speaker: 'phoenix', text: '言い争いの内容は\n聞き取れましたか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'tamura',  text: '「もう決めたんだ」という旦那様の声と、\n「待ってください」という声が……', bg: 'courtroom_witness', center: 'tamura', centerPose: 'normal' },
        { speaker: 'phoenix', text: '「待ってください」——\nその声が黒田さんのものだと？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
        { speaker: 'tamura',  text: 'ええ、黒田様の声は\n聞き慣れておりますから。', bg: 'courtroom_witness', center: 'tamura', centerPose: 'normal' },
        { speaker: 'maya',    text: '（声を聞き慣れてる……？\n　何か引っかかるな）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal', right: 'maya', rightPose: 'worried' },
      ],
      contradicts: null,
    },
    /* 1 */
    {
      text: '言い争いの後しばらくして、\n黒田様が廊下を歩く足音がしました。',
      pressScene: [
        { speaker: 'phoenix', text: '足音で黒田さんだと\nわかったんですか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'tamura',  text: 'ええ……歩き方に特徴がありますから。\n長く一緒にいると、わかるものです。', bg: 'courtroom_witness', center: 'tamura', centerPose: 'normal' },
        { speaker: 'phoenix', text: '（黒田さんが来ていたのはほんの数日のはず。\n　「長く一緒に」は少し大げさでは……？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: null,
    },
    /* 2 ★矛盾 inn_cam */
    {
      text: '夜10時頃には確かに、\n黒田様は旅館の中にいました。',
      pressScene: [
        { speaker: 'phoenix', text: '黒田さんが旅館の中にいたことを\n直接確認しましたか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point', anim: 'hold_it' },
        { speaker: 'tamura',  text: 'はい、確かに……\n廊下で姿を見かけましたから。', bg: 'courtroom_witness', center: 'tamura', centerPose: 'nervous' },
        { speaker: 'phoenix', text: '（旅館のシステムログがあれば……\n　黒田さんの出入りが記録されているはずだ）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: 'inn_cam',
      wrongPenalty: 'その証拠では証言を崩せない。\n黒田さんの行動を証明できる証拠を探してください。',
    },
  ],
};

/* ================================================================
   第3反対尋問データ（第2話）
   ================================================================ */
const CROSSEXAM3 = {
  witnessName: '木村 真一',
  witnessId:   'kimura',
  maxHealth:   5,
  contradictionLines: [
    { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
      text: '社員証ログを見てください！\n美咲さんは18:00から19:25まで\n会社のセキュリティゲート内にいた！' },
    { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
      text: '18:50にマンションへ戻ることは\n絶対に不可能です！' },
    { speaker: 'kimura', bg: 'courtroom_witness', center: 'kimura', centerPose: 'surprised',
      text: 'な……！？' },
  ],
  nextScene: 'case2_after_contradiction',
  statements: [
    /* 0 */
    {
      text: '私は18:50頃、\n部屋から出てきた中村さんを見ました。',
      pressScene: [
        { speaker: 'phoenix', text: '「18:50」——ずいぶん細かい時刻ですね。\nどうしてその時刻だと？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'kimura',  text: 'ちょうど壁の時計を\n見たところだったので。', bg: 'courtroom_witness', center: 'kimura', centerPose: 'normal' },
        { speaker: 'phoenix', text: '（即答できる……\n　よほど準備していたか、\n　もしくは……）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
        { speaker: 'maya',    text: '（怪しいよね、成歩堂くん）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal', right: 'maya', rightPose: 'worried' },
      ],
      contradicts: null,
    },
    /* 1 */
    {
      text: '中村さんの服には\n血が付いていました。',
      pressScene: [
        { speaker: 'phoenix', text: '血の量は？\nどの部分に？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'kimura',  text: 'え……えっと……\n胸のあたりに、点々と。', bg: 'courtroom_witness', center: 'kimura', centerPose: 'nervous' },
        { speaker: 'phoenix', text: '（点々……？\n　刺殺なら飛び散るはずだが）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: null,
    },
    /* 2 ★矛盾 alibi_card */
    {
      text: '間違いなく、その時刻に\n中村さんは部屋にいました。',
      pressScene: [
        { speaker: 'phoenix', text: '本当に「18:50」で\n間違いないんですか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point', anim: 'hold_it' },
        { speaker: 'kimura',  text: 'もちろんだ！\n見間違えるはずがない！', bg: 'courtroom_witness', center: 'kimura', centerPose: 'lying' },
        { speaker: 'phoenix', text: '（彼の証言が崩れれば、\n　美咲さんのアリバイは確実だ）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: 'alibi_card',
      wrongPenalty: 'この証拠では証言の核心を突けない。\nもう一度考えてみてください。',
    },
  ],
};

/* ================================================================
   第4話「消えた真実」
   ================================================================ */

SCENES['case4_opening'] = [
  { type: 'scene_label', text: '第4話\n消えた真実', bg: 'black', goto: 'case4_brief' },
];

SCENES['case4_brief'] = [
  {
    speaker: 'narration', bg: 'black',
    text: '4月某日――\nとある高層マンションの一室で、\n男性が絞殺された。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '逮捕されたのは、被害者の妻・藤原夏美。\n唯一の目撃証人は、隣室に住む男だった。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '「彼女は無実だ」——\nまた今日も、成歩堂 龍一は法廷に立つ。',
  },
  { type: 'scene_label', text: '第1日　午前9時\n地方裁判所 第3法廷', bg: 'black', goto: 'case4_court' },
];

SCENES['case4_court'] = [
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本日、藤原夏美被告人に対する\n殺人事件の公判を開廷いたします。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '検察は冒頭陳述を行います。\n被告人は事件当夜、夫・藤原浩一を\n自宅で絞殺しました。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'point',
    text: '隣人の目撃証言があります。\n証拠は揃っている。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think',
    right: 'maya', rightPose: 'worried',
    text: '（目撃証人か……\n　夏美さんは「身に覚えがない」と言っていた）',
  },
  {
    speaker: 'maya', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'worried',
    text: '成歩堂くん……夏美さん、\n本当につらそうだったね。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'normal',
    text: '必ず守る。\nそのための証拠は、もう手元にある。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '検察側、証人を呼んでください。',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '本件の目撃証人を召喚します。\n被告人の隣室に住む——坂本 純一氏です。',
  },
  {
    speaker: 'sakamoto', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'normal',
    text: '……坂本 純一です。\n真実のみを述べます。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think',
    text: '（……妙に落ち着いている。\n　何かを隠しているような目だ）',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '証人、事件当夜の状況を\n証言してください。',
    goto: 'case4_testimony',
  },
];

SCENES['case4_testimony'] = [
  {
    speaker: 'system', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'normal',
    text: '＜証言＞　坂本 純一の証言が始まります。\n入退館記録に注目してください。',
  },
  { type: 'crossexam_start', ceData: 'crossexam5' },
];

SCENES['case4_after_contradiction'] = [
  {
    speaker: 'sakamoto', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'nervous',
    text: 'そ、それは……\nシステムの誤作動では……！',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '自動システムに誤作動はありません。\n21時52分にあなたは隣室に入り、\n22時18分に退館した。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '死因鑑定書によれば、\n死亡推定時刻は22時から22時半。\n——あなたが部屋にいた時間と完全に重なる！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'thinking',
    text: '（入退館記録……死亡推定時刻……\n　それが重なるとすれば……）',
  },
  {
    speaker: 'maya', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'excited',
    text: '（成歩堂くん、あとひと押し！）',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    right: 'maya', rightPose: 'excited',
    anim: 'objection',
    text: 'さらに——保険証書を見てください！\n5,000万円の生命保険の受取人は、\n妻の夏美さんではなく——坂本、あなただ！',
  },
  {
    speaker: 'sakamoto', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'surprised',
    text: '……！！',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
    text: '事件当夜、被害者からの通話記録もある。\n21時45分——被害者はあなたを呼び出した。\nそして、その30分後に死亡している。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: '証人！\nこれはどういうことですか！！',
  },
  {
    speaker: 'sakamoto', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'nervous',
    text: '…………',
  },
  {
    speaker: 'sakamoto', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'breakdown',
    text: '浩一は……俺に金を返す気がなかった！\n10年前に貸した2,000万を\nずっとごまかし続けて……！',
  },
  {
    speaker: 'sakamoto', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'breakdown',
    text: '電話で「保険金を受け取れ」と言ったんだ。\n「自分が死ねばいい」と……\nだから俺は……俺は……！',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'surprised',
    text: '自……自白！！\nこれは重大な証言です！',
  },
  {
    speaker: 'edgeworth', bg: 'courtroom_prosecution', right: 'edgeworth', rightPose: 'normal',
    text: '……検察は、被告人・藤原夏美に対する\n起訴を取り下げます。',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
    right: 'maya', rightPose: 'excited',
    text: '裁判長。\n被告人・藤原夏美は完全な無実です。',
  },
  {
    speaker: 'judge', bg: 'courtroom_judge', center: 'judge', centerPose: 'normal',
    text: '本件被告・藤原夏美に対し、\n無　罪　を言い渡す！',
  },
  {
    speaker: 'narration', bg: 'courtroom_wide',
    text: '――　閉　廷　――',
  },
  { type: 'scene_label', text: '判決後\n法廷の廊下', bg: 'corridor', goto: 'case4_ending' },
];

SCENES['case4_ending'] = [
  {
    speaker: 'fujiwara', bg: 'corridor', center: 'fujiwara', centerPose: 'normal',
    text: '成歩堂先生……\n浩一が……坂本さんに殺されたなんて……',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'worried',
    text: '……辛い真実でしたね。\nでも——あなたは自由になれた。',
  },
  {
    speaker: 'fujiwara', bg: 'corridor', center: 'fujiwara', centerPose: 'normal',
    text: 'ありがとうございます。\n先生がいなければ、\n私は……',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'happy',
    text: '大丈夫！成歩堂くんは\n絶対に諦めないから！',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'normal',
    text: '……成歩堂。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'edgeworth', rightPose: 'normal',
    text: '御剣。',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'thinking',
    text: '今日の弁護は……見事だった。\n保険証書と入退館記録を結びつけるとは、\n私も気づかなかった。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    right: 'edgeworth', rightPose: 'smirk',
    text: '君が相手だから、\n手を抜けなかったんだよ。',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'smirk',
    text: 'フ……それは光栄だな。\n次は負けん——必ずだ。',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    right: 'maya', rightPose: 'excited',
    text: '御剣さん、毎回「次は負けん」\nって言ってるよね？',
  },
  {
    speaker: 'edgeworth', bg: 'corridor', right: 'edgeworth', rightPose: 'surprised',
    text: '……余計なことを言うな、綾里くん。',
  },
  {
    speaker: 'narration', bg: 'corridor',
    text: 'こうして、第4の事件も幕を閉じた。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '真実は、いつも\nどこかに眠っている。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: 'そしてそれを掘り起こすのが、\n弁護士・成歩堂 龍一の使命だ。',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '―― 第4話　完 ――\n\n　　　…',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '―― 全4話　完　ありがとうございました ――',
  },
  { type: 'end' },
];

/* ================================================================
   第5反対尋問データ（第4話）
   ================================================================ */
const CROSSEXAM5 = {
  witnessName: '坂本 純一',
  witnessId:   'sakamoto',
  maxHealth:   5,
  contradictionLines: [
    { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
      text: 'マンションの入退館記録を見てください！\n21:52にあなたが入館し、\n22:18に退館しています！' },
    { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
      text: '「夜9時から11時まで自室にいた」は\n絶対に嘘です！' },
    { speaker: 'sakamoto', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'surprised',
      text: 'そ……そんな……！' },
  ],
  nextScene: 'case4_after_contradiction',
  statements: [
    /* 0 */
    {
      text: 'その夜は自室でテレビを見ていました。\n隣から口論が聞こえて驚きました。',
      pressScene: [
        { speaker: 'phoenix', text: '「口論」と言いましたね。\n内容は聞き取れましたか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'sakamoto', text: '……言葉まではよく聞こえませんでした。\nただ、激しい言い合いだった。', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'normal' },
        { speaker: 'phoenix', text: '（声の主が誰かも\n　確認できなかったということか）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
        { speaker: 'maya', text: '（口論の声を聞いただけ？\n　それだけで証人になれるの？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal', right: 'maya', rightPose: 'worried' },
      ],
      contradicts: null,
    },
    /* 1 */
    {
      text: '口論は夜10時頃でした。\nその後しばらくして静かになりました。',
      pressScene: [
        { speaker: 'phoenix', text: '「夜10時頃」というのは\nどうやって確認しましたか？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
        { speaker: 'sakamoto', text: '部屋の時計を見ていたので。\n……10時5分か、そのくらいでした。', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'nervous' },
        { speaker: 'phoenix', text: '（時計で確認……\n　それは死亡推定時刻の範囲内だ）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: null,
    },
    /* 2 ★矛盾 neighbor_log */
    {
      text: '私は夜9時から11時まで、\nずっと自室にいました。\n外には出ていません。',
      pressScene: [
        { speaker: 'phoenix', text: '「ずっと自室に」——\n一度も外に出なかった、と？', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point', anim: 'hold_it' },
        { speaker: 'sakamoto', text: 'ええ、もちろんです。\nトイレにも出なかったくらいです。', bg: 'courtroom_witness', center: 'sakamoto', centerPose: 'lying' },
        { speaker: 'phoenix', text: '（嘘だ……\n　マンションのログが証明している）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: 'neighbor_log',
      wrongPenalty: 'その証拠では証言と矛盾しない。\n坂本の行動を直接証明できる証拠を探してください。',
    },
  ],
};

/* ================================================================
   ゲームエンジン
   ================================================================ */
/* ================================================================
   AudioEngine — Web Audio API でSE・BGMを生成
   音声ファイルがなくても動作します。
   独自の音源を使う場合は AUDIO_FILES に mp3/ogg のパスを設定してください。
   ================================================================ */

/* 音声ファイル（省略可能。パスが正しければ自動的に優先されます） */
const AUDIO_FILES = {
  bgm_court:     'audio/bgm_court.mp3',
  bgm_crossexam: 'audio/bgm_crossexam.mp3',
  sfx_objection: 'audio/sfx_objection.mp3',
  sfx_hold_it:   'audio/sfx_hold_it.mp3',
  sfx_damage:    'audio/sfx_damage.mp3',
  sfx_correct:   'audio/sfx_correct.mp3',
};

class AudioEngine {
  constructor() {
    this.enabled       = false;
    this._bgmType      = null;
    this._bgmActive    = false;
    this._bgmOscs      = [];
    this._bgmTimers    = [];
    this._typingTick   = 0;

    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      this.ctx = new Ctx();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.65;
      this.master.connect(this.ctx.destination);
      this.bgmBus = this.ctx.createGain();
      this.bgmBus.gain.value = 0.55;
      this.bgmBus.connect(this.master);
      this.sfxBus = this.ctx.createGain();
      this.sfxBus.gain.value = 1.0;
      this.sfxBus.connect(this.master);
      this.enabled = true;
    } catch(e) {}
  }

  resume() {
    if (this.ctx?.state === 'suspended') return this.ctx.resume();
    return Promise.resolve();
  }

  setVolume(master, bgm, sfx) {
    if (!this.enabled) return;
    this.master.gain.value  = master;
    this.bgmBus.gain.value  = bgm;
    this.sfxBus.gain.value  = sfx;
  }

  _ensureRunning(fn) {
    if (!this.enabled) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().then(fn);
    } else {
      fn();
    }
  }

  /* ---- SE ---- */
  sfx(name) {
    if (!this.enabled) return;
    this._ensureRunning(() => this._sfxNow(name));
  }

  _sfxNow(name) {
    ({
      objection: () => this._chord([261.6, 329.6, 392, 523.3], 'sawtooth', 0.14, 0.7),
      hold_it:   () => this._chord([293.7, 370, 440, 587.3],   'sawtooth', 0.14, 0.7),
      take_that: () => this._chord([220, 277.2, 329.6, 440],   'sawtooth', 0.14, 0.7),
      damage:    () => this._sweep(380, 70,  0.25, 0.55),
      correct:   () => this._chord([523.3, 659.3, 784, 1046.5], 'sine', 0.13, 0.5, true),
      wrong:     () => this._sweep(220, 90,  0.2,  0.4),
      page:      () => this._tone('sine',   880, 0.06, 0.07),
      typing:    () => this._tone('square', 1100 + Math.random()*400, 0.03, 0.035),
    }[name] || (() => {}))();
  }

  typing() {
    this._typingTick++;
    if (this._typingTick % 2 === 0) this.sfx('typing');
  }

  /* ---- BGM ---- */
  bgm(type) {
    if (!this.enabled || this._bgmType === type) return;
    this._stopBgm();
    this._bgmType   = type;
    this._bgmActive = true;
    this._ensureRunning(() => {
      if (!this._bgmActive) return;
      if (type === 'court')     this._courtBgm();
      if (type === 'crossexam') this._crossExamBgm();
    });
  }

  _stopBgm() {
    this._bgmActive = false;
    this._bgmType   = null;
    this._bgmTimers.forEach(id => clearTimeout(id));
    this._bgmTimers = [];
    this._bgmOscs.forEach(o => { try { o.stop(); } catch(e) {} });
    this._bgmOscs = [];
  }

  /* ---- 低レベル生成 ---- */
  _tone(type, freq, vol, dur) {
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + dur * 0.15);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.sfxBus);
    o.start(t); o.stop(t + dur + 0.01);
  }

  _chord(freqs, type, vol, dur, stagger = false) {
    freqs.forEach((f, i) => {
      const delay = stagger ? i * 0.09 : 0;
      const t = this.ctx.currentTime + delay;
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol / freqs.length, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g); g.connect(this.sfxBus);
      o.start(t); o.stop(t + dur + 0.01);
    });
  }

  _sweep(f0, f1, vol, dur) {
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.sfxBus);
    o.start(t); o.stop(t + dur + 0.01);
  }

  _drone(freqs, type, vol) {
    freqs.forEach(f => {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.value = vol;
      o.connect(g); g.connect(this.bgmBus);
      o.start(); this._bgmOscs.push(o);
    });
  }

  _loopNotes(notes, vol, oscType) {
    const totalDur = notes.reduce((s, [, d]) => s + d, 0);
    let loopStart  = this.ctx.currentTime;
    const tick = () => {
      if (!this._bgmActive) return;
      let t = loopStart;
      notes.forEach(([freq, dur]) => {
        if (freq > 0) {
          const o = this.ctx.createOscillator(), g = this.ctx.createGain();
          o.type = oscType; o.frequency.value = freq;
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(vol, t + 0.02);
          g.gain.setValueAtTime(vol * 0.6, t + dur * 0.75);
          g.gain.exponentialRampToValueAtTime(0.001, t + dur);
          o.connect(g); g.connect(this.bgmBus);
          o.start(t); o.stop(t + dur + 0.01);
        }
        t += dur;
      });
      loopStart += totalDur;
      const id = setTimeout(tick, Math.max(50, (loopStart - this.ctx.currentTime - 0.4) * 1000));
      this._bgmTimers.push(id);
    };
    tick();
  }

  /* ---- BGMパターン ---- */
  _courtBgm() {
    this._drone([55, 110, 165], 'sine', 0.025);
    this._loopNotes([
      [220, 0.5], [246.9, 0.5], [261.6, 0.5], [293.7, 0.5],
      [329.6, 1.0], [293.7, 0.5], [261.6, 0.5], [246.9, 1.0],
      [220, 0.5], [196,   0.5], [220,   0.5], [246.9, 0.5],
      [220, 2.0],
    ], 0.07, 'triangle');
  }

  _crossExamBgm() {
    this._drone([73.4, 146.8], 'sawtooth', 0.022);
    this._loopNotes([
      [220,   0.15], [220,   0.15], [246.9, 0.15], [220,   0.15],
      [196,   0.30], [174.6, 0.15], [196,   0.15],
      [220,   0.15], [246.9, 0.15], [261.6, 0.15], [246.9, 0.15],
      [246.9, 0.60],
    ], 0.10, 'square');
    this._loopNotes([
      [73.4, 0.20], [0, 0.20], [73.4, 0.10], [0, 0.10], [73.4, 0.20], [0, 0.40],
    ], 0.09, 'sawtooth');
  }
}

/* ================================================================ */

class AceGame {
  constructor() {
    this.state       = 'title';
    this.sceneKey    = 'opening';
    this.stepIdx     = 0;
    this.typing      = false;
    this.fullText    = '';
    this.typeTimer   = null;

    /* 反対尋問 */
    this.ceActive    = false;
    this.ceIdx       = 0;
    this.ceHealth    = CROSSEXAM.maxHealth;
    this.cePressedSet = new Set();
    this.ceStatements = CROSSEXAM.statements.map(s => ({ ...s }));

    /* 証拠品 */
    this.currentCase  = 1;
    this.evidenceList = this._evidenceForCase(1);
    this.audio = new AudioEngine();
    this.selectedEvidence = null;
    this.textSpeed = 'normal'; /* slow / normal / fast */

    this._cacheEls();
    this._bindEvents();
    this._applySettings(this._loadSettings());
    this._renderHealth();
    /* キャッシュ初期化（キーは slotEl.id と同じ） */
    this._currentBg = null;
    this._currentChars = { 'char-left': null, 'char-right': null, 'char-center': null };
  }

  /* ---- DOM参照 ---- */
  _cacheEls() {
    const $ = id => document.getElementById(id);
    this.el = {
      bg:            $('bg'),
      sprLeft:       $('sprite-left'),
      sprRight:      $('sprite-right'),
      sprCenter:     $('sprite-center'),
      charLeft:      $('char-left'),
      charRight:     $('char-right'),
      charCenter:    $('char-center'),
      healthCont:    $('health-container'),
      healthFill:    $('health-fill'),
      sceneLabel:    $('scene-label'),
      testimonyArea: $('testimony-area'),
      testimonyWitness: $('testimony-witness-name'),
      testimonyText: $('testimony-text'),
      testimonyCounter: $('testimony-counter'),
      btnPrev:       $('btn-prev'),
      btnNext:       $('btn-next'),
      dialogueBox:   $('dialogue-box'),
      speakerName:   $('speaker-name'),
      dialogueText:  $('dialogue-text'),
      nextIndicator: $('next-indicator'),
      actionBtns:    $('action-btns'),
      btnPress:      $('btn-press'),
      btnPresent:    $('btn-present'),
      evidenceMenu:  $('evidence-menu'),
      evidenceList:  $('evidence-list'),
      evidenceImg:   $('evidence-img'),
      evidenceNameDetail: $('evidence-name-detail'),
      evidenceDescDetail: $('evidence-desc-detail'),
      btnEvidencePresent: $('btn-evidence-present'),
      btnEvidenceClose:   $('btn-evidence-close'),
      flashOverlay:  $('flash-overlay'),
      flashPortrait: $('flash-portrait'),
      flashText:     $('flash-text'),
      gameoverScreen: $('gameover-screen'),
      titleScreen:   $('title-screen'),
      btnStart:      $('btn-start'),
      btnRetry:      $('btn-retry'),
      btnMenu:       $('btn-menu'),
      menuScreen:    $('menu-screen'),
      btnMenuClose:  $('btn-menu-close'),
      menuTabs:      document.querySelectorAll('.menu-tab'),
      tabOptions:    $('tab-options'),
      tabSave:       $('tab-save'),
      tabLoad:       $('tab-load'),
      volMaster:     $('vol-master'),
      volBgm:        $('vol-bgm'),
      volSfx:        $('vol-sfx'),
      volMasterVal:  $('vol-master-val'),
      volBgmVal:     $('vol-bgm-val'),
      volSfxVal:     $('vol-sfx-val'),
      speedBtns:     document.querySelectorAll('.speed-btn'),
      saveSlots:     $('save-slots'),
      loadSlots:     $('load-slots'),
    };
  }

  /* ---- イベントバインド ---- */
  _bindEvents() {
    /* タイトル */
    this.el.btnStart.addEventListener('click', e => {
      e.stopPropagation();
      this._startGame();
    });

    /* メインクリック（台詞送り） */
    document.getElementById('game').addEventListener('click', () => {
      if (this.state === 'dialogue') this._advanceDialogue();
    });

    /* 反対尋問ボタン */
    this.el.btnPrev.addEventListener('click', e => { e.stopPropagation(); this._ceNavigate(-1); });
    this.el.btnNext.addEventListener('click', e => { e.stopPropagation(); this._ceNavigate(1); });
    this.el.btnPress.addEventListener('click', e => { e.stopPropagation(); this._cePress(); });
    this.el.btnPresent.addEventListener('click', e => { e.stopPropagation(); this._openEvidenceMenu(); });

    /* 証拠品メニュー */
    this.el.btnEvidenceClose.addEventListener('click', e => { e.stopPropagation(); this._closeEvidenceMenu(); });
    this.el.btnEvidencePresent.addEventListener('click', e => { e.stopPropagation(); this._presentEvidence(); });

    /* リトライ */
    this.el.btnRetry.addEventListener('click', e => {
      e.stopPropagation();
      this.el.gameoverScreen.classList.add('hidden');
      this._restartCrossExam();
    });

    /* メニュー開閉 */
    this.el.btnMenu.addEventListener('click', e => { e.stopPropagation(); this._openMenu(); });
    this.el.btnMenuClose.addEventListener('click', e => { e.stopPropagation(); this._closeMenu(); });

    /* タブ切り替え */
    this.el.menuTabs.forEach(tab => {
      tab.addEventListener('click', e => { e.stopPropagation(); this._switchMenuTab(tab.dataset.tab); });
    });

    /* 音量スライダー */
    this.el.volMaster.addEventListener('input', () => this._onVolChange());
    this.el.volBgm.addEventListener('input', () => this._onVolChange());
    this.el.volSfx.addEventListener('input', () => this._onVolChange());

    /* テキスト速度 */
    this.el.speedBtns.forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); this._setTextSpeed(btn.dataset.speed); });
    });
  }

  /* ---- ゲーム開始 ---- */
  _startGame() {
    this.audio.resume();
    this.audio.bgm('court');
    this.el.titleScreen.classList.add('hidden');
    this.state = 'dialogue';
    this.sceneKey = 'opening';
    this.stepIdx  = 0;
    this._switchCase(1);
    this._runStep();
  }

  /* ---- シーン実行 ---- */
  _runStep() {
    const scene = SCENES[this.sceneKey];
    if (!scene || this.stepIdx >= scene.length) { return; }

    const step = scene[this.stepIdx];

    /* 背景 */
    if (step.bg) this._setBg(step.bg);

    /* キャラクター */
    this._setChar(this.el.sprLeft,   this.el.charLeft,   step.left   || null, step.leftPose   || 'normal');
    this._setChar(this.el.sprRight,  this.el.charRight,  step.right  || null, step.rightPose  || 'normal');
    this._setChar(this.el.sprCenter, this.el.charCenter, step.center || null, step.centerPose || 'normal');

    /* 特殊ステップ処理 */
    if (step.type === 'scene_label') {
      if (step.setCase) this._switchCase(step.setCase);
      this._showSceneLabel(step.text, () => {
        this._nextStep();
        if (step.goto) {
          this.sceneKey = step.goto;
          this.stepIdx  = 0;
        }
        this._runStep();
      });
      return;
    }

    if (step.type === 'crossexam_start') {
      const ceMap = { crossexam2: CROSSEXAM2, crossexam3: CROSSEXAM3, crossexam4: CROSSEXAM4, crossexam5: CROSSEXAM5 };
      this._startCrossExam(ceMap[step.ceData] || CROSSEXAM);
      return;
    }

    if (step.type === 'end') {
      this._showEnd();
      return;
    }

    /* アニメーション付き */
    if (step.anim) {
      const charId = step.speaker !== 'narration' && step.speaker !== 'system'
        ? step.speaker : null;
      this._playFlash(step.anim, charId, () => {
        this._showDialogue(step);
      });
      return;
    }

    this._showDialogue(step);
  }

  /* ---- 台詞表示 ---- */
  _showDialogue(step) {
    this.state = 'dialogue';
    const char = CHARS[step.speaker] || CHARS['narration'];

    this.el.speakerName.textContent = char.spkName;
    this.el.speakerName.className = char.spkClass;

    const isNarration = step.speaker === 'narration';
    this.el.dialogueText.className = isNarration ? 'narration-style' : (step.speaker === 'system' ? 'system-style' : '');

    this.el.nextIndicator.style.display = 'none';
    this._typeText(step.text, () => {
      this.el.nextIndicator.style.display = '';
    });
  }

  /* ---- テキストタイプライター ---- */
  _typeText(text, onDone) {
    this.typing   = true;
    this.fullText = text.replace(/\n/g, '\n');
    let idx = 0;
    this.el.dialogueText.textContent = '';
    clearInterval(this.typeTimer);

    const delay = { slow: 55, normal: 28, fast: 10 }[this.textSpeed] || 28;
    this.typeTimer = setInterval(() => {
      idx++;
      this.el.dialogueText.textContent = this.fullText.slice(0, idx);
      this.audio.typing();
      if (idx >= this.fullText.length) {
        clearInterval(this.typeTimer);
        this.typing = false;
        if (onDone) onDone();
      }
    }, delay);
  }

  _finishTyping() {
    clearInterval(this.typeTimer);
    this.typing = false;
    this.el.dialogueText.textContent = this.fullText;
    this.el.nextIndicator.style.display = '';
  }

  /* ---- 台詞送り ---- */
  _advanceDialogue() {
    if (this.state !== 'dialogue') return;

    if (this.typing) {
      this._finishTyping();
      return;
    }

    this.audio.sfx('page');
    this._nextStep();
    this._runStep();
  }

  _nextStep() {
    const scene = SCENES[this.sceneKey];
    const step  = scene ? scene[this.stepIdx] : null;
    if (step && step.goto) {
      this.sceneKey = step.goto;
      this.stepIdx  = 0;
      return;
    }
    this.stepIdx++;
  }

  /* ---- シーンラベル ---- */
  _showSceneLabel(text, cb) {
    this.el.sceneLabel.textContent = text;
    this.el.sceneLabel.classList.remove('hidden');
    this.el.dialogueBox.classList.add('hidden');
    setTimeout(() => {
      this.el.sceneLabel.classList.add('hidden');
      this.el.dialogueBox.classList.remove('hidden');
      if (cb) cb();
    }, 2200);
  }

  /* ---- 背景切り替え（同じキーなら何もしない → ちらつき防止） ---- */
  _setBg(key) {
    if (key === this._currentBg) return;
    this._currentBg = key;

    const cssMap = {
      courtroom_wide:        'bg-courtroom-wide',
      courtroom_judge:       'bg-courtroom-judge',
      courtroom_defense:     'bg-courtroom-defense',
      courtroom_prosecution: 'bg-courtroom-prosecution',
      courtroom_witness:     'bg-courtroom-witness',
      corridor:              'bg-corridor',
      black:                 'bg-black',
    };

    const cls    = cssMap[key] || '';
    const imgUrl = IMAGES.bg[key] || '';

    const img = new Image();
    img.onload = () => {
      this.el.bg.style.backgroundImage = `url(${imgUrl})`;
      this.el.bg.className = '';
    };
    img.onerror = () => {
      this.el.bg.style.backgroundImage = '';
      this.el.bg.className = cls;
    };
    /* 先に CSS グラデを当てて、画像がロード済みなら即座に切り替わる */
    this.el.bg.className = cls;
    img.src = imgUrl;
  }

  /* ---- キャラクター表示（同じ組み合わせなら再ロードしない） ---- */
  _setChar(sprEl, slotEl, charId, pose) {
    const slotKey = slotEl.id; /* 'char-left' | 'char-right' | 'char-center' */
    const cacheKey = charId ? `${charId}:${pose}` : null;

    if (!charId || charId === 'none') {
      if (this._currentChars[slotKey] === null) return; /* 既に非表示 */
      this._currentChars[slotKey] = null;
      sprEl.setAttribute('data-char', 'none');
      sprEl.setAttribute('data-label', '');
      sprEl.style.backgroundImage = '';
      slotEl.style.visibility = 'hidden';
      return;
    }

    if (this._currentChars[slotKey] === cacheKey) return; /* 変化なし */
    this._currentChars[slotKey] = cacheKey;

    slotEl.style.visibility = 'visible';
    const charData = CHARS[charId];
    const label    = charData ? charData.label : charId;

    sprEl.setAttribute('data-char', charId);
    sprEl.setAttribute('data-label', label);

    const imgPath = IMAGES.characters[charId]?.[pose]
                  || IMAGES.characters[charId]?.['normal']
                  || '';
    if (!imgPath) { sprEl.style.backgroundImage = ''; return; }

    const img = new Image();
    img.onload  = () => { sprEl.style.backgroundImage = `url(${imgPath})`; };
    img.onerror = () => { sprEl.style.backgroundImage = ''; };
    img.src = imgPath;
  }

  /* ---- フラッシュ演出 ---- */
  _playFlash(type, charId, onDone) {
    const flashMap = {
      objection: { cls: 'flash-objection', text: '異議あり！',  charLabel: charId },
      hold_it:   { cls: 'flash-hold-it',   text: '待った！',    charLabel: charId },
      take_that: { cls: 'flash-take-that', text: 'どうだ！',    charLabel: charId },
    };
    const cfg = flashMap[type] || flashMap['objection'];

    this.el.flashOverlay.className = cfg.cls;
    this.el.flashText.textContent  = cfg.text;

    if (charId && CHARS[charId]) {
      const portrait = IMAGES.portraits[charId] || '';
      this.el.flashPortrait.setAttribute('data-char', charId);
      this.el.flashPortrait.setAttribute('data-label', CHARS[charId].label);
      this.el.flashPortrait.style.setProperty('--char-color',
        getComputedStyle(document.querySelector(`.char-sprite[data-char="${charId}"]`) || document.body)
        .getPropertyValue('--char-color') || '#333');

      const img = new Image();
      img.onload  = () => { this.el.flashPortrait.style.backgroundImage = `url(${portrait})`; };
      img.onerror = () => { this.el.flashPortrait.style.backgroundImage = ''; };
      if (portrait) img.src = portrait;
    } else {
      this.el.flashPortrait.setAttribute('data-char', '');
      this.el.flashPortrait.style.backgroundImage = '';
    }

    this.audio.sfx(type);
    this.el.flashOverlay.classList.remove('hidden');

    setTimeout(() => {
      this.el.flashOverlay.classList.add('hidden');
      this.el.flashOverlay.className = 'hidden';
      if (onDone) onDone();
    }, 1400);
  }

  /* ---- 反対尋問 開始 ---- */
  _startCrossExam(ceData = CROSSEXAM) {
    this.ceCurrent = ceData;
    this.ceActive  = true;
    this.ceIdx     = 0;
    this.ceHealth  = ceData.maxHealth;
    this.ceStatements = ceData.statements.map(s => ({ ...s }));
    this.cePressedSet.clear();

    this.audio.bgm('crossexam');
    this.el.testimonyArea.classList.remove('hidden');
    this.el.healthCont.classList.remove('hidden');
    this.el.actionBtns.classList.remove('hidden');
    this.el.dialogueBox.classList.remove('hidden');
    this.el.nextIndicator.style.display = 'none';

    this.el.testimonyWitness.textContent = ceData.witnessName;
    this._renderHealth();
    this._showTestimony();
  }

  _showTestimony() {
    const st = this.ceStatements[this.ceIdx];
    const witnessId = this.ceCurrent.witnessId || 'kamijo';
    const witness   = CHARS[witnessId] || CHARS.kamijo;
    this.el.testimonyText.textContent = st.text;
    this.el.testimonyCounter.textContent = `${this.ceIdx + 1}／${this.ceStatements.length}`;

    /* 台詞欄に証言者名 */
    this.el.speakerName.textContent = this.ceCurrent.witnessName;
    this.el.speakerName.className   = witness.spkClass;
    this.el.dialogueText.textContent = '（← ▶ で証言を移動 ／ 「尋問」で詳しく聞く ／ 「証拠提出」で矛盾を指摘）';
    this.el.dialogueText.className  = 'system-style';

    this._setChar(this.el.sprCenter, this.el.charCenter, witnessId, 'normal');
    this._setChar(this.el.sprLeft,  this.el.charLeft,  null, '');
    this._setChar(this.el.sprRight, this.el.charRight, null, '');

    this.state = 'crossexam';
  }

  /* ---- 証言ナビゲート ---- */
  _ceNavigate(dir) {
    if (this.state !== 'crossexam') return;
    this.ceIdx = (this.ceIdx + dir + this.ceStatements.length) % this.ceStatements.length;
    this._showTestimony();
  }

  /* ---- 尋問（プレス） ---- */
  _cePress() {
    if (this.state !== 'crossexam') return;
    const st = this.ceStatements[this.ceIdx];
    if (!st.pressScene || st.pressScene.length === 0) {
      this._showInlineDialogue('特に追加することはないようだ。', 'system', () => {
        this._showTestimony();
      });
      return;
    }

    /* 尋問後に証言テキストが更新されるケース */
    const hadPressed = this.cePressedSet.has(this.ceIdx);
    this.cePressedSet.add(this.ceIdx);

    this.state = 'pressing';
    this._runPressScene(st.pressScene, 0, () => {
      /* 初回プレスで証言更新 */
      if (!hadPressed && st.pressUpdate) {
        st.text = st.pressUpdate;
        this.el.testimonyText.textContent = st.text;
        this.el.testimonyText.style.animation = 'none';
        requestAnimationFrame(() => {
          this.el.testimonyText.style.animation = 'testimony-update 1s ease';
        });
        this._showInlineDialogue('（証言が更新された！）', 'system', () => {
          this._showTestimony();
        });
      } else {
        this._showTestimony();
      }
    });
  }

  _runPressScene(steps, idx, onDone) {
    if (idx >= steps.length) { onDone(); return; }
    const step = steps[idx];

    if (step.bg)    this._setBg(step.bg);
    this._setChar(this.el.sprLeft,   this.el.charLeft,   step.left   || null, step.leftPose   || 'normal');
    this._setChar(this.el.sprRight,  this.el.charRight,  step.right  || null, step.rightPose  || 'normal');
    this._setChar(this.el.sprCenter, this.el.charCenter, step.center || null, step.centerPose || 'normal');

    const runDialogue = () => {
      this._showDialogue(step);
      const clickHandler = () => {
        if (this.typing) { this._finishTyping(); return; }
        document.getElementById('game').removeEventListener('click', clickHandler, true);
        this._runPressScene(steps, idx + 1, onDone);
      };
      document.getElementById('game').addEventListener('click', clickHandler, true);
    };

    if (step.anim) {
      this._playFlash(step.anim, step.speaker, runDialogue);
    } else {
      runDialogue();
    }
  }

  /* ---- 証拠提出ボタン → メニューを開く ---- */
  _openEvidenceMenu() {
    if (this.state !== 'crossexam') return;
    this.selectedEvidence = null;
    this._renderEvidenceList();
    this.el.evidenceMenu.classList.remove('hidden');
    this.el.btnEvidencePresent.classList.add('disabled');
    this.el.evidenceImg.textContent   = '';
    this.el.evidenceImg.style.backgroundImage = '';
    this.el.evidenceNameDetail.textContent  = '証拠品を選択してください';
    this.el.evidenceDescDetail.textContent  = '';
  }

  _renderEvidenceList() {
    this.el.evidenceList.innerHTML = '';
    this.evidenceList.forEach(ev => {
      const item = document.createElement('div');
      item.className = 'evidence-item';
      item.dataset.id = ev.id;

      const icon = document.createElement('div');
      icon.className = 'evidence-item-icon';
      icon.textContent = ev.icon;

      const imgPath = IMAGES.evidence[ev.id] || '';
      const img = new Image();
      img.onload  = () => { icon.style.backgroundImage = `url(${imgPath})`; icon.textContent = ''; };
      img.onerror = () => {};
      if (imgPath) img.src = imgPath;

      const name = document.createElement('span');
      name.textContent = ev.name;
      item.append(icon, name);

      item.addEventListener('click', e => {
        e.stopPropagation();
        document.querySelectorAll('.evidence-item').forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        this._selectEvidence(ev.id);
      });

      this.el.evidenceList.appendChild(item);
    });
  }

  _selectEvidence(id) {
    const ev = EVIDENCE_DATA[id];
    if (!ev) return;
    this.selectedEvidence = id;

    this.el.evidenceImg.textContent = ev.icon;
    this.el.evidenceImg.style.backgroundImage = '';

    const imgPath = IMAGES.evidence[id] || '';
    const img = new Image();
    img.onload  = () => { this.el.evidenceImg.style.backgroundImage = `url(${imgPath})`; this.el.evidenceImg.textContent = ''; };
    img.onerror = () => {};
    if (imgPath) img.src = imgPath;

    this.el.evidenceNameDetail.textContent = ev.name;
    this.el.evidenceDescDetail.textContent = ev.desc.replace(/\\n/g, '\n');
    this.el.btnEvidencePresent.classList.remove('disabled');
  }

  _closeEvidenceMenu() {
    this.el.evidenceMenu.classList.add('hidden');
  }

  /* ---- 証拠提出（矛盾の指摘） ---- */
  _presentEvidence() {
    if (!this.selectedEvidence) return;
    this.el.evidenceMenu.classList.add('hidden');

    const st = this.ceStatements[this.ceIdx];
    const ev = this.selectedEvidence;

    if (st.contradicts && st.contradicts === ev) {
      /* 正解！ */
      this._playFlash('objection', 'phoenix', () => {
        this._setBg('courtroom_defense');
        this._setChar(this.el.sprLeft, this.el.charLeft, 'phoenix', 'point');
        this._setChar(this.el.sprRight, this.el.charRight, null, '');
        this._setChar(this.el.sprCenter, this.el.charCenter, null, '');
        this._exitCrossExam();
        this._showContradictionDialogue();
      });
    } else {
      /* 不正解 */
      this._takeDamage(st.wrongPenalty || 'この証拠では矛盾を指摘できない。');
    }
  }

  /* ---- ダメージ ---- */
  _takeDamage(msg) {
    this.ceHealth = Math.max(0, this.ceHealth - 1);
    this._renderHealth();

    this.audio.sfx('damage');
    this.el.bg.style.animation = 'damage-flash 0.5s ease';
    setTimeout(() => { this.el.bg.style.animation = ''; }, 500);

    if (this.ceHealth <= 0) {
      this._showGameOver();
      return;
    }

    this._showInlineDialogue(msg + '\n（心証が悪化した……）', 'system', () => {
      this._showTestimony();
    });
  }

  _renderHealth() {
    const max = this.ceCurrent?.maxHealth ?? CROSSEXAM.maxHealth;
    const pct = (this.ceHealth / max) * 100;
    this.el.healthFill.style.width = pct + '%';
    this.el.healthFill.className = pct <= 40 ? 'damage' : '';
  }

  /* ---- 矛盾後の台詞 ---- */
  _showContradictionDialogue() {
    const ce = this.ceCurrent || CROSSEXAM;
    const lines = ce.contradictionLines || [
      { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
        text: 'エレベーター記録を見てください！\n22時20分に8階への記録があります！' },
      { speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'surprised',
        text: 'そ……そんな……！' },
      { speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous',
        text: 'そ、それは……！' },
    ];
    const nextScene = ce.nextScene || 'after_contradiction';
    this._runPressScene(lines, 0, () => {
      this.sceneKey = nextScene;
      this.stepIdx  = 0;
      this.state    = 'dialogue';
      this._runStep();
    });
  }

  /* ---- 反対尋問終了処理 ---- */
  _exitCrossExam() {
    this.ceActive = false;
    this.audio.bgm('court');
    this.el.testimonyArea.classList.add('hidden');
    this.el.healthCont.classList.add('hidden');
    this.el.actionBtns.classList.add('hidden');
  }

  /* ---- インライン台詞（ワンショット） ---- */
  _showInlineDialogue(text, speakerId, onDone) {
    const char = CHARS[speakerId] || CHARS['system'];
    this.el.speakerName.textContent = char.spkName;
    this.el.speakerName.className   = char.spkClass;
    this.el.dialogueText.className  = 'system-style';
    this.el.nextIndicator.style.display = 'none';
    this._typeText(text, () => {
      this.el.nextIndicator.style.display = '';
    });

    this.state = 'dialogue';
    const clickHandler = () => {
      if (this.typing) { this._finishTyping(); return; }
      document.getElementById('game').removeEventListener('click', clickHandler, true);
      if (onDone) onDone();
    };
    document.getElementById('game').addEventListener('click', clickHandler, true);
  }

  /* ---- ゲームオーバー ---- */
  _showGameOver() {
    this._exitCrossExam();
    this.el.gameoverScreen.classList.remove('hidden');
  }

  _restartCrossExam() {
    const ce = this.ceCurrent || CROSSEXAM;
    this.ceHealth = ce.maxHealth;
    this.ceStatements = ce.statements.map(s => ({ ...s }));
    this.cePressedSet.clear();
    /* crossexam_startステップに戻る（sceneは現在のcurrentのまま） */
    const restartScene = ce === CROSSEXAM2 ? 'day2_testimony'
                       : ce === CROSSEXAM3 ? 'case2_testimony'
                       : ce === CROSSEXAM4 ? 'case3_testimony'
                       : ce === CROSSEXAM5 ? 'case4_testimony'
                       : 'testimony_intro';
    this.sceneKey = restartScene;
    this.stepIdx  = 1;
    this._startCrossExam(ce);
  }

  /* ---- 事件切替 ---- */
  _evidenceForCase(caseNum) {
    return Object.values(EVIDENCE_DATA).filter(ev => (ev.case || 1) === caseNum);
  }

  _switchCase(caseNum) {
    this.currentCase     = caseNum;
    this.evidenceList    = this._evidenceForCase(caseNum);
    this.selectedEvidence = null;
  }

  /* ---- エンド ---- */
  _showEnd() {
    this.state = 'end';
    this.el.dialogueBox.classList.remove('hidden');
    this.el.speakerName.textContent = '―';
    this.el.speakerName.className   = 'spk-system';
    this.el.dialogueText.textContent = '― END ―\n\nお疲れ様でした。\nゲームを最初から始めるには画面をクリックしてください。';
    this.el.dialogueText.className  = 'system-style';
    this.el.nextIndicator.style.display = 'none';

    document.getElementById('game').addEventListener('click', () => {
      if (this.state === 'end') {
        location.reload();
      }
    }, { once: true });
  }
  /* ================================================================
     メニュー
     ================================================================ */
  _openMenu() {
    this.el.menuScreen.classList.remove('hidden');
    this._switchMenuTab('options');
  }

  _closeMenu() {
    this.el.menuScreen.classList.add('hidden');
    this._saveSettings();
  }

  _switchMenuTab(tab) {
    this.el.menuTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    this.el.tabOptions.classList.toggle('hidden', tab !== 'options');
    this.el.tabSave.classList.toggle('hidden', tab !== 'save');
    this.el.tabLoad.classList.toggle('hidden', tab !== 'load');
    if (tab === 'save') this._renderSlots('save');
    if (tab === 'load') this._renderSlots('load');
  }

  /* ================================================================
     音量・テキスト速度
     ================================================================ */
  _onVolChange() {
    const mv = +this.el.volMaster.value;
    const bv = +this.el.volBgm.value;
    const sv = +this.el.volSfx.value;
    this.el.volMasterVal.textContent = mv;
    this.el.volBgmVal.textContent    = bv;
    this.el.volSfxVal.textContent    = sv;
    this.audio.setVolume(mv / 100, bv / 100, sv / 100);
  }

  _setTextSpeed(speed) {
    this.textSpeed = speed;
    this.el.speedBtns.forEach(b => b.classList.toggle('active', b.dataset.speed === speed));
  }

  /* ================================================================
     設定の保存・復元
     ================================================================ */
  _saveSettings() {
    const s = {
      volMaster: +this.el.volMaster.value,
      volBgm:    +this.el.volBgm.value,
      volSfx:    +this.el.volSfx.value,
      textSpeed: this.textSpeed,
    };
    localStorage.setItem('ace_settings', JSON.stringify(s));
  }

  _loadSettings() {
    try { return JSON.parse(localStorage.getItem('ace_settings') || '{}'); } catch { return {}; }
  }

  _applySettings(s) {
    if (s.volMaster !== undefined) { this.el.volMaster.value = s.volMaster; this.el.volMasterVal.textContent = s.volMaster; }
    if (s.volBgm    !== undefined) { this.el.volBgm.value    = s.volBgm;    this.el.volBgmVal.textContent    = s.volBgm; }
    if (s.volSfx    !== undefined) { this.el.volSfx.value    = s.volSfx;    this.el.volSfxVal.textContent    = s.volSfx; }
    if (s.textSpeed)               this._setTextSpeed(s.textSpeed);
    const mv = +this.el.volMaster.value, bv = +this.el.volBgm.value, sv = +this.el.volSfx.value;
    this.audio.setVolume(mv / 100, bv / 100, sv / 100);
  }

  /* ================================================================
     セーブ・ロード
     ================================================================ */
  _buildSaveData() {
    return {
      sceneKey:      this.sceneKey,
      stepIdx:       this.stepIdx,
      ceHealth:      this.ceHealth,
      ceIdx:         this.ceIdx,
      cePressedSet:  [...this.cePressedSet],
      ceActive:      this.ceActive,
      currentCase:   this.currentCase,
      state:         this.state,
      date:          new Date().toLocaleString('ja-JP'),
      label:         this._saveLabel(),
    };
  }

  _saveLabel() {
    const scene = SCENES[this.sceneKey];
    if (!scene) return this.sceneKey;
    const step = scene[this.stepIdx] || scene[scene.length - 1];
    if (!step) return this.sceneKey;
    const text = step.text || '';
    return text.slice(0, 18).replace(/\n/g, ' ') + (text.length > 18 ? '…' : '');
  }

  _writeSave(slot) {
    const saves = this._getAllSaves();
    saves[slot] = this._buildSaveData();
    localStorage.setItem('ace_saves', JSON.stringify(saves));
    this._renderSlots('save');
  }

  _readSave(slot) {
    const saves = this._getAllSaves();
    const data  = saves[slot];
    if (!data) return;
    this.sceneKey = data.sceneKey;
    this.stepIdx  = data.stepIdx;
    this.ceHealth = data.ceHealth ?? CROSSEXAM.maxHealth;
    this.ceIdx    = data.ceIdx ?? 0;
    this.cePressedSet = new Set(data.cePressedSet || []);
    this.ceActive = false;
    this._switchCase(data.currentCase || 1);
    this._closeMenu();
    this.el.titleScreen.classList.add('hidden');
    this.el.gameoverScreen.classList.add('hidden');
    this.audio.resume();
    this.audio.bgm('court');
    this.state = 'dialogue';
    this._currentBg = null;
    this._currentChars = { 'char-left': null, 'char-right': null, 'char-center': null };
    this._runStep();
  }

  _deleteSave(slot) {
    const saves = this._getAllSaves();
    delete saves[slot];
    localStorage.setItem('ace_saves', JSON.stringify(saves));
    this._renderSlots('save');
    this._renderSlots('load');
  }

  _getAllSaves() {
    try { return JSON.parse(localStorage.getItem('ace_saves') || '{}'); } catch { return {}; }
  }

  _renderSlots(mode) {
    const container = mode === 'save' ? this.el.saveSlots : this.el.loadSlots;
    const saves = this._getAllSaves();
    container.innerHTML = '';
    const inGame = this.state !== 'title';

    for (let i = 1; i <= 3; i++) {
      const data  = saves[i];
      const el    = document.createElement('div');
      el.className = 'save-slot' + (data ? '' : ' empty');

      const numEl   = document.createElement('span');
      numEl.className = 'slot-num';
      numEl.textContent = `No.${i}`;

      const infoEl  = document.createElement('div');
      infoEl.className = 'slot-info';
      const titleEl = document.createElement('div');
      titleEl.className = 'slot-title';
      titleEl.textContent = data ? data.label : '― 空きスロット ―';
      const dateEl  = document.createElement('div');
      dateEl.className = 'slot-date';
      dateEl.textContent = data ? data.date : '';
      infoEl.append(titleEl, dateEl);

      const actionEl = document.createElement('button');
      actionEl.className = 'slot-action';

      if (mode === 'save') {
        actionEl.textContent = 'セーブ';
        actionEl.disabled = !inGame;
        actionEl.addEventListener('click', e => { e.stopPropagation(); this._writeSave(i); });
      } else {
        actionEl.textContent = 'ロード';
        actionEl.disabled = !data;
        actionEl.addEventListener('click', e => { e.stopPropagation(); if (data) this._readSave(i); });

        if (data) {
          const delEl = document.createElement('button');
          delEl.className = 'slot-action';
          delEl.textContent = '削除';
          delEl.style.marginLeft = '4%';
          delEl.addEventListener('click', e => { e.stopPropagation(); this._deleteSave(i); });
          el.append(numEl, infoEl, actionEl, delEl);
        } else {
          el.append(numEl, infoEl, actionEl);
        }
        container.appendChild(el);
        continue;
      }

      el.append(numEl, infoEl, actionEl);
      container.appendChild(el);
    }
  }
}

/* ================================================================
   起動
   ================================================================ */
window.addEventListener('DOMContentLoaded', () => { new AceGame(); });
