let scores = [20,40,50,75]
let filterScores = scores.filter((score)=>{
    if (score>=50){
        return score;
    }
})
let newScores = filterScores.map((score)=>{
    return score + 10;
})
console.log(newScores)