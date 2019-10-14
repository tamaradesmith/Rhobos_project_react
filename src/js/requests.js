const BASE_URL = 'http://localhost:4000';

const Device = {
  //  from one node
  all() {
    return fetch(`${BASE_URL}/devices`, {
      // : 'include'
    }).then(res => {
     return res.json();
    });
  },
  getSensors(device_id){
    return fetch(`${BASE_URL}/devices/${device_id}`, {
    }).then(res =>{
      return res.json();
    });
  },
}

const Node ={
  all(){
    return  fetch(`${BASE_URL}/nodes`, {

    }).then(res =>{
      return res.json()
    })
  }
}
export { Device, Node };
