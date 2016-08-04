# Node.js Stream(流)

Stream是一个抽象的接口。

Stream有4种流类型。

    Readable - 可读操作
    Writable - 可写操作
    Duplex - 可读可写操作
    Transform - 操作被写入数据，然后读出结果
    
所有的 Stream 对象都是 EventEmitter 的实例
