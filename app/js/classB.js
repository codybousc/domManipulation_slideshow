(function(window) {

    'use strict';
    
    var testString = "classB's test string is the cooolest";
   
   function classB(){
        this.A = "test";
        this.testString = testString;
   }
   
   function announceYourself(){
    console.log(this.testString);
    console.log(testString);
   }
   
   classB.prototype.announceYourself = announceYourself;
   
   window.classB = classB;
   
}(window));
