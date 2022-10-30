 const Move = (name) => {
     return (
         window.addEventListener('mousemove', (e) => {
             const triangle = document.getElementById(`${name}`);
             // triangle.style.top = `${e.clientY/30}px`;
             // triangle.style.bottom = `${e.clientY/30}px`;
             triangle.style.left = `${e.clientX/20}px`;
             triangle.style.right = `${e.clientX/20}px`;
         })
     );

 }



 export { Move }

 // let documentTop = document.getElementById('main-home-component2');
 // document.addEventListener('scroll',()=>{
 //   const top = document.getElementById('top');
 //     if(document.pageYOffset >= 200){
 //        top.classList.add('active');
 //    }else{
 //        top.classList.remove('active');
 //    }
 // })





 //   document.addEventListener('mouseover',(e)=>{
 //     const fall = document.getElementById('box5');
 //    fall.style.transform=`translateY(${e.clientY/1}px)`;
 //    fall.style.transform +=`translateX(${e.clientX/1}px)`;
 //   },false)