(function(window) {

  'use strict';


  function slideshow(container, data){
    
    this.container = container;
    this.slides = data;
    this.currSlide = 0;
    
    this.innerEl = document.createElement('div');
    this.innerEl.className = 'slideshowInner';
    this.container.appendChild(this.innerEl);
    
    for(var i=0; i<data.length; i++){
      data[i].index = i;
      this.createSection( data[i] );
      // createSection.call(this, var1, var2, var3 );
      // var arguments2Pass = [ var1, var2, var3 ];
      // createSection.apply(this, arguments2Pass );
    }
      
  }
  
  function gotoSlide(id){
    var slideObj = this.getSlideById(id);
    if(!slideObj || this.currSlide == slideObj.index)return;
    
    this.currSlide = slideObj.index;
    
    var destY = (-slideObj.index*this.h);
    TweenLite.to(this.innerEl, 1, {top: destY, ease: Expo.easeInOut});
  }
  
  function getSlideById(id){
    for(var i=0; i<this.slides.length; i++){
      if(this.slides[i].id == id)return this.slides[i];  
    }
    return false;
  }
  
  function createSection( sectionObj ){
    var newDiv = document.createElement('div');
    newDiv.id = sectionObj.id;
    newDiv.className = 'slide';
    newDiv.style.background = sectionObj.bg
    newDiv.innerHTML = sectionObj.id;
    
    this.innerEl.appendChild(newDiv);
    
    sectionObj.el = newDiv;
  }
  
  function resize(w,h){
    this.h = h;
    
    var destY = (-this.currSlide*this.h);
    this.innerEl.style.top = destY+'px';
    
    for(var i=0; i<this.slides.length; i++){
      this.slides[i].el.style.top = (this.slides[i].index * h)+'px';
    }
  }
  
  slideshow.prototype.gotoSlide = gotoSlide;
  slideshow.prototype.getSlideById = getSlideById;
  slideshow.prototype.createSection = createSection;
  slideshow.prototype.resize = resize;
  
  window.slideshow = slideshow;
   
}(window));
