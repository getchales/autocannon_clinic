1.
function isWeekend() { 
    const todayDate = new Date(); 
    const day = todayDate.getDay(); 
    let weekday=('Sunday','Monday','Tuseday','Wensday','Thersday','Freeday','Saturday');
    return weekday[day];
         }
         isWeekend()

2. 

const item = { 
	"name": "Avocado", 
	"type": "Fruit", 
	"category": "Food", 
	"price": 200 
} 
function applyCoupon(item){
let result;

return function(x){
let value;
value=(item.price*x)/100;
result= item.price-value;
return result;

}
}
console.log(applyCoupon(item)(10));




3.


function isDual(arr){
    if(arr.length===0){
    return 1
    }
    if(arr.length%2!==0){
    return 0;
    }
    else{
    let arr1= [];
    
       for(i=0; i<arr.length; i++){
       arr1.push(arr[i]+arr[i+1]);
    i++;
    
       }
       for(i=0; i<arr1.length; i++){
    if(arr1[0]===arr1[i]){
      
    return 1;
    }
       else{
    return 0;
       }
    }
    }
    }
    isDual([1,2,3,0])