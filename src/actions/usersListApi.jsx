import axios from 'axios';
import { FETCH_USERSLIST } from './constants';

export default function usersList(){

  console.log("entering into the funciton")
  return function (dispatch) {
        
    const url = 'https://run.mocky.io/v3/e6daf7f7-9ec2-42cf-b221-ef64f1c0c6a5';
    const request = axios.get(url);
    
    request.then(
      response => {
        dispatch({
          type : FETCH_USERSLIST,
          payload : response.data
        },console.log(response.data,"payload"))
      }).catch(err => console.log("err",err))

  }  
}