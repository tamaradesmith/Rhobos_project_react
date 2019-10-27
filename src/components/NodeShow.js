import React from "react";
import { Link } from "react-router-dom";
import { Node } from "../js/requests"


class NodeShow extends React.Component {

  state = {
    node: {},
    devices: [],
    isLoading: true
  };



  componentDidMount() {
    Node.one(this.props.match.params.id)
      .then(
        node => {
          this.setState({
            node: node,
            isLoading: false
          })
        }
      )
    Node.allDevicesOnNode(this.props.match.params.id)
      .then(devices => {
        devices.map(device => {
        return  device.name = device.name[0].toUpperCase() + device.name.slice(1)
        })
        this.setState({
          devices: [...devices],
          isLoading: false
        });
      });


  }
  render() {

    const { node, devices } = this.state;

    if (this.state.isLoading || !node.name) {
      return "loading"
    }
    return (
      <main className="NodeShow">
        <div key={node.id} className="node-card">
        <div className="catagory-header"> node </div>
          <h3 className="header">{node.name} </h3>
          <div className="div-space-small" />
          <Link to={`/node/${node.id}/dashboard`} className="link-button link-text">See Dashboard </Link>

          <table className="device-table table-width">
            <tbody>

              <tr>
                <th>Device</th>
                <th>Description</th>
              </tr>

              {devices.map(device => (
                (device.node_id === parseFloat(node.id) ? (
                  <tr key={device.id} >
                    <td>
                      <Link to={`/devices/${device.id}`}  >
                        {device.name}
                      </Link>
                    </td>
                    <td> {device.description} </td>

                  </tr>
                ) : (null))
              ))}

            </tbody>
          </table>
        </div>
      </main>
    )
  }
}

export default NodeShow