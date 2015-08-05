requirejs.config({
    paths : {   
        root: '../',
        jquery: '../bower_components/jquery/dist/jquery',
    }
});

require([
    'jquery',
    'classA',
    'classB'
    ], function($) {
    
    function Main () {
        this.cA1 = new classA();
        this.cA2 = new classA();
        this.cB = new classB();
        
        this.testString = 'main class';
        // this.announceYourself = announceYourself.bind(this.cB);
        
        this.cA1.doTask( isDone.bind(this) );
        
    }
    
    function isDone(){
        console.log(this);
        console.log(this.testString);
        
    }
    
    
   function announceYourself(){
    console.log(this.testString);
   }

    // call init on document ready
    $(function () {
        window.app = new Main();
    });

});
