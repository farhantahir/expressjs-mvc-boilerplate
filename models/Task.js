function Task(){
  this.id = 24;
  this.task = "Text goes here";
};

Task.prototype.save=function(data,callback){
  console.log("DB Created");
  callback();
};

Task.prototype.get = function(id,callback){
    callback(null, {id:id, text: this.task})
};


module.exports = Task;