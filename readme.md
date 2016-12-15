##### webview消息通知机制
- object:{{一个URI加密过的字符串，解析后是个字符串格式对象，用于传递各种值}}
- open:{{一个URL，是需要app PUSH的新webview}}
- backto:{{一个URL，是需要app 返回到这个webview}}

##### 各个页面能收到的消息通知一览表
- 全局
	- 调用js的方法`getUserData()`，你会收到该用户的所有数据

- userCenter.html
	- 每次返回该页面时请调用`refreshUserData()`