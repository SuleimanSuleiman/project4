//toggle-settings
document.querySelector(".setting-box .toggle-settings ").addEventListener("click" , () =>{

    document.querySelector(".setting-box .toggle-settings .fas.fa-cog.fa-2x").classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
});

//end toggle-settings

let changeColor = localStorage.getItem("color-open");

if(changeColor !== null){

    document.documentElement.style.setProperty("--main-color" , localStorage.getItem("color-open"));

    document.querySelectorAll(".colors-list li").forEach(elemet =>{

        elemet.classList.remove("active");


        if(elemet.dataset.color === changeColor){

            elemet.classList.add("active");

        }

    });

}

let backgroundLocalItem = localStorage.getItem("background_option");

let backgroundOpen = true;

if(backgroundLocalItem !== null){

    if( backgroundLocalItem === "true")
    {
        backgroundOpen = true;
    }
    else
    {
        backgroundOpen = false;
    }
    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove("active");

    });

    if(backgroundLocalItem === 'true'){
        document.querySelector(".random-background .yes").classList.add("active");
    }
    else{
        document.querySelector(".random-background .no").classList.add("active");
    }

}



const listOfColor = document.querySelectorAll(".setting-box .setting-container .option-box .colors-list li");

listOfColor.forEach(li => {

    li.addEventListener("click" , (e) =>{

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        
        localStorage.setItem("color-open" , e.target.dataset.color);

    })

});

//change the background 



let backgroundInterval ;

function randomImage(){

    if(backgroundOpen === true){
        let page = document.querySelector(".landing-page");
    
        let pageArray = ["foto/3.jpg" , "foto/1.jpg" , "foto/2.jpg"];
    
        backgroundInterval = setInterval(() => {
    
        let randomNumber = Math.floor(Math.random()*pageArray.length);
    
        page.style.backgroundImage = `url("${pageArray[randomNumber]}")`;
    
    }, 4000);
    };
};

randomImage();

//end change the backgound image

function handleatvel(e){
    
    e.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");
    });

    e.target.classList.add("active");

}

//switch random background  
const randomBack = document.querySelectorAll(".setting-box .setting-container .option-box .random-background span");

randomBack.forEach(span =>{

    //ckick on every span
    span.addEventListener("click" , (e) =>{

        handleatvel(e);

        if(e.target.dataset.background === "yes"){

            backgroundOpen = true;
            
            randomImage();

            localStorage.setItem("background_option" , "true");

        }
        else{

            backgroundOpen = false;

            clearInterval(backgroundInterval);
            
            localStorage.setItem("background_option" , "false");

        }

    });
});

//select skills selector

let outskills = document.querySelector(".skilss");

window.onscroll = function(){

    let skillsOffSetTop = outskills.offsetTop;

    let skillsoutsetheight = outskills.offsetHeight;

    let windowheight = this.innerHeight;

    let windowscrolltop = this.pageYOffset;


    if(windowscrolltop > skillsOffSetTop + skillsoutsetheight - windowheight){

        let allskills = document.querySelectorAll(".skilss .container .skill .skilll span");

        allskills.forEach(skill => {
            
            skill.style.width = skill.dataset.progress;
        });
    }
};

//create popup with the image
let ourGallery = document.querySelectorAll(".our-gallery .container img");

ourGallery.forEach(img => {

    img.addEventListener("click" , (e)=>{
    
        //create overlay
        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        //create the popup
        let popbox = document.createElement("div");

        popbox.className = "popbox";

        if(img.alt !== null){

            //CREATE HEADING
            let imgHeading = document.createElement("h3");

            //create text of h3
            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popbox.appendChild(imgHeading);
        }
        
        //close span

        let closeButtom = document.createElement("span");

        let closeButtomText = document.createTextNode("X");

        closeButtom.appendChild(closeButtomText);

        closeButtom.className = 'close-byttom';

        popbox.appendChild(closeButtom);


        //create the img

        let popImage = document.createElement("img");

        popImage.src = img.src;

        popbox.appendChild(popImage);

        document.body.appendChild(popbox);

    });
});

//close popup
document.addEventListener("click" , (e) =>{
    if(e.target.className === 'close-byttom'){

        e.target.parentElement.remove();

        document.querySelector(".popup-overlay").remove();
    }
});

//select all bullents
const allBullents = document.querySelectorAll(".nav-bullents .bullents");
const allLinks  = document.querySelectorAll(".landing-page .header-area ul li");


function scrollToSome(elements){

    elements.forEach(element =>{

        element.addEventListener("click" , (e) =>{

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'

            });
        });
    });
};

scrollToSome(allBullents);
scrollToSome(allLinks);

let bullentsspan = document.querySelectorAll(".option-box .bullents-option span");
let bullentContainer = document.querySelector(".nav-bullents");
let localStoragebullent = localStorage.getItem("bullents-option");

if(localStoragebullent !== null){
    
    bullentsspan.forEach(span =>{

        span.classList.remove("active");

    });


    if(localStoragebullent === 'block'){

        bullentContainer.style.display = 'block';

        document.querySelector(".option-box .bullents-option .yes").classList.add("active");

    }
    else{

        bullentContainer.style.display = 'none';

        document.querySelector(".option-box .bullents-option .no").classList.add("active");
    }

}

bullentsspan.forEach(span => {

    span.addEventListener("click",(e)=>{

        if(span.dataset.display === 'show'){

            bullentContainer.style.display = 'block';
            
            localStorage.setItem("bullents-option" , "block");

        }else{

            bullentContainer.style.display = 'none';

            localStorage.setItem("bullents-option" , "hide");

        }
        handleatvel(e);
    });
});

document.querySelector(".setting-box .setting-container .reset-option").onclick = function(){

    localStorage.removeItem("bullents-option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("color-open");

    window.location.reload();
};

//open thw taggle
let spanAfter = document.querySelector(".landing-page .header-area .tollge span:nth-child(3)");
spanAfter.style.overflow = 'hidden';

document.querySelector(".landing-page .container .header-area .tollge").onclick = function(){

    let elementt =  document.querySelector(".landing-page .container .header-area .links");

    elementt.classList.toggle("open");

    if(spanAfter.style.overflow === 'hidden'){
        
        spanAfter.style.overflow = 'unset';

    }else{
        spanAfter.style.overflow = 'hidden';
    }

};