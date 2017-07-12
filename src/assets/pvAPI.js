const api = {
   Get_pv: '/api/get_pv'
}

const host =process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

let pvAPI = {};

for (let [key, value] of Object.entries(api)) {
  pvAPI[key] = host + value;
}
export default pvAPI