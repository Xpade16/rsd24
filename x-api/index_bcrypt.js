const bcrypt = require("bcrypt");

async function makeHash(password){
    const hash = await bcrypt.hash(password, 10);
    return hash
}

async function compareHash(password){
    const hash = await makeHash("Orange");
    const result = await bcrypt.compare(password, hash);
    if(result){
        console.log("Correct");
    }else{
        console.log("Incorrect");
    }

    process.exit(0);
}

compareHash("Orange");
