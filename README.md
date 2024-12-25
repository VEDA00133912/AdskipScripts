# Tver-AdskipScript
Tverの広告高再生スクリプト
Tverのブラウザ版で広告が表示されたときに自動で検知して16倍速再生するスクリプトです。これ以上に速めるとおそらく動作しません
# 使い方
- `ctrl + J`でコンソールを開く
- tver.jsを貼り付ける
# 注意点
0.1秒事に確認するようにしているのでパフォーマンスに影響が出たら500や1000に変更してください<br>
速度変更の部分↓

```javascript
setInterval(monitorPlaybackRate, 100);
```
