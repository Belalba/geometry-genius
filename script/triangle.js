function calculatarea (){
    const tringleBaseInput = document.getElementById('triangle-base');
    const triangleText = tringleBaseInput.value;
    const base = parseFloat(triangleText);
    //console.log(base);

    const triangleHightInput = document.getElementById('triangle.hight');
    const triangleHightText = triangleHightInput.value;
    const hight = parseFloat(triangleHightText);
    //console.log(hight);

    const area = 0.5 * base * hight;
    console.log(area);
       
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;


}