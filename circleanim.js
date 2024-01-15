
let isScrolling=false;

const scrollOptions={

scroller:document.querySelector(".back-header"),
rangeStart:0,
rangeEnd:window.innerHeight,
getTop(){

    return this.scroller.getBoundingClientRect().top * -1;
},
getPercentage(){

    return this.getTop()/(this.rangeEnd-this.rangeStart);
},
Animation(start,change){

const easingValue=linearEase(this.getPercentage(),start,change,1);

return easingValue;

}

};

function scrollCircleAnim(){

    if (isScrolling == false ) {
        isScrolling=true;

        requestAnimationFrame(function() {
         

            const grasol=document.querySelector("#mymask1 .sol");
            const grasag=document.querySelector("#mymask1 .sag");

            let newsol=scrollOptions.Animation(0.5,-0.5);
            let newsag=scrollOptions.Animation(0.5,-0.5);

            
            if(newsol<0) newsol=0;
            if(newsag<0) newsag=0;

            grasol.setAttribute("width",`${newsol}`);
            grasag.setAttribute("width",`${newsag}`);
            grasag.setAttribute("transform",`translate(-${newsag},0)`);

            

          isScrolling = false;
        });

    }
}

function setCircleAnim(){

    
    window.addEventListener("scroll",scrollCircleAnim);
    
}


class ParallaxHeaderImage{

scroller;
imageDiv;

constructor(sc,image1){
    this.scroller=sc;
    this.imageDiv=image1;

    
}
createAnimation(lastTransform){

    const tl = new ViewTimeline({
        subject: this.scroller
      });

     
      
     const ani= this.imageDiv.animate([{ transform:"translateX(0)"},
      {transform:lastTransform}],{

    timeline:tl,
    rangeStart: 'exit-crossing 0%',
     rangeEnd: 'exit-crossing 50%',
        });

        
}

}


class createCircleImage{

htmlText;
containerDiv;
containerImages={
    name:"",
    div:""
}


constructor(html1,cont,contname){

    this.htmlText=html1;
    this.containerDiv=cont;
    this.containerImages.name=contname;

    const conimages=document.createElement("div");
    conimages.style.width="100vw";
    conimages.style.height="100vh";
    conimages.style.position="absolute";
    conimages.style.top="0",

    conimages.setAttribute("name",this.containerImages.name);
    this.containerImages.div=conimages;

}
createImages(numberImage){

    this.containerDiv.append(this.containerImages.div);
    for(let i=0;i<numberImage;i++)
        this.containerImages.div.insertAdjacentHTML("beforeend", this.htmlText);
    

    const arrimagehtml=[...this.containerImages.div.querySelectorAll("img")];
    

}


}




export{setCircleAnim,ParallaxHeaderImage, createCircleImage};