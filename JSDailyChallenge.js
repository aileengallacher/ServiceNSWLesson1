const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    // **************************************************************
    // Ask the user to input their name then output and greet by name
    // **************************************************************
    let name = await askQuestion("What is your name? ");

    console.log(`Hello ${name}`)

}

Program().then(() => {
    process.exit(0);
});
