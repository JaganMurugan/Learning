function fibonnaci(n){
  const fib = [0,1];
  for(let i =2; i<n; i++)
    {
      fib[i] = fib[i-1] + fib[i-2];
    }
  return fib;
}

console.log(fibonnaci(3));

function factorial(n){
  let result = 1 ;
  for(let i=n;i>0;i--){
   result  = result * i;   
  }
  return result;
}

console.log(factorial(5))

function prime(n){
  let result = 1;
  for(let i = 1; i<n ; i++){
    for (let j = 1; j<n ; j++){
      if (n == i * j)
      return false;    
    }
  }
  return true;
}
console.log(prime(9))

//Efficient code


function isPrime(n){
  if (n < 2){
    return false;
  }
  for(i = 2; i<n ; i++){
    if (n%i == 0){
      return false
    }
  }
  return true;
}

console.log(isPrime(5))

//optimized code

function isPrimes(n){
  if (n < 2){
    return false;
  }
  for(i = 2; i<= Math.sqrt(n) ; i++){
    if (n%i == 0){
      return false
    }
  }
  return true;
}

console.log(isPrimes(9))

//My Solution
function isPowerOfTwo(n){
  for(let i = 0; i < n ; i++){
     if(Math.pow(2,i)==n){
      return true;
    }
  }
   
  return false;
}

console.log(isPowerOfTwo(8))

//Good Solution from vid
function isPowerofTwo(n){
  if(n < 1){
    return false;
  }
  while(n>1){
    if(n%2 !== 0){
      return false;
    }
    n = n/2;
  }
    return true;
  
}
console.log(isPowerofTwo(8))
//Big O for this = O(logn)

//ideal solution - can make Big O constant using below code

console.log(isPowerOfTwo(10));

console.log(isPowerOfTwo(14));

console.log(isPowerOfTwo(24));

