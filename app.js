console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let count = 1; count <= 100; count++)
{
   if(count % 2 == 1)
   {
    console.log(count);
   }
}   


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let count = 1; count <= 100; count++)
{
   if(count % 3 == 0 && count % 5 == 0)
   {
    console.log("FIZZBUZZ");
   }
   else if(count % 3 == 0)
   {
    console.log("FIZZ");
   }
   else if(count % 5 == 0)
   {
    console.log("BUZZ");
   }
} 


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let count 1;

while(count <= 100)
{
    if(count % 2 == 1)
    {
     console.log(count);
    }
    count++;
}

while(count <= 100)
{
    if (count % 3 == 0 && count % 5 == 0)
    {
        console.log("FIZZBUZZ");
    }

    else if (count % 3 == 0)
    {
        console.log("FIZZ");
    }

    else if (count % 5 == 0)
    {
        console.log("BUZZ");
    }
    count++;
}

do
{
    if (count % 2 == 1)
    {
        console.log(count);
    }
    count++;
} while (count <= 100)


do
{
    if (count % 3 == 0 && count % 5 == 0)
    {
        console.log("FIZZBUZZ");
    }

    else if (count % 3 == 0)
    {
        console.log("FIZZ");
    }

    else if (count % 5 == 0)
    {
        console.log("BUZZ");
    }
   
    count++;
} while (count <= 100)


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (count = 0; count <= n; count ++)
{
    if (count == value)
    {
        console.log("Found value!");
        break;
    }

    else if (count == n)
    {
        console.log("Did not find value.")
        break;
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (start; start <= end; start++)
{
    if (start % buzzDivisor == 0 && start % fizzDivisor == 0)
    {
        console.log("FIZZBUZZ");
    }
    else if (start % fizzDivisor == 0)
    {
        console.log("FIZZ");
    }
    else if (start % buzzDivisor == 0)
    {
        console.log("BUZZ");
    }
} 
