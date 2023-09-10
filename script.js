



function setFlexWidth(totalSize,itemNumber,margin){


const margs=margin*(itemNumber-1);
const wind=window.innerWidth;
return ((totalSize-margs)/itemNumber) / wind *100;


}


const isFirstTime={
    item:true,
    getDuration(){
        if(this.item){
this.item=false;
            return 4000; //!!!! DELAY
        }else{
            return 10;
        }
    }
}

function setSizeForDesktop(){


    
    const flexItems=document.querySelectorAll(".first-sec > *");
    const widthPerc=setFlexWidth(window.innerWidth*1.3,6,15); //30 mrgin
    const logoHeight=document.querySelector(".logo").offsetHeight;
    
const promise1=new Promise((resolve,reject)=>{
/*
    flexItems.forEach(item=>{
        
        item.style.setProperty("--flex-item-margin","15px");
        item.style.setProperty("--flex-item-width",`${widthPerc}%`);
        item.style.setProperty("--flex-item-height",`${window.innerHeight*0.5}px`)

        
    });
    */
    
setTimeout(()=>resolve(),isFirstTime.getDuration());
});

  return promise1.then(()=>{

    scrollFlex.flexDiv.scrollLeft=0;

    scrollFlex.logoScrollMiddle=document.querySelector(".first-sec .logo").getBoundingClientRect().left - (window.innerWidth/2 - document.querySelector(".first-sec .logo").offsetWidth/2);
   });
    
       
    
}




const scrollFlex={

flexDiv:document.querySelector(".first-sec"),
logoScrollMiddle:undefined,
duration:3000,
easing:easeInOutSine,
scroll(){

   
    let currentScrollLeft=0;
    let timeStart=undefined;
    let cpthis=this;
    let lastPos=this.logoScrollMiddle;
    this.flexDiv.scrollLeft=0;

    const scrollLeftFunc=function(time){


        if(!timeStart){
            timeStart=performance.now();
        }

        let timeNow=performance.now()-timeStart;
       

        currentScrollLeft=cpthis.easing(timeNow,0,lastPos,cpthis.duration);
        cpthis.flexDiv.scrollLeft=currentScrollLeft;

        if(timeNow<=cpthis.duration){
           
            requestAnimationFrame(scrollLeftFunc);
        }

    };


    requestAnimationFrame(scrollLeftFunc);

    return new Promise((resolve,rject)=>{

    setTimeout(()=> { resolve();},cpthis.duration/10);//bu uration sonra transform up animation baslar
    });

},
scrollWithoutAnimate(){
    document.querySelector(".first-sec").scrollLeft=0;
   const getMiddle=function(){

   return  document.querySelector(".first-sec .logo").getBoundingClientRect().left - (window.innerWidth/2 - document.querySelector(".first-sec .logo").offsetWidth/2);
   };

  

    setTimeout(()=>{

       
        document.querySelector(".first-sec").scrollLeft = document.querySelector(".first-sec .logo").getBoundingClientRect().left - (window.innerWidth/2 - document.querySelector(".first-sec .logo").offsetWidth/2);
    },10);
 

}
    
};


let debounceScroll;
let debounceScrollTimer=function(callback,time,...args){
    window.clearTimeout(debounceScroll);
    if(window.innerWidth>=992){

        debounceScroll = window.setTimeout(callback, time);
    }

}





//creating up animation 


function createUp(element,easing1,duration,delay){


    const animup=element.animate([{transform:"translateY(0%)"},{transform:"translateY(-100%)"}],  
    {
        duration:Number(duration),
        delay:Number(delay),
        easing:easing1,
        iteration:1,
        fill:"forwards"
    }
    );

    animup.pause();

    animup.finished.then(()=>{

animup.commitStyles();
animup.cancel();

    })

    return animup;

}

function createInvisible(element,easing1,duration,delay){

    const animinv=element.animate([{clipPath:"inset(0 0 0% 0)"},{clipPath:"inset(0 0 100% 0)"}],  
    {
        duration:Number(duration),
        delay:Number(delay),
        easing:easing1,
        iteration:1,
        fill:"forwards"
    }
    );

    animinv.pause();
    animinv.finished.then(()=>{

       
        animinv.commitStyles();
        animinv.cancel();
    })

    return animinv;

}

let animFinishPromise=undefined; // ANIMATİON ORDER

const textAnimFirst={

textDivs:document.querySelectorAll(".text-anim-1 :is(.name,.surname)"),
createUpAnimation(){

    const animup=new Animation(new KeyframeEffect(this.textDivs[0],[{transform: "translateY(0%)"}],{ duration: 1000, fill: "forwards" ,easing:"ease-in", pseudoElement: '::after'}));
    const animup2=new Animation(new KeyframeEffect(this.textDivs[1],[{transform: "translateY(0%)"}],{ duration: 1000, fill: "forwards" ,easing:"ease-in", pseudoElement: '::after'}));
    return [animup,animup2];

},
playClip(){

    const container1=document.querySelector(".text-anim-1");
    const cli=container1.animate([{clipPath:"inset(0rem 0rem 0 0rem)"},{clipPath:"inset(0rem 0rem 100% 0rem)"}],{duration:500,fill:"forwards",easing:"ease-in"});

    return cli.finished.then(()=>{
        container1.remove();
        return Promise.resolve("clip bitti");
    });
},
playUp(){
const [animup,animup2]=this.createUpAnimation();
animup.play();
animup2.play();

const clipAnimate=this.playClip;
const allFinishPromise=animup.finished.then(()=>{

return clipAnimate();
});

return allFinishPromise;

}


};




//size > 992




const allImages2=document.querySelectorAll(".image img");
const logo=document.querySelector(".logo .logo-items");
const allImages=[...allImages2];
allImages.splice(3,0,logo);
const animationsUp=[];
const animationsInv=[];

allImages.forEach(function(item,ind,arr){

 animationsUp.push(createUp(item,"linear",400,ind*300));

 if(ind==arr.length-1){
     let time=ind*300;
    allImages.forEach(function(item,ind,arr){
        if(!item.classList.contains("logo-items")){

            animationsInv.push(createInvisible(item,"linear",600,time+500));
        }else{
            animationsInv.push(createInvisible(item,"linear",600,time+1500));
          
            animFinishPromise= animationsInv[animationsInv.length-1].finished.then(()=>{
       
                document.querySelector(".first-sec").remove();
                 return Promise.resolve("first sec is erased");
                });

                //emre gökmenler clip bitince
           animFinishPromise= animFinishPromise.then(()=>{
                //text reveal animation
                const lastClipPromise=textAnimFirst.playUp();
                return lastClipPromise;
            })
            animFinishPromise.then(()=>{console.log("ksksk")});//clip bitince

          
        }

    });
    }
});


  

if(window.innerWidth>=992){ //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
     // const promiseScrollMiddle=  setFlexSizePromise(); //resolve olunca scroll ortada olur;

        const setScrollSize=new Promise((resolve,reject)=>{

            setTimeout(function(){
                scrollFlex.flexDiv.scrollLeft=0;

                 scrollFlex.logoScrollMiddle=document.querySelector(".first-sec .logo").getBoundingClientRect().left - (window.innerWidth/2 - document.querySelector(".first-sec .logo").offsetWidth/2);
                 resolve();
            },10);

        });

      //animateup ve clippath eklenir
        setScrollSize.then(scrollFlex.scroll.bind(scrollFlex)).then(()=>{

        setTimeout(function(){

            animationsUp.forEach(a=>a.play());
            animationsInv.forEach(a=>a.play());
           
        },1000);
        
        });
}

window.addEventListener("resize",function(){ //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 
  
 
 


});