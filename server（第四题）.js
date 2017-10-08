var http = require('http');
var fs = require('fs');
var url = require('url');
// 创建服务器
http.createServer( function (request, response) {
       // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // 响应文件内容
         response.write(data.toString());  
      }      
        var name = document.getElementById(name);
        var grade = document.getElementById(grade);
      // 判断并输出
    if (grade>=0 && grade<60){
    res.write(name + "不及格")
}  
    else if(grade>=60 && grade<85){
    res.write(name + "及格")
    }
    else if(grade>=85 && grade<90){
    res.wirte(name + "良好")
    }
    else if(grade>=90 && grade<=100){
    res.write(name + "优秀")
}
    else if(grade<0 && grade>100){
    res.write("您的输入有误,请重新输入")
}
           // 输出表单
    else{
    res.write(postHTML);
}
    res.end();
});
}).listen(8080);
