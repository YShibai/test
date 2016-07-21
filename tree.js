// fs
var fs = require('fs');
const RootD = 'C:\\Users\\Public\\Documents\\a';
var _dir ='C:\\Users\\Public\\Documents\\a';
var tv = "<ul id='sitemap2'>";
var tmpD = "";
var i = 0;
var arei=new Array();
// 指定ディレクトリを検索して一覧を表示
fs.readdir(_dir, function(err, files){

    // filesの中身を繰り替えして出力
    for(var h=0;h<files.length; h++){
        if(fs.statSync(_dir + "\\" + files[h]).isFile()){
        }else{
            arei[i]=_dir + "\\" + files[h];
            var tmp=arei[i];
            i+=1;
            tv += "<li><a href='javascript:void(0)' onClick='javascript:void(0)'>" +files[h] + "</a><ul>";
                    fs.readdir(tmp, function(err, files2){
                      for(var j=0; j<files2.length; j++){
                          if(fs.statSync(tmp + "\\" + files2[j]).isFile()){
                          }else{
                            tv += "<li><a href='javascript:void(0)' onClick='javascript:void(0)'>" +files2[j] + "</a><ul>";
                            tv += "</ul></li>";
                          }
                      }
                    });
            tv += "</ul></li>";
        }
    }
      tv += "</ul>";
      alert(tv);
      setTimeout(function(){
              document.getElementById('res5').innerHTML = tv;
      },1000);
});
