import tmpData from './tmpData.json';

export async function getAllCharCnt() {
  const mydata = Object.keys(tmpData).map(key => ({ key: key, cnt: tmpData[key].data.length }));
  return mydata;
}

export async function getSlangsByChar(char) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tmpData[char].data);
    }, 1000);
  });
}
