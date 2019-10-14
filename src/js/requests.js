const BASE_URL = 'http://localhost:4000';

const Device = {
  //  from one node
  one(device_id) {
    return fetch(`${BASE_URL}/device/${device_id}`, {
    }).then(res => {
      return res.json();
    })
  },
  all() {
    return fetch(`${BASE_URL}/devices`, {
      // : 'include'
    }).then(res => {
      return res.json();
    });
  },
  getSensors(device_id) {
    return fetch(`${BASE_URL}/devices/${device_id}/sensors`, {
    }).then(res => {
      return res.json();
    });
  },
  getControllers(device_id) {
    return fetch(`${BASE_URL}/devices/${device_id}/controllers`, {
    }).then(res => {
      return res.json();
    });
  },
}

const Node = {
  all() {
    return fetch(`${BASE_URL}/nodes`, {
    }).then(res => {
      return res.json();
    });
  },
}

const Sensor = {
  getReadings(sensors_id) {
    return fetch(`${BASE_URL}/sensor/${sensors_id}/readings`, {
    }).then(res => {
      return res.json();
    });
  },
}
export { Device, Sensor, Node };
