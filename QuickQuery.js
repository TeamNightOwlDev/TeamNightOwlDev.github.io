 function $(selector){
 const self = {}; //stores everything in a object
 //puts selector inside object
 self.selector = selector;
 
 //Pulls Item Element
 self.element = document.querySelector(self.selector);
 
 //can pull html code
 self.html = function(){
 return self.element;
 }
 
 self.text = function(value){
 if(!value) {return self.element.innerText;}
 self.element.innerText = value;
 return self;
 }
 
 //can modify attributes on an element
 self.attr = function(name,value){
 if(!value) {return self.element.getAttribute(name);}
 self.element.setAttribute(name,value);
 return self;
 }
 
 self.css = function(css){
 self.element.style.cssText = css;
 return self;
 }
 
 //Allows person to add and remove class from element
 self.class = function(type, value){
 switch (type){
   case "add":
   self.element.classList.add(value)
   break;
   case "remove":
   self.element.classList.remove(value);
   case "toggle":
   self.element.classList.toggle(value);
 }
 return self;
}
 //Allows the triggering of events like onclick
 self.on = function(type,callback){
 //creates the event->Example: on click or "on" + type -->type= "click"
 self.element["on" + type] = callback;
 return self;
 }
 //Returns Everything Stored In self Object
 return self;
}