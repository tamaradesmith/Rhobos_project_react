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
      this.setState({
        devices: [...devices],
        isLoading: false
      });
    });


  }
  render() {
    const { nodes, devices } = this.state;
    return (
      <main className="NodeIndex">
          <div className="node-card ">
            <h2 className="node-header"> Nodes </h2>
          </div>
          <>
            {nodes.map((node) => (
        <Link to={`/nodes/${node.id}`}  className="link-font">
              <div key={node.id} className="node-card">
                <h3> {node.name.toUpperCase()} </h3>
                <p className="node-body">  {node.description} </p>
                <div>
                  <h4> Device: </h4>
                    <table className="device-table table-width">
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                      {devices.map(device => (

                        <tr key={device.id} >
                          {device.node_id === parseFloat(node.id) ? (
                            <>
                              <td> {device.name} </td>
                              <td> {device.description} </td>
                            </>
                          ) : (null)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
        </Link>
            ))}
          </>
      </main>
    )
  }
}

export default NodeIndex