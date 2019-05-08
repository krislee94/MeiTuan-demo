export default {
    primary: '#06C1AE',
    border: '#e0e0e0',
    paper: '#f3f3f3',
    gray: '#979797',
  }


// function deepCopy(obj){
//   let result = Array.isArray(obj) ? [] : {};
//   const has = Object.prototype.hasOwnProperty;
//   for(let key in obj){
//     if(has.call(obj,key)){
//       if(typeof obj[key] === 'obj'){
//         result[key] = deepCopy(obj[key])
//       }else{
//         result[key] = obj[key]
//       }
//     }
//   }

//   return result;
// }