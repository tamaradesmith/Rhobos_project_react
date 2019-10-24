import React from "react";
import { Link } from "react-router-dom";
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
      devices.map(device => {
        device.name = device.name[0].toUpperCase() + device.name.slice(1)
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
        <div className="node-card ">
          <h2 className="node-header"> Nodes </h2>

          {nodes.map((node) => (


            <div key={node.id} >
              <Link to={`/nodes/${node.id}`} className="link-font">
                <h3 className="header"> {node.name.toUpperCase()} </h3>
              </Link>
            </div>
          ))}

        </div>
        <>
          {nodes.map((node) => (


            <div key={node.id} className="node-card">
              <Link to={`/nodes/${node.id}`} className="link-font">
                <h3 className="header"> {node.name.toUpperCase()} </h3>
              </Link>
              <p className="node-body">  {node.description} </p>
              <div className="div-space" />
              <div>



                <table className="device-table table-width">
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
            </div>
          ))}
        </>
      </main>
    )
  }
}

export default NodeIndex