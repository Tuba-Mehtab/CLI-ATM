import inquirer from "inquirer";

let mybalance = 10000; //Dollars
let mypin = 13579;
let pinanswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]
);

if(pinanswer.pin === mypin) {
    console.log("correct pin code!");

    let operationanswer = await inquirer.prompt (
        [
            { name: "operation",
              message: "Please select option",
              type: "list",
              choices: ["withdraw" , "check balance"]
    }]);
    if (operationanswer.operation === "withdraw") {
        let amountanswer = await inquirer.prompt (
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",
                }
            ]
        );
        // = += -+
        mybalance -= amountanswer.amount;
        console.log("your remaining balance is " + mybalance)

    } else if (operationanswer.operation === "check balance") {
        console.log(`your remaining balance is ${mybalance}`)

    }
}
else
 {console.log ("Incorrect pin code!")

}