/*
//동기식
function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {} //let은 같은이름으로 변수선언 안됨
    const end = Date.now();
    console.log(end - start + 'ms');
  }
 
  run();
  console.log('Done !!!');
  */

  /*
  //비동기식
  function run() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 1000);
  }
 
  run();
  console.log('Done !!!');
  */

  /*
  //비동기식이지만 콜백을 이용하여 동기식처럼 보이게
  function run(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 1000);
  }
 
  run(() => {
    console.log('Done !!!');
  });
  */

  function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();  //성공했을때 실행, 실패하면 reject
        }, 1000);
    });
}
 
async function process() {
    await run();
    await run();
    console.log('Done !!!');
}
 
process();