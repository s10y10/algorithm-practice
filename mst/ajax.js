function request(options) {
  return new Promise((resolve, reject) => {
    const { data = {}, method = "post", url = "" } = options;
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          resolve(xhr.responseText);
        }
      } else {
        reject(xhr.err);
      }
    };
    xhr.onerror = (err) => reject && reject(err);
    xhr.send(data);
  });
}
