const { count } = require('console');
const express = require('express');
const app = express();

const PORT = 3002;
app.listen(PORT, ()=>{
    console.log(`Server is runnig at port: ${PORT}`);
});

function calculateSum(conunter){
    var sum = 0;
    for(var i = 0; i<=conunter; i++){
        sum = sum + i;

    }
    return sum;
}
function handleFirstRequest(req, res){
    var conunter = req.query.counter;
    var calculateSum = calculateSum(conunter);
    var answer = "The sum is "+ calculateSum;
    res.send(answer);
}

app.get('/handleSum', handleFirstRequest);
