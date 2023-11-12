function calculator(x : number, y : number, z :string){
    if(z == "add"){
      return x+y;
    }
    else if(z == "diff"){
      return x-y;
    }
    else if(z == "mul"){
      return x*y;
    }
    else if(z == "div"){
      return x/y;
    }
    else{
      return "mairu";
    }
  }
  
  console.log(calculator(2,3,"punda"));