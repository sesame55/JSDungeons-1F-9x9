"use strict";

// 放入迴圈的位置
var container = document.querySelector('.container');
var title = "<div class=\"firstBox\">\n<div class=\"d-flex\">\n    <span class=\"material-icons\"> clear </span>\n    <hr class=\"m-0 w-100 hr-style\" />\n    <span class=\"material-icons\"> clear </span>\n</div>\n<div class=\"title-area\">\n    <h1 class=\"title-h1\">\u4E5D\u4E5D\u4E58\u6CD5\u8868</h1>\n    <p class=\"title-text\">MULTIPLICATION CHART</p>\n</div>\n<div class=\"d-flex\">\n    <span class=\"material-icons\"> clear </span>\n    <hr class=\"m-0 w-100 hr-style\" />\n    <span class=\"material-icons\"> clear </span>\n</div>\n</div>"; // 放資料的容器

var str = ''; // 9x9迴圈

for (var i = 2; i < 10; i++) {
  //算式容器
  var text = '';

  for (var j = 1; j < 10; j++) {
    text += " <p class=\"box-text\">".concat(i, " x ").concat(j, " = ").concat(i * j, "</p>");
  }

  str += "<div class=\"box d-flex flex-column flex-wrap\">\n      <h2 class=\"box-title\">".concat(i, "</h2>\n      ").concat(text, "\n    </div>");
}

container.innerHTML = title + str;
//# sourceMappingURL=all.js.map
