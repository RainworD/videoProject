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
	- `refreshDataAndGetNewestOrder()`刷新数据
- rechange_main.html
	- 充值成功后会收到通知，回到accountBalance.html

- withdraw_main.html
	- 提现成功后会收到通知，回到accountBalance.html

- addCompany.html
	- 新增公司的时候，调用`addButton()`
	- 编辑公司的时候，调用`saveButton()`

- aboutus.html
	- 将会收到页面跳转通知

- message.html
	- 在页面加载完成后或刷新页面数据调用方法`reloadMessage()`
	- 会收到object:%7B%22newMessageNumber%22%3A192%7D，即得到未读总量

/*下面这段不要了
- message_center.html
	会收到`h5action:getWarningFixedLength_{{start}}_{{length}}`，start表示开始第几条，length表示多少条，把数据整合成以下格式
`{
	"data":[
		{"in_time":1482225047205,"reading":true,"id":22,"text":"<p>123</p>","title":"新增test"},
		{"in_time":1481964564591,"reading":true,"id":21,"text":"<p>123<img src=\"../../resources/685\" alt=\"\" width=\"1600\" height=\"1280\" /></p>","title":"123"}
	],
	"state":"0",
	"time":1482316470349
}`，
然后调用`endGetWarningFixedLength(这里传入json数据)`这个方法即可
*/

- article.html
	- 调用`loadArticle(articleId)`

- message_detail.html
	- 页面跳转进来message_detail.html?%7B"id"%3A'+{{messageId}}+'%2C"title"%3A"系统通告"%7D'

- company_management.html
	- `refreshData()`调用这个刷新数据

- 弹出键盘 "h5action:inputFocus"

- 任何界面，调用`checkUserId(userid)`，检查用户id是否正确


- company_device_detail.html
	- 设备解绑成功后，会收到"h5action:deviceUnbindSuccess:"+id
