const api = {
    Get_pv: '/cao_api/get_pv',
    Record_pv: '/cao_api/record_pv',
    Get_os: '/cao_api/get_os'
}

const host = process.env.NODE_ENV === 'development' ? 'http://192.168.1.120:3000' : 'https://tofun.selfcoding.cn';

let pvAPI = {};

for (let [key, value] of Object.entries(api)) {
    pvAPI[key] = host + value;
}
export default pvAPI