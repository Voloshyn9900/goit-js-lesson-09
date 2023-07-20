/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

let data = "тут еще ничего нет";

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
    }

    reject('Промис выполнился с ошибкой (отклонён, rejected)');
  }, 1000);
});

console.log(data);

promise.then(onFulfilled, onRejected);

console.log(data);

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);

  data = result;
  console.log(data);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);

  data = error;
  console.log(data);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случае'));




//////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно с результатом (исполнен, Fulfilled)');
//     }
//     reject('Промис выполнился с ошибкой (отклонен, Reject)');
//   }, 3000);
// });

// console.log(promise);

// promise.then(
//   result => {
//   console.log(result);
//   },
//   error => {
//   console.log(error);
// })



