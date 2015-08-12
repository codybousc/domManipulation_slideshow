requirejs.config({
    paths : {   
        root: '../',
        jquery: '../bower_components/jquery/dist/jquery',
        gsap: '../bower_components/greensock/src/minified/',
        TweenLite: '../bower_components/greensock/src/minified/TweenLite.min'
    }
});

require([
    'jquery',
    'settings',
    'slideshow',
    'TweenLite',
    'gsap/plugins/CSSPlugin.min',
    'gsap/easing/EasePack.min'
    ], function($) {
    
    function Main () {
        
        var wrapperEl = document.getElementById('wrapper');
        
        this.sections = new slideshow(wrapperEl, siteSettings.sections);
        this.alphabet = new slideshow(this.sections.getSlideById('alphabet').el, siteSettings.alphabet);
        
        window.onresize = resize.bind(this);
        resize.call(this);
    }
    
    function resize(){
        var w = window.innerWidth,
            h = window.innerHeight;
        
        this.sections.resize(w, h);
        this.alphabet.resize(w, h);
    }

    // call init on document ready
    $(function () {
        window.app = new Main();
    });

});
