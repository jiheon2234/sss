import data from './tmpData.json';

export async function getCntWithGroup() {
  const mydata = {};
  Object.keys(data).forEach(key => {
    mydata[key] = data[key].data.length;
  });
  return mydata;
}
