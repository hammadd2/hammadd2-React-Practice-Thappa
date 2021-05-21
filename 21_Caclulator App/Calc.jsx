    import react from 'react';
    function Add(num1,num2){
    let add = num1 + num2;
    return add;
    }
    
    function Sub(num1,num2){
    let sub=num1 - num2;
    return sub;
    }
     
    function Divi(num1,num2){
    let divi=num1 / num2;
    divi=divi.toFixed(2)
    return divi;
    }
    
    function Mul(num1,num2){
    let mul=num1 * num2;
    return mul;
    }
   

    // export default Add;  We can use this by uncommenting
    export {Add,Sub,Divi,Mul}