# Node.js Stream(流)

Stream是一个抽象的接口。

Stream有4种流类型。

    Readable - 可读操作
    Writable - 可写操作
    Duplex - 可读可写操作
    Transform - 操作被写入数据，然后读出结果

所有的 Stream 对象都是 EventEmitter 的实例， 常用的事件有：

    data - 当有数据可读时触发。
    end - 没有更多的数据可读时触发。
    error - 在接收和写入过程中发生错误时触发。
    finish - 所有数据已被写入到底层系统时触发。
