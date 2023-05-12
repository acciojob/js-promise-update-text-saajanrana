//your JS code here. If required.
function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
		document.getElementById('output').innerHTML=resolve;
    }, 1000);
  });
}