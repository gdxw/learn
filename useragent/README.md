## User-Agent

User Agent中文名为用户代理，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等。

例如：
```
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36
```
### User-Agent 浏览器版本判断

```
//Opera
opera

//Internet Explorer

MSIE  //MSIE字段后面的数字为版本号

    <IE8
    IE8
    IE9
    IE10+

//Microsoft Edge
Edge

//Firefox
Firefox

//Safari
safari && !chrome

//Chrome
chrome

//QQ浏览器
QQBrowser || TencentTraveler

//UC浏览器
UCWEB 

//百度浏览器
BIDUBrowser  

// 360浏览器
360SE

//猎豹浏览器
LBBROWSER

//搜狗
MetaSr || SE  
```

### 网络爬虫判断


