function fibonacci(n){
    for(i = 2;i <= 10; i++){
        if(n == 0){
            return 0;
        }
        else if(n == 1){
            return 1;
        }
        else
        {
                return fibonacci(n-1) + fibonacci(n-2); 
        }
       
    }
}
var result = fibonacci(10);
console.log(result);