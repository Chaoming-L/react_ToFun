const api = {
<<<<<<< HEAD
    Get_pv: '/api/get_pv',
    Record_pv: '/api/record_pv'
}

const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://123.207.34.114:3000';
=======
  Get_pv: '/api/get_pv',
  Record_pv: '/api/record_pv',
  Get_os: '/api/get_os'
}

const host = process.env.NODE_ENV === 'development' ? 'http://192.168.1.120:3000' : 'http://123.207.34.114:3000';
>>>>>>> 96ebe9d3b045ba579a9ce7f0b8fb293f966f3089

let pvAPI = {};

for (let [key, value] of Object.entries(api)) {
    pvAPI[key] = host + value;
}
export default pvAPI