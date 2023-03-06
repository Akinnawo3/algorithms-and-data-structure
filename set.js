function mySet() {
  //the var collection will hold the set
  var collection = [];

  //this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  //this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  //this method will add an element to the set

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element froma set
  this.remove=function(element){
    if(this.has(element)){
        index = collection.indexOf(element);
        collection.splice(index,1)
         
    }
  }
}
