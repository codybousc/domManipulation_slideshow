(function(window) {

    'use strict';
    
    var testString = "this is classA's test string";
   
   function classA(){
        this.A = "test";
        this.testString = testString;
        // var boundChangeString = changeString.bind(this);
   }
   
   function doTask(callBackFn){
    // do a task
    if(callBackFn)callBackFn();
   }
   
   function announceYourself(){
    console.log(this.testString);
   }
   
   function changeString(str){
    testString = str;
   }
   
   classA.prototype.changeString = changeString;
   classA.prototype.doTask = doTask;
   classA.prototype.announceYourself = announceYourself;
   
   window.classA = classA;
   
}(window));
