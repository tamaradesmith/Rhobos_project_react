import React from "react";
import { Link } from "react-router-dom";
import { Device, Node } from "../js/requests"


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
      devices.map(device => {
        return device.name = device.name[0].toUpperCase() + device.name.slice(1)
      })
      this.setState({
        devices: [...devices],
        isLoading: false
      });
    });
  }
  render() {
    const { nodes, devices } = this.state;
    if (!nodes || !devices) {
      return "loading"
    }
    return (
      <main className="NodeIndex">
        <>
          {nodes.map((node) => (
            <div key={node.id} className="node-card">
              <Link to={`/nodes/${node.id}`} >
                <h3 className="header"> 
                Node:{node.name} </h3>
              </Link>
              <p className="node-body">  {node.description} </p>
              <div className="div-space" />
             

                <table className="device-table">
                  <tbody>

                    <tr>
                      <th>Device</th>
                      <th>Description</th>
                    </tr>

                    {devices.map(device => (
                      (device.node_id === parseFloat(node.id) ? (
                        <tr key={device.id} >


                          <td> {device.name} </td>
                          <td> {device.description} </td>

                        </tr>
                      ) : (null))
                    ))}

                  </tbody>
                </table>

              </div>
     
          ))}
        </>
      </main>
    )
  }
}

export default NodeIndex