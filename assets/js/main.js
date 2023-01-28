//change nav color on scroll
let navbar=document.getElementById('navbar');
window.addEventListener('scroll', function(){
    if(screen.width>=991){
        if(window.scrollY>50){
            navbar.classList.add('new-bg-color');
            navbar.style.transition='.3s';
        }else{
            navbar.classList.remove('new-bg-color');
            navbar.style.transition='.3s';
        }
    }
    else{
        navbar.classList.add('new-bg-color');
    }
})

//smooth scroll
let logoLink=document.querySelector('.navbar-brand');
logoLink.addEventListener('click',function(e){
    e.preventDefault();
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
})

let links = document.querySelectorAll('nav .navbar-nav a');
links.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        let currentId = e.target.attributes.href.value;
        let sectionPos= document.querySelector(currentId).offsetTop;
        window.scroll({
            top: sectionPos,
            behavior: 'smooth'
        });
    })
})
let homeBtn=document.querySelector('#homeBtn a');
let servicesBtn=document.querySelector('#servicesBtn a');
let portfolioBtn=document.querySelector('#portfolioBtn a');
let resumeBtn=document.querySelector('#resumeBtn a');
let contactBtn=document.querySelector('#contactBtn a');

let homePos=(document.getElementById('header').offsetTop)-200;
let servicesPos=(document.getElementById('services').offsetTop)-200;
let portfolioPos=(document.getElementById('portfolio').offsetTop)-200;
let resumePos=(document.getElementById('resume').offsetTop)+212;
let contactPos=(document.getElementById('contact').offsetTop);

window.addEventListener('scroll',function(){
    if(window.scrollY<servicesPos){
        homeBtn.classList.add('active');
        servicesBtn.classList.remove('active');
        portfolioBtn.classList.remove('active');
        resumeBtn.classList.remove('active');
        contactBtn.classList.remove('active');
    }
    else if(window.scrollY>servicesPos && window.scrollY<portfolioPos ){
        homeBtn.classList.remove('active');
        servicesBtn.classList.add('active');
        portfolioBtn.classList.remove('active');
        resumeBtn.classList.remove('active');
        contactBtn.classList.remove('active');
    }
    else if(window.scrollY>portfolioPos && window.scrollY<resumePos){
        homeBtn.classList.remove('active');
        servicesBtn.classList.remove('active');
        portfolioBtn.classList.add('active');
        resumeBtn.classList.remove('active');
        contactBtn.classList.remove('active');
    }
    else if(window.scrollY>resumePos && window.scrollY<contactPos){
        homeBtn.classList.remove('active');
        servicesBtn.classList.remove('active');
        portfolioBtn.classList.remove('active');
        resumeBtn.classList.add('active');
        contactBtn.classList.remove('active');
    }else if(window.scrollY>contactPos){
        homeBtn.classList.remove('active');    
        servicesBtn.classList.remove('active');
        portfolioBtn.classList.remove('active');
        resumeBtn.classList.remove('active');
        contactBtn.classList.add('active');
    }
})

//scroll to top
let toTopBtn=document.querySelector('.to-top button');
toTopBtn.addEventListener('click', function(e){
    window.scroll({
        top:0,
        behavior:'smooth'
    })
})
let toTop=document.getElementById('to-top');
toTop.style.opacity='0';
let aboutPos=document.getElementById('about').offsetTop;
window.addEventListener('scroll', function(){
    if(window.scrollY>=(aboutPos-200)){
        toTop.style.opacity='1';
        toTop.style.transition='.3s';
    }else{
        toTop.style.opacity='0';
        toTop.style.transition='.3s';
    }
})

//loading screen
let body=document.body;
body.style.overflow='hidden';

document.querySelector('.loading').style.opacity='1';
document.querySelector('.loading').style.visibility='visible';
document.querySelector('.loading').style.transition='1s';

window.addEventListener('load', function(){
    setTimeout(function(){
        document.querySelector('.loading').style.opacity='0';
        document.querySelector('.loading').style.visibility='hidden';
        document.querySelector('.loading').style.transition='1s';        
        body.style.overflow='auto';        
    },2000);
})