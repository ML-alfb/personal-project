
const boll = document.querySelectorAll('.boll')

let width=13; 
let currentShooterPosition=149;

document.addEventListener('DOMContentLoaded',()=>{
   
    boll[currentShooterPosition].classList.add('salam')

    function moveShooter(e){
    boll[currentShooterPosition].classList.remove('salam')
    switch(e.keyCode){
        case 37:
            if(currentShooterPosition % width !== 0 ){currentShooterPosition -=1;
console.log(currentShooterPosition)}

            break
        case 39:
            if(currentShooterPosition % width < width-1 )currentShooterPosition +=1;
            break      
    
    }
    
    boll[currentShooterPosition].classList.add('salam')
   

    }
    document.addEventListener('keydown' , moveShooter)


    
    document.addEventListener('keyup' ,function shoot(e){
        let laseid
        let x=currentShooterPosition;
         
           
       
             switch(e.keyCode){
                 case 32:
                     laseid=setInterval(()=>{
                        if(x>13){boll[x].classList.remove('salame')
                        x -=width
                        boll[x].classList.add('salame')}
                        
                        
                        if(x < width){
                            clearInterval(laseid)
                            setTimeout(()=>{boll[x].classList.remove('salame')},500) 
                        }
                    
                     }, 200);
             }
         
     }
     )

})
  
