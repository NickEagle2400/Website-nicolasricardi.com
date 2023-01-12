document.getElementById('serviceMenu').addEventListener('click',function(e){
    var megamenu = document.getElementById('megamenu')
    megamenu.classList.toggle('hidden')
    document.getElementById('serviceMenu').classList.toggle('text-main')
});

window.onload = function(){
    var megamenu = document.getElementById('megamenu')
    document.onclick = function(e){
        if(e.target.id !== 'megamenu' && e.target.id !== 'serviceMenu' && !megamenu.classList.contains("hidden")){
            megamenu.classList.toggle('hidden')
            document.getElementById('serviceMenu').classList.toggle('text-main')
        }
    };
};

document.getElementById('mobileMenu').addEventListener('click',function(e){
    document.getElementById('mobileModal').classList.toggle('-translate-x-full')
    document.getElementsByTagName('html')[0].classList.toggle('overflow-y-hidden')
});

document.getElementById('closeMobileModal').addEventListener('click',function(e){
    document.getElementById('mobileModal').classList.toggle('-translate-x-full')
    document.getElementsByTagName('html')[0].classList.toggle('overflow-y-hidden')
});
