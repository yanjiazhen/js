function debounce(fn, wait) {
  let timer = null;
  return function () {
    let context = this;
    let arg = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}