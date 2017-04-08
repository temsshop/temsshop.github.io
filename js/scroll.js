function scroll () {
    if (window.scrollY > 0) {
        document.getElementById ("main-header").classList.add ("scrolled");
    } else {
        document.getElementById ("main-header").classList.remove ("scrolled");
    }
    
    window.requestAnimationFrame (scroll);
}

scroll ();
