## 文件读写操作

node.js 内置的''fs''模块负责文件读写。

### 文件读操作
#### 异步方式
用``fs.readFile``进行文件的异步读取，
``` js
    var fs = require('fs');
    //读取文件内容
    fs.readFile("text.text","utf-8",function(error,data){
        if(error){
            console.log(error);
        }else{
            console.log(data);
        }
    });
    //读取图片大小
    fs.readFile("ico-pig.png",function(error,data){
        if(error){
            console.log(error);
        }else{
            console.log(data.length+"bytes");
            console.log(data.length/1024+"kb");

        }
    });
    //将buffer对象进行转换
    fs.readFile("text.text",function(error,data){
        if(error){
            console.log(error);
        }else{
            console.log(data.toString("utf-8"));
        }
    });
```
#### 同步方式
用''fs.readFileSync''j进行文件的同步读取。nodejs的文件读写操作同步一般是加上''Sync''。
``` js
var text = fs.readFileSync("text.text","utf-8");
console.log(text);

//读取异常捕获
try {
    var text2 = fs.readFileSync("text.text");
    console.log(text2);
} catch (e) {
    console.log(e);
}
```

### 文件写操作

``` js
fs.writeFile("text.text","你好！！！！！！！",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("ok");
    }
});

fs.readFile("text.text","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
```

### stat文件信息
``` js
// stat 文件信息
fs.stat("ico-pig.png",function(err,stat){
    if(err){
        console.log(err);
    }else{
        // 是否是文件:
        console.log("ifFile:"+stat.isFile());
         // 是否是目录:
        console.log("isDirectory:"+stat.isDirectory());
        if(stat.isFile()){
            //文件大小
            console.log("size:"+stat.size);
            //创建时间
            console.log("创建时间:"+ stat.birthtime);
            // 修改时间, Date对象:
            console.log('修改时间: ' + stat.mtime);
        }
    }
});
```
