// https://juejin.cn/post/7043758954496655397?utm_source=gold_browser_extension
/*
 *promise是一个类
 */
const PENDING = 'PENDING'
const RESLOVE = 'RESLOVE'
const REJECT = 'REJECT'

function reslovePromise(promise2, x, reslove, reject) {
  if (promise2 == x) {
    return reject(new TypeError('类型错误'))
  }
  let called = false
  if ((typeof x === 'object' && x !== null) || (typeof x == 'function')) {
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (called) return;
          called = true;
          reslovePromise(promise2, y, reslove, reject)
        }, (x) => {
          if (called) return;
          called = true;
          reject(x)
        })
      } else {
        if (called) return;
        called = true;
        reslove(x)
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error)
    }
  } else {
    if (called) return;
    called = true;
    reslove(x)
  }
}
class myPromise {
  constructor(executor) {
    this.onfullFilledCallbacks = []
    this.onRejectedCallbacks = []
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    const reslove = (value) => {
      console.log(value);
      if (this.status = PENDING) {
        this.status = RESLOVE;
        this.value = value;
        this.onfullFilledCallbacks.forEach((cb) => {
          {
            cb()
          }
        });
      }
    };
    const reject = (reason) => {
      console.log(reason);
      if (this.status = PENDING) {
        this.status = REJECT;
        this.reason = reason
        this.onRejectedCallbacks.forEach((cb) => {
          {
            cb()
          }
        });
      }
    };
    try {
      executor(reslove, reject);
    } catch {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = (v) => v;
    }
    if (typeof onRejected !== 'function') {
      onRejected = err => {
        throw err
      }
    }
    const promise2 = new myPromise((reslove, reject) => {
      if (this.status == RESLOVE) {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value);
            reslovePromise(promise2, x, reslove, reject)
          } catch (error) {
            reject(error)
          }

        })
      }
      if (this.status = REJECT) {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);
            reslovePromise(promise2, x, reslove, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.status == PENDING) {
        this.onfullFilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(this.value)
              reslovePromise(promise2, x, reslove, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onRejected(this.reason)
              reslovePromise(promise2, x, reslove, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })

    return promise2
  }
}
