export function makeSameSize(to1,from1){

const getbou=from1.getBoundingClientRect();
to1.style.width=`${getbou.width*1.07}px`;
to1.style.height=`${getbou.height*1.07}px`;


};


const ipadItems={

ipad:"",
timeline:"",
gradient:"",
gradient2:"",
anim:"",
animgra:"",
animgra2:""

};


export function basicSettings(){


    document.querySelector(".nav .but").style.width=`${document.querySelector(".nav .title").offsetWidth}px`;
    

    const appleComp=document.querySelector(".comp-image");
    appleComp.style.width=`${window.innerWidth/100*35}px`;
   
    const tl1=new ViewTimeline({
    subject:document.querySelector(".sticky-cont .view-1"),
    axis:"block"

    });

    const aniapple=appleComp.animate([{ },
        
        {

        transform:"scale(1.25)  "
    }],{
        fill:"both",
        timeline:tl1,
        rangeStart:"exit 0%",
        rangeEnd:"exit 100%"

    });

    ipadItems.anim=aniapple;
    ipadItems.ipad=appleComp;
    ipadItems.timeline=tl1;

}

export function setIpadGradient(){
    const ipadgra=document.querySelector(".ipad-gradient");
    ipadItems.gradient=ipadgra;

    const ipadgrablur=document.querySelector(".ipad-gradient-2");
    ipadItems.gradient2=ipadgrablur;
    
    makeSameSize(ipadgra,ipadItems.ipad);
    makeSameSize(ipadgrablur,ipadItems.ipad);

    ipadItems.animgra=ipadItems.gradient.animate([{  },{

        transform:"scale(1.25) " 
    }],{
        fill:"both",
        timeline:ipadItems.timeline,
        rangeStart:"exit 0%",
        rangeEnd:"exit 100%"

    });

    ipadItems.animgra2=ipadItems.gradient2.animate([{  },{

        transform:"scale(1.25) " 
    }],{
        fill:"both",
        timeline:ipadItems.timeline,
        rangeStart:"exit 0%",
        rangeEnd:"exit 100%"

    });
   

};



function setGradientPosition(){





}