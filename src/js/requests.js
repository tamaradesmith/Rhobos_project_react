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
}

const Node = {
  async one(node_id) {
    const res = await fetch(`${BASE_URL}/nodes/${node_id}`, {});
    return res.json();
  },
  async all() {
    const res = await fetch(`${BASE_URL}/nodes`, {});
    return res.json();
  },
  async allDevicesOnNode(nodeId) {
    const res = await fetch(`${BASE_URL}/nodes/${nodeId}/devices`)
    return res.json();
  },
  async allSensorsOnNode(nodeId) {
    const res = await fetch(`${BASE_URL}/nodes/${nodeId}/sensors`)
    return res.json();
  },
  async getAllControllersWithState(node_id) {
    const res = await fetch(`${BASE_URL}/nodes/${node_id}/controllers/state`, {});
    return res.json();
  },
  async getReadingsSenosrsOnNode(node_id) {
    const res = await fetch(`${BASE_URL}/nodes/${node_id}/sensors/readings`, {});
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
  // get last reading from one sensor
  async getLastReading(sensor_id) {
    const res = await fetch(`${BASE_URL}/sensor/${sensor_id}/reading`, {});
    return res.json();
  },
  // get last reading from All sensors
  async getLastReadingAllSensors(node_id) {
    const res = await fetch(`${BASE_URL}/nodes/${node_id}/sensors/reading`, {});
    return res.json();
  },
  async getCurrentReading(sensor_id) {
    const res = await fetch(`${BASE_URL}/sensor/${sensor_id}/current`, {});
    return res.json();
  },

}

const Controller = {
  async toggleBoolean(controller_id) {
    const res = await fetch(`${BASE_URL}/controller/${controller_id}/boolean`, {});
    return res.text();
  },
  async getLightShows(controller_id) {
    const res = await fetch(`${BASE_URL}/controllers/${controller_id}/shows`, {});
    return res.json();
  },
  changeDefaultShow(show_id) {
    const res = fetch(`${BASE_URL}/controller/lightshow/${show_id}/change`, {})
    return res.text;
  },

}



export { Device, Sensor, Node, Controller };
