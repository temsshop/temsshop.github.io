let tabs = document.getElementById ("tab-bar");
let pages = document.getElementsByClassName ("page");
let animateTimeout;

function paginate () {
    window.clearTimeout (animateTimeout);
    let prevPage = document.getElementsByClassName ("page selected")[0];
    let page = document.getElementById ("page-" + (parseInt (tabs.selected) + 1));
    for (let page of pages) {
        page.classList.remove ("selected");
        page.classList.remove ("hidden");
    }
    window.setTimeout (() => {
        if (page) {
            page.classList.add ("selected");
        }
        animateTimeout = window.setTimeout (() => {
            for (let page of pages) {
                if (!page.classList.contains ("selected")) {
                    page.classList.add ("hidden");
                }
            }
        }, 550);
        window.scroll (0, 0);
    }, 1);
}

tabs.addEventListener ("iron-select", paginate);
paginate ();
