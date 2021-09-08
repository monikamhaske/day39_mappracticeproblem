let diaNumber
let myMap = new Map(); 
let count1 = 0 , count2 = 0 , count3 = 0 ,count4 = 0 ,count5 = 0 ,count6 = 0;

for (let i= 0 ; ; i++){
    diaNumber = Math.floor(Math.random()*6)+1;
    if(diaNumber == 1){
        count1++
        myMap.set(diaNumber,count1)
        if(count1 == 11){
            break;
        }
    }
    else if(diaNumber == 2){
        count2++
        myMap.set(diaNumber,count2)

        if(count2 == 11){
            break;
        }
    }
    else if(diaNumber == 3){

        count3++
        myMap.set(diaNumber,count3)

        if(count3 == 11){
            break;
        }
    }
    else if(diaNumber == 4){
        count4++
        myMap.set(diaNumber,count4)

        if(count4 == 11){
            break;
        }
    }
    else if(diaNumber == 5){

        count5++
        myMap.set(diaNumber,count5)
        if(count5 == 11){
            break;
        }
    }
    else if(diaNumber == 6){
        count6++
        myMap.set(diaNumber,count6)

        if(count6 == 11){
            break;
        }
    }

}
console.log(myMap);

let maxValueKey ;
let minValueKey;
let minValue = 11;
for (let [key, value] of myMap.entries() ){
    if (value == 11){
        maxValueKey = key;
    }
    if(minValue > value){
        minValue = value;
        minValueKey = key;
    }
}
console.log("the number that has repeated max times = "+maxValueKey);
console.log("the number thet has repeated  mi times = "+minValueKey);

