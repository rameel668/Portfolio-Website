let isActive = false;

let project1 = document.getElementById("project1");
let moreInfo = document.getElementById("projectInfo");

function addProject1(){
    if (isActive === true){
        moreInfo.style.display = 'none';
        isActive = false;
    } else {
        moreInfo.style.display = 'block';
        isActive = true;
    }
}

project1.addEventListener('click', addProject1);
