const button = document.getElementById('button');
const navbar = document.getElementById('navbar');

button.addEventListener('click',function(){
    const mobileNavigation = document.getElementById('mobileNavigation');
    if(mobileNavigation.classList.contains('hidden')){
        mobileNavigation.classList.remove('hidden');
        mobileNavigation.classList.add('flex','flex-col','gap-y-4','animate-slideleft');
        setTimeout(() => {
            mobileNavigation.classList.remove('animate-slideleft')
        }, 500);
    }else{
        mobileNavigation.classList.add('animate-slideright');
        setTimeout(() => {
            mobileNavigation.classList.remove('animate-slideright');
            mobileNavigation.classList.add('hidden');
        },500);
    }
})


let lastScroll = 0;

function jalan(){
    let currentScroll = window.scrollY;
    
        if(currentScroll > lastScroll){
            navbar.classList.add(`hidden`);

        }else if(currentScroll+3 < lastScroll){
            navbar.classList.remove('hidden');
        }
 
    lastScroll = currentScroll;
}


