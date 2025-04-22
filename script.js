function dark() {
    let item = document.querySelector('.header');
    
    item.style.backgroundColor = 'black';
    let header = document.querySelector('.text h1');
    header.style.color = 'white';
    let head = document.querySelector(".text p");
    head.style.color = "white";
    let nav = document.querySelector('nav ul ');
    nav.style.color = 'white';
    let img = document.querySelector('.img-2');
    img.style.display = 'initial';
    let img1 = document.querySelector('.img-1');
    img1.style.display = 'none'
    let btn1 = document.querySelector('.light');
    btn1.style.backgroundColor = " #C4B5A5";
    btn1.style.color = 'white';
     let btn2 = document.querySelector(".dark");
     btn2.style.backgroundColor = " #FB982F";
    btn2.style.color = "white";
    let btn3 = document.querySelector('.text-btn');
    btn3.style.color = 'white';
    
    
 }

 function light() {
     let item = document.querySelector('.header')
     item.style.backgroundColor = "#C4B5A5";
     let header = document.querySelector(".text h1");
     header.style.color = "black";
     let head = document.querySelector(".text p");
     head.style.color = "black";
     let img = document.querySelector(".img-2");
     img.style.display = "none";
     let img1 = document.querySelector(".img-1");
     img1.style.display = "initial";
    let nav = document.querySelector("nav ul ");
    nav.style.color = "black";
    let btn1 = document.querySelector('.light');
    btn1.style.backgroundColor = " #FB982F";
     btn1.style.color = 'black';
      let btn2 = document.querySelector(".dark");
      btn2.style.backgroundColor = " black";
     btn2.style.color = "black";
     let btn3 = document.querySelector(".text-btn");
     btn3.style.color = "black";
    
    
 }