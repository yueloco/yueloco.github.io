//=============================================================================
// MessageWindowPopup.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 2.4.1 2017/05/28 ウィンドウスキンを変更した直後の文字色のみ変更前の文字色になってしまう問題を修正（by 奏ねこまさん）
//                  2行目以降の文字サイズを変更したときにウィンドウの高さが正しく計算されない問題を修正
// 2.4.0 2017/05/16 並列実行のコモンイベントで「MWP_VALID 0」を実行したときに、実行中のマップイベントを対象とするよう修正
// 2.3.2 2017/05/25 「FTKR_ExMessageWindow2.js」の連携機能の修正(byフトコロ)
//                  ウィンドウを閉じた時にフキダシ無効化をする対象を、指定していたウィンドウIDのみに変更
//                  フキダシ無効化コマンドにウィンドウIDを指定する機能追加
//                  場所移動時にすべてのウィンドウIDのフキダシ無効化処理を追加
//                  プラグインパラメータ[自動設定]をOFFに設定した場合、イベント起動時にフキダシ無効化する対象をウィンドウID0だけに変更
// 2.3.1 2017/05/14 「FTKR_ExMessageWindow2.js」の連携機能の修正(byフトコロ)
//                  ポップアップの初期化および、ポップアップ無効時の文章の表示位置の不具合修正
//                  フキダシ有効化コマンドにウィンドウIDを指定する機能追加
// 2.3.0 2017/05/01 フトコロさんの「FTKR_ExMessageWindow2.js」と連携してフキダシを複数表示できる機能を追加（byフトコロさん）
// 2.2.0 2017/04/20 選択肢および数値ウィンドウをテール画像の右側に表示できるプラグインコマンドを追加
// 2.1.0 2017/02/21 フキダシウィンドウ内で制御文字「\{」「\}」を指定したときの上限、下限、増減幅を設定できる機能を追加
// 2.0.5 2017/01/23 ウィンドウスキンを変更しているデータをロード直後にフキダシメッセージを表示すると
//                  文字が黒くなってしまう問題を修正
// 2.0.4 2016/12/25 ウィンドウを閉じている最中にウィンドウ表示位置を変更するプラグインコマンドを実行すると、
//                  一瞬だけ空ウィンドウが表示される問題を修正
// 2.0.3 2016/10/22 デフォルト以外で制御文字と見なされる記述（\aaa[333]や\d<test>）を枠幅の計算から除外するよう修正
// 2.0.2 2016/09/29 キャラクターの位置によってはネームポップが一部見切れてしまう現象を修正
// 2.0.1 2016/08/25 フォントサイズを\{で変更して\}で戻さなかった場合の文字サイズがおかしくなっていた現象を修正
// 2.0.0 2016/08/22 本体v1.3.0によりウィンドウ透過の実装が変更されたので対応
// 1.3.3 2016/07/02 ポップアップ有効時は選択肢の最大表示数が8になるよう修正
// 1.3.2 2016/06/02 YEP_MessageCore.jsとのウィンドウ位置に関する競合を解消
// 1.3.1 2016/05/25 フォロワーにフキダシを表示できる機能を追加
// 1.3.0 2016/03/21 ウィンドウの表示位置をキャラクターの高さに合わせて自動調整するよう修正
//                  ポップアップウィンドウ専用のウィンドウスキンを使用する機能を追加
//                  位置とサイズを微調整する機能を追加
//                  選択肢と数値入力ウィンドウの表示方法を2種類追加
// 1.2.3 2016/02/23 YEP_MessageCore.jsより上に配置した場合に発生するエラーを修正
//                  （正常に動作しない点はそのままです）
// 1.2.2 2016/02/20 YEP_MessageCore.js最新版に対応
// 1.2.1 2016/02/20 YEP_MessageCore.jsのネームポップをポップアップウィンドウと連動するよう対応
// 1.2.0 2016/02/13 並列処理のイベントが存在するときにポップアップ設定がクリアされてしまう
//                  問題の修正
//                  ウィンドウの表示位置を下に表示できる設定を追加
// 1.1.3 2016/02/04 イベント終了時にポップアップ設定をクリアするよう修正
// 1.1.2 2016/01/31 行間を調整できる機能を追加
// 1.1.1 2016/01/30 選択肢と数値入力ウィンドウをポップアップと連携するよう修正
//                  その他微調整と軽微な表示不良修正
// 1.1.0 2016/01/29 高確率で競合するバグを修正
//                  ポップアップウィンドウがキャラクターの移動に追従するよう修正
//                  顔グラフィックが見切れないよう修正
//                  実行中のイベントをポップアップ対象にできる機能を追加（0を指定）
//                  英語対応
// 1.0.0 2016/01/28 初版
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc Popup window plugin
 * @author triacontane
 *
 * @param FontSize
 * @desc Font size of popup window
 * @default 22
 *
 * @param Padding
 * @desc Padding of popup window
 * @default 10
 *
 * @param AutoPopup
 * @desc Popup set when event starting（ON/OFF）
 * @default ON
 *
 * @param FaceScale
 * @desc Scale of face graphic of popup window(1-100%)
 * @default 75
 *
 * @param WindowLinkage
 * @desc Select window and Number input window is linkage with popup window(ON/OFF)
 * @default ON
 *
 * @param BetweenLines
 * @desc Between the Lines
 * @default 4
 *
 * @param ThroughWindow
 * @desc Window through if overlap windows(ON/OFF)
 * @default OFF
 *
 * @param FontSizeRange
 * @desc フキダシウィンドウで制御文字「\{」「\}」を使用した場合のフォントサイズの増減幅です。デフォルトは12です。
 * @default 12
 *
 * @param FontUpperLimit
 * @desc フキダシウィンドウで制御文字「\{」「\}」を使用した場合のフォントサイズの上限値です。デフォルトは96です。
 * @default 96
 *
 * @param FontLowerLimit
 * @desc フキダシウィンドウで制御文字「\{」「\}」を使用した場合のフォントサイズの下限値です。デフォルトは24です。
 * @default 24
 *
 * @help Change the message window from fixed to popup
 *
 * Plugin Command
 *
 * MWP_VALID [Character ID]
 *  Popup window valid
 *  Player:-1 Current event:0 Event:1...
 * ex:MWP_VALID 0
 *
 * MWP_INVALID
 *  Popup window invalid
 * ex:MWP_INVALID
 *
 * MWP_SETTING [parameter]
 *  Popup window setting. parameter are...
 *   POS_UPPER
 *     Window position fixed upper.
 *
 * 　POS_LOWER
 *     Window position fixed upper.
 *
 * 　POS_AUTO
 *     Window position auto.
 *
 *   SKIN [File name(/img/system/...)]
 *     Setting window skin for popup message.
 *
 *   SUB_POS_PLAYER
 *     Choice window or NumberInput displays player.
 *
 *   SUB_POS_INNER
 *     Choice window or NumberInput displays internal message window.
 *
 *   SUB_POS_NORMAL
 *     Choice window or NumberInput displays normal position.
 *
 * MWP_ADJUST [parameter]
 *   Popup window adjust. parameter are...
 *
 *   POS [X] [Y]
 *     Popup window adjust relative position.
 *
 * 　SIZE [Width] [Height]
 * 　　Popup window adjust relative size.
 *
 * This plugin is released under the MIT License.
 */
/*:ja
 * @plugindesc フキダシウィンドウプラグイン
 * @author トリアコンタン
 *
 * @param フォントサイズ
 * @desc フキダシウィンドウのデフォルトフォントサイズ
 * 通常ウィンドウのフォントサイズ：28
 * @default 22
 *
 * @param 余白
 * @desc フキダシウィンドウの余白サイズ
 * 通常ウィンドウの余白：18
 * @default 10
 *
 * @param 自動設定
 * @desc イベント起動時にフキダシの対象が、起動したイベントに自動設定されます。（ON/OFF）
 * OFFの場合は通常のメッセージウィンドウに設定されます。
 * @default ON
 *
 * @param フェイス倍率
 * @desc フキダシウィンドウの顔グラフィック表示倍率(1-100%)
 * @default 75
 *
 * @param ウィンドウ連携
 * @desc 選択肢ウィンドウと数値入力ウィンドウを
 * ポップアップウィンドウに連動させます。(ON/OFF)
 * @default ON
 *
 * @param 行間
 * @desc 行と行の間のスペースをピクセル単位で設定します。
 * @default 4
 *
 * @param ウィンドウ透過
 * @desc ウィンドウが重なったときに透過表示します。(ON/OFF)
 * 選択肢をフキダシ内に表示する場合はONにしてください。
 * @default OFF
 *
 * @param フォントサイズ増減幅
 * @desc フキダシウィンドウで制御文字「\{」「\}」を使用した場合のフォントサイズの増減幅です。デフォルトは12です。
 * @default 12
 *
 * @param フォントサイズ上限
 * @desc フキダシウィンドウで制御文字「\{」「\}」を使用した場合のフォントサイズの上限値です。デフォルトは96です。
 * @default 96
 *
 * @param フォントサイズ下限
 * @desc フキダシウィンドウで制御文字「\{」「\}」を使用した場合のフォントサイズの下限値です。デフォルトは24です。
 * @default 24
 *
 * @help メッセージウィンドウを指定したキャラクターの頭上にフキダシで
 * 表示するよう変更します。
 *
 * YEP_MessageCore.jsのネームポップと併せて使用する場合は、
 * プラグイン管理画面で当プラグインをYEP_MessageCore.jsより
 * 下に配置してください。
 *
 * また、FTKR_ExMessageWindow2.jsの複数メッセージウィンドウ表示と
 * 併せて使用する場合は、プラグイン管理画面で当プラグインを
 * FTKR_ExMessageWindow2.jsより下に配置してください。
 * 
 * 
 * プラグインパラメータ[自動設定]詳細
 * FTKR_ExMessageWindow2.jsと併用する場合、
 * 自動設定で使用するメッセージウィンドウは、ウィンドウID0 です。
 * OFFの場合、ウィンドウID0 を通常の表示方法に戻します。
 * 
 *
 * プラグインコマンド詳細
 *  イベントコマンド「プラグインコマンド」から実行。
 *  （パラメータの間は半角スペースで区切る）
 *
 * MWP_VALID [キャラクターID] or
 * フキダシウィンドウ有効化 [キャラクターID]
 * 　メッセージウィンドウを指定したキャラクターIDの頭上に表示するようにします。
 * 　プレイヤー : -1 このイベント : 0 指定したIDのイベント : 1 ～
 * 　フォロワー : -2, -3, -4
 *
 * 例：MWP_VALID 0
 * 　　フキダシウィンドウ有効化 3
 * 
 * !複数メッセージウィンドウ表示を使う場合!
 * MWP_VALID [キャラクターID] [ウィンドウID] or
 * フキダシウィンドウ有効化 [キャラクターID] [ウィンドウID]
 * 　指定したメッセージウィンドウIDを指定したキャラクターIDの頭上に表示するようにします。
 * 　プレイヤー : -1 このイベント : 0 指定したIDのイベント : 1 ～
 * 　フォロワー : -2, -3, -4
 * 　ウィンドウIDを指定しない(入力なし)場合は、ウィンドウID0を使用します。
 *
 * 例：MWP_VALID 0 1
 * 　　フキダシウィンドウ有効化 3 2
 *
 * 
 * MWP_INVALID or
 * フキダシウィンドウ無効化
 * 　ウィンドウの表示方法を通常に戻します。
 *
 * 例：MWP_INVALID
 * 　　フキダシウィンドウ無効化
 *
 * !複数メッセージウィンドウ表示を使う場合!
 * MWP_INVALID [ウィンドウID]
 * フキダシウィンドウ無効化 [ウィンドウID]
 * 　指定したメッセージウィンドウIDの表示方法を通常に戻します。
 * 　入力無しはすべてのウィンドウIDの表示方法を通常に戻します。
 *
 * 例：MWP_INVALID 1
 * 　　フキダシウィンドウ無効化 2
 * 　　フキダシウィンドウ無効化
 * 
 * 
 * MWP_SETTING [設定内容] or
 * フキダシウィンドウ設定 [設定内容]
 * 　フキダシウィンドウの設定を行います。設定内容に以下を入力。
 *
 * 　POS_UPPER or 位置_上固定
 * 　　ウィンドウの位置をキャラクターの上で固定します。
 *
 * 　POS_LOWER or 位置_下固定
 * 　　ウィンドウの位置をキャラクターの下で固定します。
 *
 * 　POS_AUTO or 位置_自動
 * 　　通常はキャラクターの上に表示し、ウィンドウが上に見切れる場合のみ
 * 　　下に表示します。
 *
 *   SKIN or スキン [/img/system/以下に配置するスキンのファイル名]
 *     フキダシウィンドウ時専用のウィンドウスキンを設定します。
 *
 *   SUB_POS_PLAYER or サブ位置_プレイヤーの頭上
 *   　選択肢および数値入力のウィンドウをプレイヤーの頭上に表示します。
 *   　位置関係次第でウィンドウが被る場合があるので、必要に応じて
 *   　ウィンドウ透過のパラメータを有効にしてください。
 *
 *   SUB_POS_INNER or サブ位置_メッセージウィンドウ内部
 *     選択肢および数値入力のウィンドウをメッセージウィンドウに含めます。
 *     この設定を使用する場合は必ずウィンドウ透過のパラメータを
 *     有効にしてください。
 *
 *   SUB_POS_NORMAL or サブ位置_通常
 *   　選択肢および数値入力のウィンドウをフキダシウィンドウの下に表示します。
 *   　特に設定を変更しない場合はこの設定になります。
 *
 *   SUB_POS_RIGHT or サブ位置_右
 *   　選択肢および数値入力のウィンドウをフキダシウィンドウのテール部分の
 *   　右側に表示します。
 *
 * 例：MWP_SETTING POS_UPPER
 * 　　フキダシウィンドウ設定 位置_自動
 * 　　MWP_SETTING SKIN window2
 * 　　フキダシウィンドウ設定 サブ位置_プレイヤーの頭上
 *
 * MWP_ADJUST [設定内容] or
 * フキダシウィンドウ調整 [設定内容]
 * 　フキダシウィンドウの表示位置やサイズを微調整します。設定内容に以下を入力。
 *
 * 　POS or 位置 [X座標] [Y座標]
 * 　　ウィンドウのX座標とY座標を調整します。指定するのは元の座標からの相対です。
 *
 * 　SIZE or サイズ [横幅] [高さ]
 * 　　ウィンドウの横幅と高さを調整します。指定するのは元のサイズからの相対です。
 *
 * 例：MWP_ADJUST POS 5 -3
 * 　　フキダシウィンドウ調整 サイズ 20 -40
 *
 * !複数メッセージウィンドウ表示を使う場合!
 * フキダシウィンドウの設定や表示位置、サイズの調整結果は
 * すべてのウィンドウIDで共通です。
 * 
 * 
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */
(function() {
    'use strict';
    var pluginName = 'MessageWindowPopup';

    var checkTypeFunction = function(value) {
        return checkType(value, 'Function');
    };

    var checkType = function(value, typeName) {
        return Object.prototype.toString.call(value).slice(8, -1) === typeName;
    };

    var getParamNumber = function(paramNames, min, max) {
        var value = getParamOther(paramNames);
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(value, 10) || 0).clamp(min, max);
    };

    var getParamBoolean = function(paramNames) {
        var value = getParamOther(paramNames);
        return (value || '').toUpperCase() === 'ON';
    };

    var getParamOther = function(paramNames) {
        if (!Array.isArray(paramNames)) paramNames = [paramNames];
        for (var i = 0; i < paramNames.length; i++) {
            var name = PluginManager.parameters(pluginName)[paramNames[i]];
            if (name) return name;
        }
        return null;
    };

    var getArgNumber = function(arg, min, max) {
        if (arguments.length <= 2) min = -Infinity;
        if (arguments.length <= 3) max = Infinity;
        return (parseInt(convertEscapeCharacters(arg), 10) || 0).clamp(min, max);
    };

    var getArgString = function(arg, upperFlg) {
        arg = convertEscapeCharacters(arg);
        return upperFlg ? arg.toUpperCase() : arg;
    };

    var getCommandName = function(command) {
        return (command || '').toUpperCase();
    };

    var convertEscapeCharacters = function(text) {
        if (text == null) text = '';
        var window = SceneManager._scene._windowLayer.children[0];
        return window ? window.convertEscapeCharacters(text) : text;
    };

    //FTKR_ExMessageWindow2.jsを使用しているか
    var imported_FTKR_EMW = function() {
        return typeof Imported !== 'undefined' && Imported.FTKR_EMW;
    };

    //=============================================================================
    // パラメータのバリデーション
    //=============================================================================
    var paramThroughWindow  = getParamBoolean(['ThroughWindow', 'ウィンドウ透過']);
    var paramFaceScale      = getParamNumber(['FaceScale', 'フェイス倍率'], 1, 100);
    var paramFontSize       = getParamNumber(['FontSize', 'フォントサイズ'], 1);
    var paramPadding        = getParamNumber(['Padding', '余白'], 1);
    var paramLinkage        = getParamBoolean(['WindowLinkage', 'ウィンドウ連携']);
    var paramBetweenLines   = getParamNumber(['BetweenLines', '行間'], 0);
    var paramAutoPopup      = getParamBoolean(['AutoPopup', '自動設定']);
    var paramFontSizeRange  = getParamNumber(['FontSizeRange', 'フォントサイズ増減幅'], 0);
    var paramFontUpperLimit = getParamNumber(['FontUpperLimit', 'フォントサイズ上限'], 0);
    var paramFontLowerLimit = getParamNumber(['FontLowerLimit', 'フォントサイズ下限'], 0);

    //=============================================================================
    // Game_Interpreter
    //  プラグインコマンドを追加定義します。
    //=============================================================================
    var _Game_Interpreter_pluginCommand      = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        try {
            this.pluginCommandMessageWindowPopup(command, args);
        } catch (e) {
            if ($gameTemp.isPlaytest() && Utils.isNwjs()) {
                var window  = require('nw.gui').Window.get();
                var devTool = window.showDevTools();
                devTool.moveTo(0, 0);
                devTool.resizeTo(Graphics.width, Graphics.height);
                window.focus();
            }
            console.log('プラグインコマンドの実行中にエラーが発生しました。');
            console.log('- コマンド名 　: ' + command);
            console.log('- コマンド引数 : ' + args);
            console.log('- エラー原因   : ' + e.toString());
        }
    };

    Game_Interpreter.prototype.pluginCommandMessageWindowPopup = function(command, args) {
        switch (getCommandName(command)) {
            case 'MWP_VALID' :
            case 'フキダシウィンドウ有効化':
                var eventId = getArgNumber(args[0]);
                if (eventId === 0) {
                    eventId = this.eventId() || ($gameMap.isEventRunning() ? $gameMap._interpreter.eventId() : 0);
                }
                if (imported_FTKR_EMW() && args[1]) {
                    var windowId = getArgNumber(args[1]);
                    if (windowId >= 0) $gameSystem.setMessagePopupEx(windowId, eventId);
                } else {
                    $gameSystem.setMessagePopup(eventId);
                }
                break;
            case 'MWP_INVALID':
            case 'フキダシウィンドウ無効化':
                if (imported_FTKR_EMW() && args[0]) {
                    var windowId = getArgNumber(args[0]);
                    if (windowId >= 0) $gameSystem.clearMessagePopupEx(windowId);
                } else {
                    $gameSystem.clearMessagePopup();
                }
                break;
            case 'MWP_SETTING' :
            case 'フキダシウィンドウ設定':
                switch (getCommandName(args[0])) {
                    case 'POS_UPPER' :
                    case '位置_上固定':
                        $gameSystem.setPopupFixUpper();
                        break;
                    case 'POS_LOWER' :
                    case '位置_下固定':
                        $gameSystem.setPopupFixLower();
                        break;
                    case 'POS_AUTO' :
                    case '位置_自動':
                        $gameSystem.setPopupAuto();
                        break;
                    case 'SKIN' :
                    case 'スキン' :
                        $gameSystem.setPopupWindowSkin(getArgString(args[1]));
                        this.setWaitMode('image');
                        break;
                    case 'SUB_POS_NORMAL' :
                    case 'サブ位置_通常':
                        $gameSystem.setPopupSubWindowPosition(0);
                        break;
                    case 'SUB_POS_PLAYER' :
                    case 'サブ位置_プレイヤーの頭上':
                        $gameSystem.setPopupSubWindowPosition(1);
                        break;
                    case 'SUB_POS_INNER' :
                    case 'サブ位置_メッセージウィンドウ内部':
                        $gameSystem.setPopupSubWindowPosition(2);
                        break;
                    case 'SUB_POS_RIGHT' :
                    case 'サブ位置_右':
                        $gameSystem.setPopupSubWindowPosition(3);
                        break;
                }
                break;
            case 'MWP_ADJUST':
            case 'フキダシウィンドウ調整':
                switch (getCommandName(args[0])) {
                    case 'SIZE' :
                    case 'サイズ':
                        $gameSystem.setPopupAdjustSize(getArgNumber(args[1]), getArgNumber(args[2]));
                        break;
                    case 'POS' :
                    case '位置':
                        $gameSystem.setPopupAdjustPosition(getArgNumber(args[1]), getArgNumber(args[2]));
                        break;
                }
                break;
        }
    };

    var _Game_Interpreter_terminate      = Game_Interpreter.prototype.terminate;
    Game_Interpreter.prototype.terminate = function() {
        _Game_Interpreter_terminate.apply(this, arguments);
        if (this._depth === 0 && this.isGameMapInterpreter()) {
            if (imported_FTKR_EMW()) {
                $gameSystem.clearMessagePopupEx(this.windowId());
            } else {
                $gameSystem.clearMessagePopup();
            }
        }
    };

    Game_Interpreter.prototype.setGameMapInterpreter = function() {
        this._gameMapInterpreter = true;
    };

    Game_Interpreter.prototype.isGameMapInterpreter = function() {
        return this._gameMapInterpreter;
    };

    //=============================================================================
    // Game_System
    //  ポップアップフラグを保持します。
    //=============================================================================
    var _Game_System_initialize      = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function() {
        _Game_System_initialize.apply(this, arguments);
        this._messagePopupCharacterId       = 0;
        this._messagePopupPosition          = null;
        this._messagePopupAdjustSize        = null;
        this._messagePopupAdjustPosition    = null;
        this._messagePopupWindowSkin        = null;
        this._messagePopupSubWindowPosition = 0;
    };

    Game_System.prototype.setPopupSubWindowPosition = function(position) {
        this._messagePopupSubWindowPosition = position.clamp(0, 3);
    };

    Game_System.prototype.getPopupSubWindowPosition = function() {
        return this._messagePopupSubWindowPosition;
    };

    Game_System.prototype.setPopupWindowSkin = function(fileName) {
        this._messagePopupWindowSkin = fileName;
        ImageManager.loadSystem(fileName);
    };

    Game_System.prototype.getPopupWindowSkin = function() {
        return this._messagePopupWindowSkin;
    };

    Game_System.prototype.setMessagePopup = function(id) {
        this._messagePopupCharacterId = id;
    };

    Game_System.prototype.clearMessagePopup = function() {
        this._messagePopupCharacterId = 0;
    };

    Game_System.prototype.getMessagePopupId = function() {
        return this._messagePopupCharacterId !== 0 ? this._messagePopupCharacterId : null;
    };

    Game_System.prototype.setPopupFixUpper = function() {
        this._messagePopupPosition = 1;
    };

    Game_System.prototype.setPopupFixLower = function() {
        this._messagePopupPosition = 2;
    };

    Game_System.prototype.setPopupAuto = function() {
        this._messagePopupPosition = 0;
    };

    Game_System.prototype.setPopupAdjustSize = function(w, h) {
        this._messagePopupAdjustSize = [w, h];
    };

    Game_System.prototype.getPopupAdjustSize = function() {
        return this._messagePopupAdjustSize;
    };

    Game_System.prototype.setPopupAdjustPosition = function(x, y) {
        this._messagePopupAdjustPosition = [x, y];
    };

    Game_System.prototype.getPopupAdjustPosition = function() {
        return this._messagePopupAdjustPosition;
    };

    Game_System.prototype.isPopupFixUpper = function() {
        return this._messagePopupPosition === 1;
    };

    Game_System.prototype.isPopupFixLower = function() {
        return this._messagePopupPosition === 2;
    };

    //=============================================================================
    // Game_Map
    //  イベント起動時に自動設定を適用します。
    //=============================================================================
    var _Game_Map_setupStartingMapEvent      = Game_Map.prototype.setupStartingMapEvent;
    Game_Map.prototype.setupStartingMapEvent = function() {
        var result = _Game_Map_setupStartingMapEvent.apply(this, arguments);
        if (result) {
            if (paramAutoPopup) {
                $gameSystem.setMessagePopup(this._interpreter.eventId());
            } else {
                if (imported_FTKR_EMW()) {
                    $gameSystem.clearMessagePopupEx(0);
                } else {
                    $gameSystem.clearMessagePopup();
                }
            }
        }
        return result;
    };

    var _Game_Map_setup      = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _Game_Map_setup.apply(this, arguments);
        this._interpreter.setGameMapInterpreter();
    };

    //=============================================================================
    // Game_Troop
    //  戦闘開始時にポップアップフラグを解除します。
    //=============================================================================
    var _Game_Troop_setup      = Game_Troop.prototype.setup;
    Game_Troop.prototype.setup = function(troopId) {
        _Game_Troop_setup.apply(this, arguments);
        $gameSystem.clearMessagePopup();
    };

    //=============================================================================
    // Game_CharacterBase
    //  キャラクターの高さを設定します。
    //=============================================================================
    var _Game_CharacterBase_initMembers      = Game_CharacterBase.prototype.initMembers;
    Game_CharacterBase.prototype.initMembers = function() {
        _Game_CharacterBase_initMembers.apply(this, arguments);
        this.setSizeForMessagePopup(0, 0);
    };

    Game_CharacterBase.prototype.setSizeForMessagePopup = function(width, height) {
        this._size = [width, height];
    };

    Game_CharacterBase.prototype.getHeightForPopup = function() {
        return this._size[1];
    };

    var _Scene_Map_isReady      = Scene_Map.prototype.isReady;
    Scene_Map.prototype.isReady = function() {
        var ready   = _Scene_Map_isReady.apply(this, arguments);
        var popSkin = $gameSystem.getPopupWindowSkin();
        if (popSkin && ready) {
            var bitmap = ImageManager.loadSystem(popSkin);
            return bitmap.isReady();
        }
        return ready;
    };

    //=============================================================================
    // Sprite_Character
    //  キャラクターの高さを逆設定します。
    //=============================================================================
    var _Sprite_Character_updateBitmap      = Sprite_Character.prototype.updateBitmap;
    Sprite_Character.prototype.updateBitmap = function() {
        if (this.isImageChanged()) this._imageChange = true;
        _Sprite_Character_updateBitmap.apply(this, arguments);
        if (this._imageChange) {
            this.bitmap.addLoadListener(function() {
                var width  = this.bitmap.width === 1 ? $gameMap.tileWidth() : this.patternWidth();
                var height = this.bitmap.height === 1 ? $gameMap.tileHeight() : this.patternHeight();
                this._character.setSizeForMessagePopup(width, height);
            }.bind(this));
            this._imageChange = false;
        }
    };

    //=============================================================================
    // Window_Base
    //  共通処理を定義します。
    //=============================================================================
    var _Window_Base_loadWindowskin      = Window_Base.prototype.loadWindowskin;
    Window_Base.prototype.loadWindowskin = function() {
        var popSkin = $gameSystem.getPopupWindowSkin();
        if (this.isPopup() && popSkin) {
            this.windowskin = ImageManager.loadSystem(popSkin);
        } else {
            _Window_Base_loadWindowskin.apply(this, arguments);
        }
    };

    Window_Base.prototype.setPauseSignToTail = function(lowerFlg) {
        if (lowerFlg) {
            this._windowPauseSignSprite.rotation = 180 * Math.PI / 180;
            this._windowPauseSignSprite.y        = 12;
            this._windowPauseSignSprite.anchor.y = 0;
        } else {
            this._windowPauseSignSprite.rotation = 0;
            this._windowPauseSignSprite.y        = this.height + 12;
            this._windowPauseSignSprite.anchor.y = 1;
        }
        this._pauseSignToTail = true;
    };

    Window_Base.prototype.setPauseSignToNormal = function() {
        this._windowPauseSignSprite.rotation = 0;
        this._windowPauseSignSprite.anchor.y = 1.0;
        this._windowPauseSignSprite.move(this._width / 2, this._height);
        this._pauseSignToTail = false;
    };

    var _Window_Base_updatePauseSign       = Window_Base.prototype._updatePauseSign;
    Window_Base.prototype._updatePauseSign = function() {
        _Window_Base_updatePauseSign.apply(this, arguments);
        if (this._pauseSignToTail) this._windowPauseSignSprite.alpha = 1.0;
    };

    Window_Base.prototype.isPopupLower = function() {
        return $gameSystem.isPopupFixLower() || (!$gameSystem.isPopupFixUpper() && this.y < 0);
    };

    Window_Base.prototype.setPopupPosition = function(character) {
        var pos      = $gameSystem.getPopupAdjustPosition();
        this.x       = character.screenX() - this.width / 2 + (pos ? pos[0] : 0);
        this.y       = character.screenY() - this.height - (character.getHeightForPopup() + 8) + (pos ? pos[1] : 0);
        var lowerFlg = this.isPopupLower();
        if (lowerFlg) this.y = character.screenY() + 8;
        this.setPauseSignToTail(lowerFlg);
        var deltaX = 0;
        if (this.x < 0) {
            deltaX = this.x;
            this.x = 0;
        }
        if (this.x + this.width > Graphics.boxWidth) {
            deltaX = this.x + this.width - Graphics.boxWidth;
            this.x = Graphics.boxWidth - this.width;
        }
        this._windowPauseSignSprite.x = this._width / 2 + deltaX;
    };

    Window_Base.prototype.updatePlacementPopup = function() {
        if (!this._messageWindow) return;
        if (paramLinkage) {
            switch ($gameSystem.getPopupSubWindowPosition()) {
                case 0:
                    this.x = this._messageWindow.x;
                    this.y = this._messageWindow.y + this._messageWindow.height;
                    this.setPauseSignToNormal();
                    break;
                case 1:
                    this.setPopupPosition($gamePlayer);
                    break;
                case 2:
                    var pos = this._messageWindow.getSubWindowPosition();
                    this.x  = pos.x;
                    this.y  = pos.y;
                    this.setPauseSignToNormal();
                    this.opacity = 0;
                    break;
                case 3:
                    this.x = this._messageWindow.x + this._messageWindow.width / 2 + 16;
                    this.y = this._messageWindow.y + this._messageWindow.height;
                    this.setPauseSignToNormal();
                    break;
            }
        } else {
            this.y = Graphics.boxHeight - this.height - this._messageWindow.windowHeight() / 2;
        }
    };

    Window_Base.prototype.isPopup = function() {
        return false;
    };

    Window_Base.prototype.isPopupLinkage = function() {
        return this.isPopup() && paramLinkage;
    };

    Window_Base.prototype.resetLayout = function() {
        this.padding = this.standardPadding();
        this.width   = this.windowWidth();
        this.height  = this.windowHeight();
        this.loadWindowskin();
        this.setPauseSignToNormal();
    };

    var _Window_Base_makeFontBigger = Window_Base.prototype.makeFontBigger;
    Window_Base.prototype.makeFontBigger = function() {
        if (this.isValidFontRangeForPopup()) {
            if (this.contents.fontSize <= paramFontUpperLimit) {
                this.contents.fontSize += paramFontSizeRange;
            }
        } else {
            _Window_Base_makeFontBigger.apply(this, arguments);
        }
    };

    var _Window_Base_makeFontSmaller = Window_Base.prototype.makeFontSmaller;
    Window_Base.prototype.makeFontSmaller = function() {
        if (this.isValidFontRangeForPopup()) {
            if (this.contents.fontSize >= paramFontLowerLimit) {
                this.contents.fontSize -= paramFontSizeRange;
            }
        } else {
            _Window_Base_makeFontSmaller.apply(this, arguments);
        }
    };

    Window_Base.prototype.isValidFontRangeForPopup = function() {
        return this.isPopup() && paramFontSizeRange > 0
    };

    //=============================================================================
    // Window_Message
    //  ポップアップする場合、表示内容により座標とサイズを自動設定します。
    //=============================================================================
    Window_Message._faceHeight = Math.floor(Window_Base._faceHeight * paramFaceScale / 100);
    Window_Message._faceWidth  = Math.floor(Window_Base._faceWidth * paramFaceScale / 100);

    var _Window_Message_standardFontSize      = Window_Message.prototype.standardFontSize;
    Window_Message.prototype.standardFontSize = function() {
        return this.isPopup() ? paramFontSize : _Window_Message_standardFontSize.apply(this, arguments);
    };

    var _Window_Message_standardPadding      = Window_Message.prototype.standardPadding;
    Window_Message.prototype.standardPadding = function() {
        return this.isPopup() ? paramPadding : _Window_Message_standardPadding.apply(this, arguments);
    };

    var _Window_Message_calcTextHeight      = Window_Message.prototype.calcTextHeight;
    Window_Message.prototype.calcTextHeight = function(textState, all) {
        var height = _Window_Message_calcTextHeight.apply(this, arguments);
        return this.isPopup() ? height - 8 + paramBetweenLines : height;
    };

    var _Window_Message_startMessage      = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function() {
        this.updateTargetCharacterId();
        this.loadWindowskin();
        _Window_Message_startMessage.apply(this, arguments);
        this.resetLayout();
    };

    Window_Message.prototype.updateTargetCharacterId = function() {
        this._targetCharacterId = $gameSystem.getMessagePopupId();
    };

    var _Window_Message_resetFontSettings      = Window_Message.prototype.resetFontSettings;
    Window_Message.prototype.resetFontSettings = function() {
        _Window_Message_resetFontSettings.apply(this, arguments);
        if (this.isPopup()) this.contents.fontSize = paramFontSize;
    };

    Window_Message.prototype.getPopupTargetCharacter = function() {
        var id = this._targetCharacterId;
        if (id < -1) {
            return $gamePlayer.followers().follower((id * -1) - 2);
        } else if (id === -1) {
            return $gamePlayer;
        } else if (id > -1) {
            return $gameMap.event(id);
        } else {
            return null;
        }
    };

    Window_Message.prototype.isPopup = function() {
        return !!this.getPopupTargetCharacter();
    };

    var _Window_Message_update      = Window_Message.prototype.update;
    Window_Message.prototype.update = function() {
        _Window_Message_update.apply(this, arguments);
        var prevX = this.x;
        var prevY = this.y;
        if (this.openness > 0 && this.isPopup()) this.updatePlacementPopup();
        if ((prevX !== this.x || prevY !== this.y) && this.isClosing()) {
            this.openness = 0;
        }
    };

    var _Window_Message_updatePlacement      = Window_Message.prototype.updatePlacement;
    Window_Message.prototype.updatePlacement = function() {
        if (typeof Yanfly === 'undefined' || !Yanfly.Message) {
            this.x = 0;
        }
        _Window_Message_updatePlacement.apply(this, arguments);
        if (!this.isPopup()) {
            return;
        }
        this.updatePlacementPopup();
    };

    Window_Message.prototype.isPopupLower = function() {
        return $gameSystem.isPopupFixLower() || (!$gameSystem.isPopupFixUpper() && this.getWindowTopY() < 0);
    };

    Window_Message.prototype.getWindowTopY = function() {
        return this.y - (this._nameWindow && this._nameWindow.visible ? this._nameWindow.height : 0);
    };

    Window_Message.prototype.updatePlacementPopup = function() {
        this.setPopupPosition(this.getPopupTargetCharacter());
        if (this._choiceWindow && $gameMessage.isChoice()) {
            this._choiceWindow.updatePlacementPopup();
        }
        this._numberWindow.updatePlacementPopup();
        if (this._nameWindow && checkTypeFunction(this._nameWindow.updatePlacementPopup)) {
            this._nameWindow.updatePlacementPopup();
        }
    };

    Window_Message.prototype.resetLayout = function() {
        this.padding = this.standardPadding();
        if (this.getPopupTargetCharacter()) {
            this.processVirtual();
        } else {
            this.width  = this.windowWidth();
            this.height = this.windowHeight();
            this.setPauseSignToNormal();
        }
        this.updatePlacement();
        this.updateBackground();
    };

    Window_Message.prototype.processVirtual = function() {
        var virtual      = {};
        virtual.index    = 0;
        virtual.text     = this.convertEscapeCharacters($gameMessage.allText());
        virtual.maxWidth = 0;
        this.newPage(virtual);
        while (!this.isEndOfText(virtual)) {
            this.processVirtualCharacter(virtual);
        }
        virtual.y += virtual.height;
        this._subWindowY = virtual.y;
        var choices      = $gameMessage.choices();
        if (choices && $gameSystem.getPopupSubWindowPosition() === 2) {
            virtual.y += choices.length * this._choiceWindow.lineHeight();
            virtual.maxWidth = Math.max(virtual.maxWidth, this.newLineX() + this._choiceWindow.maxChoiceWidth());
        }
        var digit = $gameMessage.numInputMaxDigits();
        if (digit && $gameSystem.getPopupSubWindowPosition() === 2) {
            virtual.y += this._numberWindow.lineHeight();
        }
        var width  = virtual.maxWidth + this.padding * 2;
        var height = Math.max(this.getFaceHeight(), virtual.y) + this.padding * 2;
        var adjust = $gameSystem.getPopupAdjustSize();
        if (adjust) {
            width += adjust[0];
            height += adjust[1];
        }
        this.width  = width;
        this.height = height;
        this.resetFontSettings();
    };

    Window_Message.prototype.getSubWindowPosition = function() {
        var pos = new Point();
        pos.x   = this.x + this.newLineX();
        pos.y   = this.y + this._subWindowY;
        return pos;
    };

    Window_Message.prototype.processVirtualCharacter = function(textState) {
        switch (textState.text[textState.index]) {
            case '\n':
                this.processNewLine(textState);
                break;
            case '\f':
                this.processNewPage(textState);
                break;
            case '\x1b':
                this.processVirtualEscapeCharacter(this.obtainEscapeCode(textState), textState);
                break;
            default:
                this.processVirtualNormalCharacter(textState);
                break;
        }
    };

    var _Window_Message_processNewLine = Window_Message.prototype.processNewLine;
    Window_Message.prototype.processNewLine = function(textState) {
        if (this.isPopup()) {
            textState.index++;
            _Window_Message_processNewLine.apply(this, arguments);
            textState.index--;
        } else {
            _Window_Message_processNewLine.apply(this, arguments);
        }
    };

    Window_Message.prototype.processVirtualEscapeCharacter = function(code, textState) {
        switch (code) {
            case 'C':
                this.changeTextColor(this.textColor(this.obtainEscapeParam(textState)));
                break;
            case 'I':
                this.processVirtualDrawIcon(this.obtainEscapeParam(textState), textState);
                break;
            case '{':
                this.makeFontBigger();
                break;
            case '}':
                this.makeFontSmaller();
                break;
            default:
                this.obtainEscapeParam(textState);
                if (this.obtainEscapeString) {
                    this.obtainEscapeString(textState);
                }
        }
    };

    Window_Message.prototype.processVirtualNormalCharacter = function(textState) {
        var c              = textState.text[textState.index++];
        textState.x += this.textWidth(c);
        textState.maxWidth = Math.max(textState.maxWidth, textState.x);
    };

    Window_Message.prototype.processVirtualDrawIcon = function(iconIndex, textState) {
        textState.x += Window_Base._iconWidth + 4;
        textState.maxWidth = Math.max(textState.maxWidth, textState.x);
    };

    var _Window_Message_newLineX      = Window_Message.prototype.newLineX;
    Window_Message.prototype.newLineX = function() {
        if (this.isPopup()) {
            return $gameMessage.faceName() === '' ? 0 : Window_Message._faceWidth + 8;
        } else {
            return _Window_Message_newLineX.apply(this, arguments);
        }
    };

    Window_Message.prototype.getFaceHeight = function() {
        return $gameMessage.faceName() === '' ? 0 : Window_Message._faceHeight;
    };

    var _Window_Message_drawFace      = Window_Message.prototype.drawFace;
    Window_Message.prototype.drawFace = function(faceName, faceIndex, x, y, width, height) {
        if (this.isPopup()) {
            width      = width || Window_Base._faceWidth;
            height     = height || Window_Base._faceHeight;
            var bitmap = ImageManager.loadFace(faceName);
            var pw     = Window_Base._faceWidth;
            var ph     = Window_Base._faceHeight;
            var sw     = Math.min(width, pw);
            var sh     = Math.min(height, ph);
            var dx     = Math.floor(x + Math.max(width - pw, 0) / 2);
            var dy     = Math.floor(y + Math.max(height - ph, 0) / 2);
            var sx     = faceIndex % 4 * pw + (pw - sw) / 2;
            var sy     = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
            this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, Window_Message._faceWidth, Window_Message._faceHeight);
        } else {
            _Window_Message_drawFace.apply(this, arguments);
        }
    };

    //=============================================================================
    // Window_ChoiceList
    //  ポップアップする場合、メッセージウィンドウに連動して表示位置と余白を調整します。
    //=============================================================================
    var _Window_ChoiceList_standardFontSize      = Window_ChoiceList.prototype.standardFontSize;
    Window_ChoiceList.prototype.standardFontSize = function() {
        return this.isPopupLinkage() ? paramFontSize : _Window_ChoiceList_standardFontSize.apply(this, arguments);
    };

    var _Window_ChoiceList_standardPadding      = Window_ChoiceList.prototype.standardPadding;
    Window_ChoiceList.prototype.standardPadding = function() {
        return this.isPopupLinkage() ? paramPadding : _Window_ChoiceList_standardPadding.apply(this, arguments);
    };

    var _Window_ChoiceList_lineHeight      = Window_ChoiceList.prototype.lineHeight;
    Window_ChoiceList.prototype.lineHeight = function() {
        return this.isPopupLinkage() ? paramFontSize + 8 : _Window_ChoiceList_lineHeight.apply(this, arguments);
    };

    var _Window_ChoiceList_updatePlacement      = Window_ChoiceList.prototype.updatePlacement;
    Window_ChoiceList.prototype.updatePlacement = function() {
        this.resetLayout();
        _Window_ChoiceList_updatePlacement.apply(this, arguments);
        if (this.isPopup()) this.updatePlacementPopup();
    };

    var _Window_ChoiceList_refresh      = Window_ChoiceList.prototype.refresh;
    Window_ChoiceList.prototype.refresh = function() {
        this.resetLayout();
        _Window_ChoiceList_refresh.apply(this, arguments);
    };

    Window_ChoiceList.prototype.isPopup = function() {
        return this._messageWindow.isPopup();
    };

    var _Window_ChoiceList_numVisibleRows      = Window_ChoiceList.prototype.numVisibleRows;
    Window_ChoiceList.prototype.numVisibleRows = function() {
        var result = _Window_ChoiceList_numVisibleRows.apply(this, arguments);
        if (this.isPopupLinkage()) {
            result = Math.min($gameMessage.choices().length, 8);
        }
        return result;
    };

    //=============================================================================
    // Window_NumberInput
    //  ポップアップする場合、メッセージウィンドウに連動して表示位置と余白を調整します。
    //=============================================================================
    var _Window_NumberInput_standardFontSize      = Window_NumberInput.prototype.standardFontSize;
    Window_NumberInput.prototype.standardFontSize = function() {
        return this.isPopupLinkage() ? paramFontSize : _Window_NumberInput_standardFontSize.apply(this, arguments);
    };

    var _Window_NumberInput_standardPadding      = Window_NumberInput.prototype.standardPadding;
    Window_NumberInput.prototype.standardPadding = function() {
        return this.isPopupLinkage() ? paramPadding : _Window_NumberInput_standardPadding.apply(this, arguments);
    };

    var _Window_NumberInput_lineHeight      = Window_NumberInput.prototype.lineHeight;
    Window_NumberInput.prototype.lineHeight = function() {
        return this.isPopupLinkage() ? paramFontSize + 8 : _Window_NumberInput_lineHeight.apply(this, arguments);
    };

    var _Window_NumberInput_updatePlacement      = Window_NumberInput.prototype.updatePlacement;
    Window_NumberInput.prototype.updatePlacement = function() {
        this.resetLayout();
        this.opacity = 255;
        _Window_NumberInput_updatePlacement.apply(this, arguments);
        if (this.isPopup()) this.updatePlacementPopup();
    };

    Window_NumberInput.prototype.isPopup = function() {
        return this._messageWindow.isPopup();
    };

    //=============================================================================
    // Window_NameBox
    //  メッセージウィンドウに連動して表示位置と余白を調整します。
    //=============================================================================
    if (typeof Window_NameBox !== 'undefined') {
        var _Window_NameBox_standardFontSize      = Window_NameBox.prototype.standardFontSize;
        Window_NameBox.prototype.standardFontSize = function() {
            return this.isPopupLinkage() ? paramFontSize : _Window_NameBox_standardFontSize.apply(this, arguments);
        };

        var _Window_NameBox_standardPadding      = Window_NameBox.prototype.standardPadding;
        Window_NameBox.prototype.standardPadding = function() {
            return this.isPopupLinkage() ? paramPadding : _Window_NameBox_standardPadding.apply(this, arguments);
        };

        var _Window_NameBox_lineHeight      = Window_NameBox.prototype.lineHeight;
        Window_NameBox.prototype.lineHeight = function() {
            return this.isPopupLinkage() ? paramFontSize + 8 : _Window_NameBox_lineHeight.apply(this, arguments);
        };

        var _Window_NameBox_updatePlacement      = Window_NameBox.prototype.updatePlacement;
        Window_NameBox.prototype.updatePlacement = function() {
            this.resetLayout();
            _Window_NameBox_updatePlacement.apply(this, arguments);
            if (this.isPopup()) this.updatePlacementPopup();
        };

        var _Window_NameBox_refresh      = Window_NameBox.prototype.refresh;
        Window_NameBox.prototype.refresh = function() {
            this.resetLayout();
            return _Window_NameBox_refresh.apply(this, arguments);
        };

        Window_NameBox.prototype.isPopup = function() {
            return this._parentWindow.isPopup();
        };

        Window_NameBox.prototype.updatePlacementPopup = function() {
            this.x = this._parentWindow.x;
            this.y = this._parentWindow.y - this.height;
        };
    }

    //=============================================================================
    // ウィンドウを透過して重なり合ったときの表示を自然にします。
    //=============================================================================
    if (paramThroughWindow && !WindowLayer.throughWindow) {
        WindowLayer.throughWindow = true;
        //=============================================================================
        //  WindowLayer
        //   ウィンドウのマスク処理を除去します。
        //=============================================================================
        WindowLayer.prototype._maskWindow = function(window) {};

        WindowLayer.prototype._canvasClearWindowRect = function(renderSession, window) {};
    }

    //=============================================================================
    // FTKR_ExMessageWindow2.js の修正
    //=============================================================================
    if (imported_FTKR_EMW()) {

        //------------------------------------------------------------------------
        //Game_System
        //フキダシウィンドウの有効無効フラグをウィンドウID毎に保持
        //------------------------------------------------------------------------
        var _EMW_Game_System_initialize = Game_System.prototype.initialize;
        Game_System.prototype.initialize = function() {
            _EMW_Game_System_initialize.apply(this, arguments);
            this._messagePopupCharacterIds = [];
        };

        Game_System.prototype.setMessagePopupEx = function(windowId, eventId) {
            this._messagePopupCharacterIds[windowId] = eventId;
        };

        var _EMW_Game_System_clearMessagePopup = Game_System.prototype.clearMessagePopup;
        Game_System.prototype.clearMessagePopup = function() {
            _EMW_Game_System_clearMessagePopup.apply(this, arguments);
            this._messagePopupCharacterIds.forEach( function(id, i){
                this.clearMessagePopupEx(i);
            },this);
        };

        Game_System.prototype.clearMessagePopupEx = function(windowId) {
            this._messagePopupCharacterIds[windowId] = 0;
        };

        Game_System.prototype.getMessagePopupIdEx = function(windowId) {
            windowId = windowId || 0;
            return this._messagePopupCharacterIds[windowId] !== 0 ? this._messagePopupCharacterIds[windowId] : null;
        };

        //------------------------------------------------------------------------
        //Scene_Map
        //場所移動時にすべてのウィンドウIDのフキダシ無効化
        //------------------------------------------------------------------------
        var _EMW_Scene_Map_terminate = Scene_Map.prototype.terminate;
        Scene_Map.prototype.terminate = function() {
            _EMW_Scene_Map_terminate.call(this);
            if (SceneManager.isNextScene(Scene_Map)) {
                $gameSystem.clearMessagePopup();
            }
        };

        //------------------------------------------------------------------------
        //Window_MessageEx
        //------------------------------------------------------------------------
        var _Window_MessageEx_startMessage      = Window_MessageEx.prototype.startMessage;
        Window_MessageEx.prototype.startMessage = function() {
            this.updateTargetCharacterId();
            this.loadWindowskin();
            _Window_MessageEx_startMessage.apply(this, arguments);
            this.resetLayout();
        };

        var _Window_MessageEx_updatePlacement      = Window_MessageEx.prototype.updatePlacement;
        Window_MessageEx.prototype.updatePlacement = function() {
            if (typeof Yanfly === 'undefined' || !Yanfly.Message) {
                this.x = 0;
            }
            _Window_MessageEx_updatePlacement.apply(this, arguments);
            if (!this.isPopup()) {
                return;
            }
            this.updatePlacementPopup();
        };

        Window_MessageEx.prototype.updateTargetCharacterId = function() {
            var id = $gameSystem.getMessagePopupIdEx(this._windowId);
            this._targetCharacterId = $gameSystem.getMessagePopupIdEx(this._windowId);
        };

        Window_MessageEx.prototype.updatePlacementPopup = function() {
            this.setPopupPosition(this.getPopupTargetCharacter());
            if (this._choiceWindow && this._gameMessage.isChoice()) {
                this._choiceWindow.updatePlacementPopup();
            }
            this._numberWindow.updatePlacementPopup();
            if (this._nameWindow && checkTypeFunction(this._nameWindow.updatePlacementPopup)) {
                this._nameWindow.updatePlacementPopup();
            }
        };

        Window_MessageEx.prototype.processVirtual = function() {
            var virtual      = {};
            virtual.index    = 0;
            virtual.text     = this.convertEscapeCharacters(this._gameMessage.allText());
            virtual.maxWidth = 0;
            this.newPage(virtual);
            while (!this.isEndOfText(virtual)) {
                this.processVirtualCharacter(virtual);
            }
            virtual.y += virtual.height;
            this._subWindowY = virtual.y;
            var choices      = this._gameMessage.choices();
            if (choices && $gameSystem.getPopupSubWindowPosition() === 2) {
                virtual.y += choices.length * this._choiceWindow.lineHeight();
                virtual.maxWidth = Math.max(virtual.maxWidth, this.newLineX() + this._choiceWindow.maxChoiceWidth());
            }
            var digit = this._gameMessage.numInputMaxDigits();
            if (digit && $gameSystem.getPopupSubWindowPosition() === 2) {
                virtual.y += this._numberWindow.lineHeight();
            }
            var width  = virtual.maxWidth + this.padding * 2;
            var height = Math.max(this.getFaceHeight(), virtual.y) + this.padding * 2;
            var adjust = $gameSystem.getPopupAdjustSize();
            if (adjust) {
                width += adjust[0];
                height += adjust[1];
            }
            this.width  = width;
            this.height = height;
            this.resetFontSettings();
        };

        var _Window_MessageEx_newLineX = Window_MessageEx.prototype.newLineX;
        Window_MessageEx.prototype.newLineX = function() {
            if (this.isPopup()) {
                return this._gameMessage.faceName() === '' ? 0 : Window_Message._faceWidth + 8;
            } else {
                return _Window_MessageEx_newLineX.apply(this, arguments);
            }
        };

        Window_MessageEx.prototype.getFaceHeight = function() {
            return this._gameMessage.faceName() === '' ? 0 : Window_Message._faceHeight;
        };

        //------------------------------------------------------------------------
        //Window_ChoiceListEx
        //------------------------------------------------------------------------
        var _Window_ChoiceListEx_numVisibleRows       = Window_ChoiceListEx.prototype.numVisibleRows;
        Window_ChoiceListEx.prototype.numVisibleRows = function() {
            var result = _Window_ChoiceListEx_numVisibleRows.apply(this, arguments);
            if (this.isPopupLinkage()) {
                result = Math.min(this._gameMessage.choices().length, 8);
            }
            return result;
        };

        var _Window_ChoiceListEx_updatePlacement      = Window_ChoiceListEx.prototype.updatePlacement;
        Window_ChoiceListEx.prototype.updatePlacement = function() {
            this.resetLayout();
            _Window_ChoiceListEx_updatePlacement.apply(this, arguments);
            if (this.isPopup()) this.updatePlacementPopup();
        };

        //------------------------------------------------------------------------
        //Window_NumberInputEx
        //------------------------------------------------------------------------
        var _Window_NumberInputEx_updatePlacement      = Window_NumberInputEx.prototype.updatePlacement;
        Window_NumberInputEx.prototype.updatePlacement = function() {
            this.resetLayout();
            this.opacity = 255;
            _Window_NumberInputEx_updatePlacement.apply(this, arguments);
            if (this.isPopup()) this.updatePlacementPopup();
        };

    }//FTKR_ExMessageWindow2
})();

