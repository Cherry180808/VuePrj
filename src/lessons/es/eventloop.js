// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
// }

// console.log("script start");

// setTimeout(function() {
//   console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function(resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function() {
//   console.log("promise2");
// });

// console.log("script end");

function resoveAfter2seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("result");
    }, 2000);
  });
}

async function testCall() {
  console.log("start");
  const result = await resoveAfter2seconds();
  console.log(result);
  await 1;
  console.log("end");
}

testCall();
