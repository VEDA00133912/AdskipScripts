# AdSkipScript
Tver、Youtubeの広告をスキップするスクリプトです。<br>
コンソールで実行します<br>
MutationObserverでDOM変化を監視しています
## tver.js
tverの広告のスキップスクリプト。<br>
広告は秒数を示すバーの色が`#ffd647`になるのを利用して検出しています。<br>
広告が表示されるときに動画の秒数を`lastTime`に格納して置いてスキップ後に適用します。<br>
表示されたときは動画の開始位置を999秒に設定(広告より長い秒数)することで実質スキップされます。
## youtube.js
広告が表示されるときにある要素`.ytp-ad-badge__text--clean-player`(スポンサーと表示される部分)を利用して検出しています。<br>
検出されたら動画の開始位置を9999に設定してスキップします。
