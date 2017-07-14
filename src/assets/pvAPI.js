const api = {
  Get_pv: '/api/get_pv',
  Record_pv: '/api/record_pv'
}

const host = process.env.NODE_ENV === 'development' ? 'http://192.168.1.120:3000' : 'http://123.207.34.114:3000';

let pvAPI = {};

for (let [key, value] of Object.entries(api)) {
  pvAPI[key] = host + value;
}
export default pvAPI