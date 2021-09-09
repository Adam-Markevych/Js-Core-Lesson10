const getS = selector => document.querySelector(selector);
//при кліку на кнопку edit
getS('.btn-edit').addEventListener('click',function(){
    getS('.block-settings').classList.add('block-show');
    getS('.block-style').classList.remove('block-show');
    getS('.edit-area').value = getS('.paragraph').innerHTML;
})
//
// При кліку на кнопку style
getS('.btn-style').addEventListener('click',function(){
    getS('.block-style').classList.add('block-show');
    getS('.block-settings').classList.remove('block-show');
})
//
//При кліку на кнопку save
getS('.btn-save').addEventListener('click',function(){
    getS('.block-settings').classList.remove('block-show');
    getS('.paragraph').innerHTML = getS('.edit-area').value;
})
//
//при кліку на кнопку add
getS('.btn-add').addEventListener('click',function(){
    getS('.container').style.display = 'none';
    getS('.container-add').classList.add('block-show');
    
    // getS('.container-add').style.display = 'block';
    // getS('.container').style.display = 'none';

})
//Задає розмір шрифта
getS('.block-size').addEventListener('click',function(){
   getS('.paragraph').style.fontSize = event.target.value;
})
//

// Задає назву шрифта
getS('.family').addEventListener('click',function(){
    getS('.paragraph').style.fontFamily = event.target.value;
})
//

/*Викликає блок кольорів для тексту*/
getS('.btn-color-of-text').addEventListener('click',function(){
    getS('.colors').style.display = "flex";
})
/**/
/*Викликає блок кольорів для фону*/
getS('.btn-back-color').addEventListener('click',function(){
    getS('.back-colors').style.display = "flex";
})
//
//Задає вибраний колір фону
getS('.back-colors').addEventListener('click',function(){
    if(event.target.className === 'color'){
        let backColor = getComputedStyle(event.target).background;
        getS('.block-content').style.background = backColor;
        getS('.back-colors').style.display = "none";
    }
})
//
//Задає бибраний колір тексту
getS('.colors').addEventListener('click',function(){
    if(event.target.className === 'color'){
        let colorText = getComputedStyle(event.target).backgroundColor;
        getS('.block-top').style.color = colorText;
        getS('.colors').style.display = "none";
    }
})
//
//Задає жирність тексту
getS('.check-cursive').addEventListener('click',function(){
    if(getS('.check-cursive').checked){
        getS('.paragraph').style.fontStyle = "italic";
    }
    else{
        getS('.paragraph').style.fontStyle = "normal";
    }
})
//
// Задає купсивність тексту
getS('.check-bold').addEventListener('click',function(){
    if(getS('.check-bold').checked){
        getS('.paragraph').style.fontWeight = "bold";
    }
    else{
        getS('.paragraph').style.fontWeight = "normal";
    }
})
//
//Доступ до блока для створення таблиці
getS('.table').addEventListener('click',function(){
    if(getS('.table').checked){
        getS('.create-table').classList.add('block-show');
        getS('.create-list').classList.remove('block-show');
    }
})
//
//Доступ до блока для створення списків
getS('.list').addEventListener('click',function(){
    if(getS('.list').checked){
        getS('.create-list').classList.add('block-show');
        getS('.create-table').classList.remove('block-show');
    }
})
// Створення таблицы
getS('.btn-create-table').addEventListener('click',function(){
    let n1 = document.forms.form.elements.n1.value;
    let n2 = document.forms.form.elements.n2.value;
    let n3 = document.forms.form.elements.n3.value;
    let n4 = document.forms.form.elements.n4.value;
    let n5 = document.forms.form.elements.n5.value;
    let n6 = document.forms.form.elements.n6.value;
    let n7 = document.forms.form.elements.n7.value;
    getS('.container').style.display = 'block';
    getS('.block-settings').classList.add('block-show');
    getS('.container-add').classList.remove('block-show');
    getS('.edit-area').value += `<table >`;
        for(let i = 0; i < n1; i++){
            getS('.edit-area').value += `<tr>`;
                for(j = 0; j < n2; j++){
                    getS('.edit-area').value += `<td style='border: ${n5}px ${n6} ${n7}; width:${n3}px; height:${n4}px;'>TD`;
                    getS('.edit-area').value += `</td>`;
                }
            getS('.edit-area').value += `</tr>`;
        }
    getS('.edit-area').value += `<table>`;
})
//
//Cтворення списку
getS('.btn-create-list').addEventListener('click',function(){
    let countLi = document.forms.form2.elements.li.value;
    let typeLi = document.forms.form2.elements.mark.value;
    getS('.container').style.display = 'block';
    getS('.block-settings').classList.add('block-show');
    getS('.container-add').classList.remove('block-show');
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for(let i=0; i<countLi; i++){
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
})
//







