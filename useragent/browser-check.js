var browserAgent = [
    "MSIE",    //ie
    "Edge",    
    "Firefox",  
    "safari && !chrome", //safari
    "chrome",   
    "QQBrowser|TencentTraveler", //QQ浏览器
    "UCWEB",                //uc浏览器
    "BIDUBrowser",          //百度浏览器    
    "360SE",                //360浏览器
    "LBBROWSER",            //猎豹浏览器
    "MetaSr|SE "         ////搜狗
];
var browserCheck = function(options){
    this.userAgent = options.userAgent || "";
}

browserCheck.prototype.checkIE = function(){
    if(this.userAgent.indexof(""))
}