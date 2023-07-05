//三次握手
//客户端发起请求携带syn=j,状态变为SYN_SENT
//服务端收到客户端的包,返回syn=k,ack=j+1,状态变为SYN_RECEIVED
//客户端收到服务端的包,返回ack=k+1,状态变为established

//四次挥手
//客户端向服务器发起断开连接请求 FIN=1,seq=u,进入状态FIN-WAIT-1
//服务端收到请求,返回报文 ACK=1,ack=u+1,seq=v 进入CLOSE-WAIT状态,并停止接受数据
//客户端收到报文,接受最后的数据,进入FIN-WAIT-2状态
//服务端停止发送数据后,发送报文 FIN=1,ack=u+1,seq=w,服务器进入LAST-WAIT状态等待最后确认
//客户端收到报文，返回ACK=1,ack=w+1,seq=u+1 进入TIME-WAIT并等待2ms后关闭连接,服务端收到请求后立刻关闭连接变为CLOSED状态
