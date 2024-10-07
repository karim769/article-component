const shareElement=document.querySelector(".fa-share");
const iconContainer=document.querySelector(".icon-container");
const sharingContainer=document.querySelector(".sharing-container");
const avatarContainer=document.querySelector(".avatar-container");


shareElement.addEventListener('click',() =>{

    if(window.innerWidth<"668"){

        iconContainer.classList.remove("desktop-version")

    if(iconContainer.style.visibility!=="hidden"){
        withoutShare();       

    }
    else{

        withShare();
    }

    }else {

        iconContainer.classList.add("desktop-version");
                
        if(iconContainer.style.visibility!=="hidden"){
            
            iconContainer.style.visibility='hidden';
            
        }
        else{
            iconContainer.style.visibility='visible';

        }


    }    


})


function withoutShare(){

    avatarContainer.style.visibility="visible";
    iconContainer.style.visibility='hidden';
    sharingContainer.style.backgroundColor="#fff";

}

function withShare(){

    avatarContainer.style.visibility="hidden";
    iconContainer.style.visibility='visible';
    sharingContainer.style.backgroundColor="hsl(217, 19%, 35%)";

}