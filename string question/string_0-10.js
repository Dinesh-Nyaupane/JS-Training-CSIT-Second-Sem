let a = " this is a quick brown fox jumps over the lazy dog"

function ques1(para){
    return para.length
}

function ques2(para){
    let first = para.charAt(0);
    let last = para.charAt(a.length-1)
    msg = `first ${first} last ${last}`

    return msg
}

function ques3(para){
    let upper = para.toUpperCase();
    return upper
}

function ques4(para){
    let lower = para.toLowerCase();
    return lower
}

function ques5(para){
    let spacerm = para.trim()
    return spacerm
}

function ques6(para){
   let slice = para.slice(5)
   return slice
}


function ques7(para){
    let sub = para.substring(4)
    return sub
}

function ques8(para){
    let repeat = para.repeat(2)
    return repeat
}

function ques9(para){
    let replace = para.replace("dog","cat");
    return replace
}
 
function ques10(para){
    let concat = para.concat(" extra word")
    return concat
}



