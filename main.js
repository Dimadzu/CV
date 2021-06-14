var Ball = function(ballType) {
   return class {
	  constructor(type) {
    this.type = value;
		  console.log(this.type)
  }
set type(value){
    if (value.length < 1) {
      this.type="regular";
      return;
    }
    this.type = value;
}
  };
	

};
ball1 = new Ball();
ball2 = new Ball("super");