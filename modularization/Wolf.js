class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    howl() {
        console.log('owooooo!')
    }
}

// TODO 2
module.exports = Wolf;

// =============================================================================================================
// #2 Method
// module.exports = class Wolf {
//     constructor() {
//         this.strength = Math.floor(Math.random() * 100);
//     }

//     howl() {
//         console.log('owooooo!')
//     }
// }
