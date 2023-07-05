//客户端https协议访问
//服务端把证书和公钥传给客户端
//客户端生成会话密钥并用公钥加密
//服务端用私钥解密获得会话密钥
//服务端用会话密钥加密内容给客户端

var a = {
  b: function () {},
  c: 1,
};

console.log(JSON.stringify(a));
