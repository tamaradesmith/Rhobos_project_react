const BASE_URL = 'http://localhost:4000';

const Device = {
  //  from one node
  async one(device_id) {
    const res = await fetch(`${BASE_URL}/device/${device_id}`, {});
    return res.json();
  },
  async all() {
    const res = await fetch(`${BASE_URL}/devices`, {
    });
    return res.json();
  },
  async getSensors(device_id) {
    const res = await fetch(`${BASE_URL}/devices/${device_id}/sensors`, {});
    return res.json();
  },
  async getControllers(device_id) {
    const res = await fetch(`${BASE_URL}/devices/${device_id}/controllers`, {});
    return res.json();
  },
  async getControllersState(device_id){
    const res = await fetch(`${BASE_URL}/devices/${device_id}/controllers/state`, {});
    return res.json();
  }
}

const Node = {
  async all() {
    const res = await fetch(`${BASE_URL}/nodes`, {});
    return res.json();
  },
}

const Sensor = {
  //one sensor reading
  async getSensorReadings(sensor_id) {
    const res = await fetch(`${BASE_URL}/sensor/${sensor_id}/readings`, {});
    return res.json();
  },
  // all sensor readings
  async getReadings(device_id) {
    const res = await fetch(`${BASE_URL}/device/${device_id}/sensors/readings`, {});
    return res.json();
  },
  // get last reading from sensor
  async getLastReading(sensor_id) {
    const res = await fetch(`${BASE_URL}/sensor/${sensor_id}/reading`, {});
    return res.json();
  },
  async getCurrentReading(sensor_id) {
    const res = await fetch(`${BASE_URL}/sensor/${sensor_id}/current`)
    return res.json();
  },

}

const Controller = {
  async toggleBoolean(controller_id) {
    const res = await fetch(`${BASE_URL}/controller/${controller_id}/boolean`, {});
    return res.text();
  },

}



export { Device, Sensor, Node, Controller };
