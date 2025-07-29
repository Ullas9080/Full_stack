const prompt = require("prompt-sync")();
// process.stdout.write("hello")
// process.stdout.write("world")
// let args=prompt("Enter a number ");
// process.stdout.write(args)

// pattern printing
let n = Number(prompt("Enter the Number"))

// for(let i=0;i<n;i++){
//    for(let j=0;j<n;j++){
//        process.stdout.write("* "
//    }console.log()
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j+" ")
//     }
//     console.log()
// }

// for (let i = 1; i <= n; i++) {
//     let ascii = 65
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(ascii) + " ")
//         ++ascii
//     }
//     console.log()
// }

// for (let i = 1 ; i <= n ; i++) {
//     for (let j = i ; j <= n ; j++) {
//         process.stdout.write("  ");
//
//     }
//     for (let j = 1 ; j <= i ; j++) {
//         process.stdout.write("* ")
//     }
// process.stdout.write("\n")
// }

// for(let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

for (let i = 1 ; i <= n ; i++) {
    for (let k = 1 ; k <= 2*n; k++) {
        if (k === i || k+i ===2*n) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
        }
        console.log()

}
















