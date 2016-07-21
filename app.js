// fs
var fs = require('fs');

// 検索するディレクトリ
//var _dir = __dirname + '\\dtree';
var _dir ='C:\\Users\\Public\\Documents\\a';
//var _dir ='D:\\';
var res = "";
var FolderInfo = new Array();
var FolderPath = "";
// 指定ディレクトリを検索して一覧を表示
fs.readdir(_dir, function(err, files){

    // filesの中身を繰り替えして出力
    files.forEach(function(file){
        var _type = "";
        if(fs.statSync(_dir + "\\" + file).isFile()){
            _type = "<img src='./file1/ico_file1a_02.gif'>";
            res += _type + file + "<br>";
        }else{
            _type = "<img src='./folder4/ico_folder4_1.gif' onClick='SubDir("+ "\"" + file + "\"" + ")'>";
            res += _type + "<a href='#' onClick='SubDir("+ "\"" + file + "\"" + ")'>" +file + "</a><br>";
        }
//        console.log(_type + _dir + "/" + file);
//        document.write(_type + _dir + "\\" + file + "<br>");
//        res += _type + _dir + "\\" + file + "<br>";
    });
      document.getElementById('res1').innerHTML = _dir;
      document.getElementById('res2').innerHTML = res;

});



//下の階層のディレクトリを検索・一覧表示
function SubDir(currentD){
  //前のカレントディレクトディレクトリに掘り下げたディレクトリを追加
    _dir += "\\"+ currentD;
    document.getElementById('res1').innerHTML = _dir;
    res = "";

    //1つ上のフォルダに戻る

    //初期化
     FolderInfo = new Array();
     FolderPath = "";
         //1つ上の階層のパスを取得
    　　FolderInfo = _dir.split('\\');
    　　for (i = 0; i < FolderInfo.length - 2; i++) {
    　　　　FolderPath += FolderInfo[i] + "\\";
    　　}
      FolderPath += FolderInfo[FolderInfo.length - 2];
      res += "<a href='#' onClick='UpDir()'>上のフォルダへ戻る</a><br><br>";

    // 指定ディレクトリを検索して一覧を表示
    fs.readdir(_dir, function(err, files){
        // filesの中身を繰り替えして出力
        files.forEach(function(file){
            var _type = "";
            if(fs.statSync(_dir + "\\" + file).isFile()){
                _type = "<img src='./file1/ico_file1a_02.gif'>";
                res += _type + file + "<br>";
            }else{
              _type = "<img src='./folder4/ico_folder4_1.gif' onClick='SubDir("+ "\"" + file + "\"" + ")'>";
              res += _type + "<a href='#' onClick='SubDir("+ "\"" + file + "\"" + ")'>" +file + "</a><br>";
            }


        });
            document.getElementById('res1').innerHTML = _dir;
            document.getElementById('res2').innerHTML = res;

    });

}

//上の階層のディレクトリを検索・一覧表示
function UpDir(){

      _dir = FolderPath;
      res = "";
              document.getElementById('res1').innerHTML = _dir;
      //1つ上のフォルダに戻る
      //1つ上の階層のパスを取得
       FolderInfo = new Array();
       FolderPath = "";
      　　FolderInfo = _dir.split('\\');
      　　for (i = 0; i < FolderInfo.length - 2; i++) {
      　　　　FolderPath += FolderInfo[i] + '\\';
      　　}
        FolderPath += FolderInfo[FolderInfo.length - 2];
        res += "<a href='#' onClick='UpDir()'>上のフォルダへ戻る</a><br><br>";

      // 指定ディレクトリを検索して一覧を表示
      fs.readdir(_dir, function(err, files){
          // filesの中身を繰り替えして出力
          files.forEach(function(file){
              var _type = "";
              if(fs.statSync(_dir + "\\" + file).isFile()){
                  _type = "<img src='./file1/ico_file1a_02.gif'>";
                  res += _type + file + "<br>";
              }else{
                _type = "<img src='./folder4/ico_folder4_1.gif' onClick='SubDir("+ "\"" + file + "\"" + ")'>";
                res += _type + "<a href='#' onClick='SubDir("+ "\"" + file + "\"" + ")'>" +file + "</a><br>";
              }


          });
              document.getElementById('res1').innerHTML = _dir;
              document.getElementById('res2').innerHTML = res;

      });
}
