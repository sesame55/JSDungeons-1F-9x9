// 放入迴圈的位置
let container = document.querySelector('.container');

let title = `<div class="firstBox">
<div class="d-flex">
    <span class="material-icons"> clear </span>
    <hr class="m-0 w-100 hr-style" />
    <span class="material-icons"> clear </span>
</div>
<div class="title-area">
    <h1 class="title-h1">九九乘法表</h1>
    <p class="title-text">MULTIPLICATION CHART</p>
</div>
<div class="d-flex">
    <span class="material-icons"> clear </span>
    <hr class="m-0 w-100 hr-style" />
    <span class="material-icons"> clear </span>
</div>
</div>`;

// 放資料的容器
let str = '';

// 9x9迴圈
for (let i = 2; i < 10; i++) {
    //算式容器
    let text = '';
    for (let j = 1; j < 10; j++) {
        text += ` <p class="box-text">${i} x ${j} = ${i * j}</p>`;
    }
    str += `<div class="box d-flex flex-column flex-wrap">
      <h2 class="box-title">${i}</h2>
      ${text}
    </div>`;
}

container.innerHTML = title + str;
