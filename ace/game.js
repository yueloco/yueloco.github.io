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
  },
  evidence: {
    autopsy:      'img/evidence/autopsy.png',
    elevator_log: 'img/evidence/elevator_log.png',
    work_log:     'img/evidence/work_log.png',
    security_cam: 'img/evidence/security_cam.png',
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
    id: 'autopsy',
    name: '検死報告書',
    icon: '📋',
    desc: '被害者・山本隆の検死報告書。\n死亡推定時刻：22:00〜23:00。\n鈍器による後頭部への一撃が致死原因。',
  },
  elevator_log: {
    id: 'elevator_log',
    name: 'エレベーター記録',
    icon: '🗒️',
    desc: '当日のエレベーター運行記録（写し）。\n22:20 → 8階行き\n23:05 → 1階行き\n※オリジナルは検察が押収',
  },
  work_log: {
    id: 'work_log',
    name: '勤怠記録',
    icon: '🕐',
    desc: '被告・田中浩二の当日の勤怠記録。\n退社打刻：21:03\n警備員の署名あり。',
  },
  security_cam: {
    id: 'security_cam',
    name: '防犯カメラ映像',
    icon: '📷',
    desc: '1Fエントランスの防犯カメラ映像。\n21:05、田中に見える人物が\nビルを出る姿が確認できる。',
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
    text: '成歩堂くん、緊張してる？',
  },
  {
    speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'confident',
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
    text: '成歩堂くん、すごかったよ！\n証言の矛盾、バッチリ見つけたね！',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    text: 'エレベーター記録が鍵だった。\n数字は嘘をつかない。',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    text: 'でも……本当の犯人は\nまだわからないんでしょ？',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'think',
    text: '……ああ。上条が8階に着いた22時20分より前に\n山本さんを殺した人物がいるはずだ。',
  },
  {
    speaker: 'phoenix', bg: 'corridor', left: 'phoenix', leftPose: 'confident',
    text: '田中さんのためにも、\n真実を明らかにしないとな。',
  },
  {
    speaker: 'maya', bg: 'corridor', left: 'phoenix', leftPose: 'normal',
    text: 'うん！一緒にがんばろう、成歩堂くん！',
  },
  {
    speaker: 'narration', bg: 'corridor',
    text: '―― 第一回公判　終了 ――',
  },
  {
    speaker: 'narration', bg: 'black',
    text: '真実は……まだ、闇の中にある。',
  },
  { type: 'end' },
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
        { speaker: 'maya',      text: '（コートで人を特定するの？\n　それって証言になるの？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
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
        { speaker: 'maya',      text: '（時間がずれてる！\n　真犯人が何かを持ち出したの？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'normal' },
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
        { speaker: 'maya',      text: '（でも私たちも同じ記録の写しを\n　持ってるよね？）', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'think' },
      ],
      contradicts: null,
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
    this.evidenceList = Object.values(EVIDENCE_DATA);
    this.audio = new AudioEngine();
    this.selectedEvidence = null;

    this._cacheEls();
    this._bindEvents();
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
  }

  /* ---- ゲーム開始 ---- */
  _startGame() {
    this.audio.resume();
    this.audio.bgm('court');
    this.el.titleScreen.classList.add('hidden');
    this.state = 'dialogue';
    this.sceneKey = 'opening';
    this.stepIdx  = 0;
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
      this._startCrossExam();
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

    this.typeTimer = setInterval(() => {
      idx++;
      this.el.dialogueText.textContent = this.fullText.slice(0, idx);
      this.audio.typing();
      if (idx >= this.fullText.length) {
        clearInterval(this.typeTimer);
        this.typing = false;
        if (onDone) onDone();
      }
    }, 28);
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
  _startCrossExam() {
    this.ceActive  = true;
    this.ceIdx     = 0;
    this.ceHealth  = CROSSEXAM.maxHealth;
    this.ceStatements = CROSSEXAM.statements.map(s => ({ ...s }));
    this.cePressedSet.clear();

    this.audio.bgm('crossexam');
    this.el.testimonyArea.classList.remove('hidden');
    this.el.healthCont.classList.remove('hidden');
    this.el.actionBtns.classList.remove('hidden');
    this.el.dialogueBox.classList.remove('hidden');
    this.el.nextIndicator.style.display = 'none';

    this.el.testimonyWitness.textContent = CROSSEXAM.witnessName;
    this._renderHealth();
    this._showTestimony();
  }

  _showTestimony() {
    const st = this.ceStatements[this.ceIdx];
    this.el.testimonyText.textContent = st.text;
    this.el.testimonyCounter.textContent = `${this.ceIdx + 1}／${this.ceStatements.length}`;

    /* 台詞欄に証言者名 */
    this.el.speakerName.textContent = CROSSEXAM.witnessName;
    this.el.speakerName.className   = 'spk-kamijo';
    this.el.dialogueText.textContent = '（← ▶ で証言を移動 ／ 「尋問」で詳しく聞く ／ 「証拠提出」で矛盾を指摘）';
    this.el.dialogueText.className  = 'system-style';

    this._setChar(this.el.sprCenter, this.el.charCenter, 'kamijo', 'normal');
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
    const pct = (this.ceHealth / CROSSEXAM.maxHealth) * 100;
    this.el.healthFill.style.width = pct + '%';
    this.el.healthFill.className = pct <= 40 ? 'damage' : '';
  }

  /* ---- 矛盾後の台詞 ---- */
  _showContradictionDialogue() {
    const lines = [
      { speaker: 'phoenix', bg: 'courtroom_defense', left: 'phoenix', leftPose: 'point',
        text: 'エレベーター記録を見てください！\n22時20分に8階への記録があります！' },
      { speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'surprised',
        text: 'そ……そんな……！' },
      { speaker: 'kamijo', bg: 'courtroom_witness', center: 'kamijo', centerPose: 'nervous',
        text: 'そ、それは……！' },
    ];
    this._runPressScene(lines, 0, () => {
      this.sceneKey = 'after_contradiction';
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
    this.ceHealth = CROSSEXAM.maxHealth;
    this.ceStatements = CROSSEXAM.statements.map(s => ({ ...s }));
    this.cePressedSet.clear();
    this.sceneKey = 'testimony_intro';
    this.stepIdx  = 1; /* crossexam_startステップ */
    this._startCrossExam();
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
}

/* ================================================================
   起動
   ================================================================ */
window.addEventListener('DOMContentLoaded', () => { new AceGame(); });
