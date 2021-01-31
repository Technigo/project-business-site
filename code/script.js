const serviceHeader1=document.getElementById("service-header-1");
const serviceContent1=document.getElementById("service-content-1");
const serviceHeader2=document.getElementById("service-header-2");
const serviceContent2=document.getElementById("service-content-2");
const serviceHeader3=document.getElementById("service-header-3");
const serviceContent3=document.getElementById("service-content-3");
const serviceHeader4=document.getElementById("service-header-4");
const serviceContent4=document.getElementById("service-content-4");
const btn = document.getElementById("submit-button");

serviceHeader1.addEventListener("click", () =>{
    serviceContent1.classList.toggle("service-selected");
    serviceContent2.classList.remove("service-selected");
    serviceContent3.classList.remove("service-selected");
    serviceContent4.classList.remove("service-selected");
});
serviceHeader2.addEventListener("click", () =>{
    serviceContent1.classList.remove("service-selected");
    serviceContent2.classList.toggle("service-selected");
    serviceContent3.classList.remove("service-selected");
    serviceContent4.classList.remove("service-selected");
});
serviceHeader3.addEventListener("click", () =>{
    serviceContent1.classList.remove("service-selected");
    serviceContent2.classList.remove("service-selected");
    serviceContent3.classList.toggle("service-selected");
    serviceContent4.classList.remove("service-selected");
});
serviceHeader4.addEventListener("click", () => {
    serviceContent1.classList.remove("service-selected");
    serviceContent2.classList.remove("service-selected");
    serviceContent3.classList.remove("service-selected");
    serviceContent4.classList.toggle("service-selected");
});

