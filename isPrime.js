process.on("message", message =>{
    const jsonResponse = isPrime(message.number);
    process.send(jsonResponse);
    process.exit();
});

const isPrime = num => {
    const stratTime = new Date();
    let endTime = new Date();
    let isprime= true;
    for(let i = 2; i<num; i++){
        if(num % i === 0){
            isprime = false;
            break;
        }; 
    }
    endTime = new Date();
    return {
        "number":num,
        "prime": isprime,
        "time": endTime.getTime - stratTime.getTime
    }
   
}