// var candyMachine = {
//     status: {
//         name: 'node',
//         count: 5,
//     },
//     getCandy: function () {
//         this.status.count--;
//         return this.status.count;
//     }
// };
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;


const candyMachine = {
    status: {
        name:'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
const {getCandy, status: {count}} = candyMachine;

// var array = ['nodejs', {}, 10, true];
// var node = array[0];
// var obj = array[1];
// var bool = array[3];
// console.log(node);
// console.log(obj);
// console.log(bool);

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
console.log(node);
console.log(obj);
console.log(bool);
