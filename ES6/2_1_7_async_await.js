// async function findAndSaveUser(Users) {
//     let user = await Users.findOne({});
//     user.name = 'zero';
//     user = await user.save();
//     user = await Users.findOne({gender:'m'});
// }

// 에러를 처리하는 부분 추가
// async function findAndSaveUser(Users) {
//     try {
//         let user = await Users.findOne({});
//         user.name = 'zero';
//         user = await user.save();
//         user = await Users.findOne({gender:'m'});
//     } catch (error) {
//         console.error(error);
//     }
// }

// 화살표 함수 활욜 (async와 같이)
// const findAndSaveUser = async (Users) => {
//     try {
//         let user = await Users.findOne({});
//         user.name = 'zero';
//         user = await user.save();
//         user = await Users.findOne({gender:'m'});
//     } catch (error) {
//         console.log(error);
//     }
// };

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();
