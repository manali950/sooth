
//calling this function  by HTML on click menu in mobile mode while entering
function stopParentScroll() {
    const element = document.getElementById("page");
    const element2 = document.getElementById("hide");
    element.classList.add("stopParentScroll");
    element2.classList.add("hide");
 }

 //calling this function  by HTML on click menu in mobile mode while closing menu
 function startParentScroll() {
    const element = document.getElementById("page");
    const element2 = document.getElementById("hide");
    element.classList.remove("stopParentScroll");
    element2.classList.remove("hide");

 }

  