const condition = true;         // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

// promise
//     .then((message) => {
//         console.log(message);       // 성공(resolve)한 경우 실행
//     })
//     .catch((error) => {
//         console.error(error);       // 실패(reject)한 경우 실행
//     });


// 여러개의 then or catch를 붙일 수 있음
promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.log(error);
    });

// 콜백을 프로미스로 바꾼 경우
// function findAndSaveUser(Users) {
//     Users.findOne({}, (err, user) => {  // 첫 번째 콜백
//         if (err) {
//             return console.error(err);
//         }
//         user.name = 'zero';
//         user.save((err) => {   // 두 번째 콜백
//             if (err) {
//                 return console.error(err);
//             }
//             Users.findOne({gender:'m'}, (err, user) => {   // 세 번째 콜백
//                 // 생략
//             });
//         });
//     });
// }

// 깊이가 깊어지지 않도록 더 간단하게 바꾼 경우
// function findAndSaveUser(Users) {
//     Users.findOne({})
//         .then((user) => {
//             user.name = 'zero';
//             return user.save();
//         })
//         .then((user) => {
//             return Users.findOne({gender:'m'});
//         })
//         .then((user) => {
//             // 생략
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }

// 프로미스 여러 개를 한번에 실행한 방법
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);     // ['성공1', '성공2']
    })
    .catch((error) => {
        console.error(error)
    });
