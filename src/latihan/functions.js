import readline from "readline"

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export const clearScreen = (log) => {
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)

    if (log) console.log(log)
    console.log("\n")
}

export const ambilJawaban = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}
