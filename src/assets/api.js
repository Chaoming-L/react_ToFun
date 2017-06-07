/**
 * Created by Damon on 2017/2/25.
 */
const api = {
  Get_Message_list: '/api/messagelist/',
  Post_Message: '/api/postmessage/',
  Login :'/api/userlogin',
  Logout: '/api/userlogout',
  Getss: '/api/getss',
  Addss: '/api/addss'
}

const host = 'http://www.tofun.online';

let apiURL = {};

for (let [key, value] of Object.entries(api)) {
  apiURL[key] = host + value;
}

export default apiURL;
