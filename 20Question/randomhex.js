let number;
do 
{

    number=(Math.random())*Math.pow(10,7);
    number=Math.floor(number);
}
while(number>100000000)
console.log("#"+number.toString(16));
