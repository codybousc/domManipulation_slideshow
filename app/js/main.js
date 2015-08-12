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
    'slideshow',
    'TweenLite',
    'gsap/plugins/CSSPlugin.min',
    'gsap/easing/EasePack.min'
    ], function($) {
    
    function Main () {
        
        var sectionSettings = [
            {
                id: 'loader'
            },
            {
                id: 'home'
            },
            {
                id: 'grid'
            },
            {
                id: 'alphabet'
            }
        ];
        var wrapperEl = document.getElementById('wrapper');
        
        this.sections = new slideshow(wrapperEl, sectionSettings);
        
        window.onresize = resize.bind(this);
    }
    
    function resize(){
        var w = window.innerWidth,
            h = window.innerHeight;
        
        this.sections.resize(w, h);
    }

    // call init on document ready
    $(function () {
        window.app = new Main();
    });

});
