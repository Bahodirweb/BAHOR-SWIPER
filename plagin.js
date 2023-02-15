const $=function(sellector){
    return document.querySelector(sellector)
}
const $a=function(sellector){
    return document.querySelectorAll(sellector)
}

const createElement = function(tegName,className,content){
    const newElement = document.createElement(tegName);
    newElement.setAttribute("class",className);
    newElement.innerHTML = content;
    return newElement;
}
