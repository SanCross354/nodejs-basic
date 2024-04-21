// #1 Method
class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        console.log('grrrrr!')
    }
}

// TODO 1
module.exports = Tiger;

// =============================================================================================================
// #2 Method
// module.exports = class Tiger {
//     constructor() {
//         this.strength = Math.floor(Math.random() * 100);
//     }

//     growl() {
//         console.log('grrrrr!')
//     }
// }
