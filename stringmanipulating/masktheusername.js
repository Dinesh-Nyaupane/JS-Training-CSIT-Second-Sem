let email_value="sandesharyal@gmail.com";
let position_of=email_value.indexOf("@");
let split_to_first=email_value.slice(0, position_of);
let split_to_second=email_value.slice(position_of);
let loot_to=split_to_first.length;
let replace=split_to_first;
for(let i=1;i<loot_to;i++){
 replace=replace.replaceAll(replace[i],"*");
}
console.log(replace+split_to_second);

