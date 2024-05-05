export async function getShortURL(longURL) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(longURL + 'test');
    }, 500);
  });
}
