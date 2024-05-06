export async function getShortURL(longURL) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('대충 짧아진 URL');
    }, 500);
  });
}
