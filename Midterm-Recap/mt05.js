function getBudgets(budget){
    let budgets = 0
    let i = 0
    do{
        budgets += budget[i].budget;
        i++;
    }while(i < budget.length)
    console.log(budgets);
}

getBudgets([
    { name: "John" , age: 21 , budget: 23000 } ,
    { name: "Steve" , age: 32 , budget: 40000 } ,
    { name: "Martin" , age: 16 , budget: 2700 }
]);


getBudgets([
    { name: "John" , age: 21 , budget: 29000 } ,
    { name: "steve" , age: 32 , budget: 32000 } ,
    { name: "Martin" , age: 16 , budget: 1600}
]);

