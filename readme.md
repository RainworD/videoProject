##### webview消息通知机制
- object:{{一个URI加密过的字符串，解析后是个字符串格式对象，用于传递各种值}}
- open:{{一个URL，是需要app PUSH的新webview}}
- backto:{{一个URL，是需要app 返回到这个webview}}
- javascript:{{ javascript code(maybe a function name), callback when webview loaded(if open a new one) or appeared(if backto old one)}}
- h5action:{{调用app端的函数 或 收到错误通知error: 10001}}
- navigatorRightButton:{{ button name in navigator's right top}}
- navigatorRightButtonColor:{{ color of button }}
- navigatorRightButtonFontSize:{{ font size of button }}
- navigatorRightButtonCallback:{{ javascript code, callback when tap this button}}
- navigatorTitle:{{ the name of View }}


##### 各个页面能收到的消息通知一览表
- 全局
	- 调用js的方法`getUserData()`，你会收到该用户的所有数据

- userCenter.html(b端的个人中心) / userInfo.html(c端的个人中心)
	- 每次返回到该页面时请调用`refreshUserData()`
	- 退出登录成功后，会收到'h5action:logout'

- deliver.html 
	- 选择同事，调用`chooseWorkmates()`，将收到消息
	- 选择完同事后回页面，调用`writeWorkmates()`，将选择好的同事写入
	- 发布动态`applyButton()`

- activityCenter.html
	- 会收到动态数量

- companyList.html
	- 从company_activity.html回到该页面，需要调用`reloadCompanyList()`刷新未读数

- addWorkmates.html
	- 点击电话icon会收到"h5action:getAddressBook"
	- 调用`setPhoneNumber()`将手机号写入webview
	- 点击app右上角的邀请，调用`applyButton()`进行邀请

- accountBalance.html
	- 进入提现和充值界面会收到通知

- rechange_main.html
	- 充值成功后会收到通知，回到accountBalance.html

- withdraw_main.html
	- 提现成功后会收到通知，回到accountBalance.html

- addCompany.html
	- 新增公司的时候，调用`addButton()`
	- 编辑公司的时候，调用`saveButton()`

- aboutus.html
	- 将会收到页面跳转通知











