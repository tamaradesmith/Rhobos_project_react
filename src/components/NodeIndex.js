import React from "react";
import { Link } from "react-router-dom";
import DeviceDetail from "./DeviceDetail";
import DeviceShow from "./DeviceShow";
import { Device, Node } from "../js/requests"
import '../styles/node.css'


class NodeIndex extends React.Component {

  state = {
    nodes: [],
    devices: [],
    isLoading: true
  };



  componentDidMount() {
    Node.all().then(
      nodes => {
        this.setState({
          nodes: [...nodes],
          isLoading: false
        })
      }
    )
    Device.all().then(devices => {
      this.setState({
        devices: [...devices],
        isLoading: false
      });
    });


  }
  render() {

    return (
      <main>
        <>
          {this.state.nodes.map((node, indexNode) => (
            <div key={indexNode} className="NodeIndex node-card">
              <h2 className="node-header">
                Node: {node.name}
              </h2>
              <div>

                {this.state.devices.map((device, index) => (
                  <div key={index}>
                    <Link to={`/devices/${device.id}`}  >
                    <p>
                    {device.name}
                    </p> 
                  </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      </main>
    )
  }
}

export default NodeIndex