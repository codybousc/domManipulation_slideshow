(function(window) {

  'use strict';


  function slideshow(container, data){
    
    this.container = container;
    this.slides = [];
    
    for(var i=0; i<data.length; i++){
      data[i].index = i;
      this.createSection( data[i] );
      // createSection.call(this, var1, var2, var3 );
      // var arguments2Pass = [ var1, var2, var3 ];
      // createSection.apply(this, arguments2Pass );
    }
      
  }
  
  function createSection( sectionObj ){
    var newDiv = document.createElement('div');
    newDiv.id = sectionObj.id;
    newDiv.className = 'slide';
    
    this.container.appendChild(newDiv);
    
    sectionObj.el = newDiv;
    this.slides.push(sectionObj);
  }
  
  function resize(w,h){
    
    for(var i=0; i<this.slides.length; i++){
      this.slides[i].el.style.top = (this.slides[i].index * h)+'px';
    }
  }
  
  slideshow.prototype.createSection = createSection;
  slideshow.prototype.resize = resize;
  
  window.slideshow = slideshow;
   
}(window));
