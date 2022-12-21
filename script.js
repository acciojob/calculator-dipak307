//your code here
let input=document.getElementById("input");
let expression= "";
function solve(e){
   // console.log(e)
   if(e =='ans'){
 let result=eval(expression);
 input.value=result;
   }
   else if(e == "clear"){
    expression="";
    input.value="";
   }
   else{
    expression+=e;
    input.value=expression;
   }
}
