// while(true) {
//     setTimeout(() => {
//         console.log('hasdf')
//         let autoclickKeys = Object.keys(autoClickers)
//         for(let i = 0; i < autoclickKeys.length; i++) {
//             let index = autoclickKeys[i]
//             autoClickers[index]
//         }
//     }, 1000)
// }


setInterval(function() {
    handleAutoclickers()
}, 1000);


function handleAutoclickers() {
    let autoclickKeys = Object.keys(autoClickers)
    for (let i = 0; i < autoclickKeys.length; i++) {
        let index = autoclickKeys[i]
        if (autoClickers[index].curr_timeout <= 0) {
            for (let j = 1; j <= autoClickers[index].getAmount(); j++) {
                autoClickers[index].action()
            }
        }

        autoClickers[index].passTime()
    }
}