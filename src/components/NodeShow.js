import React from "react";
import { Link } from "react-router-dom";
import { Device, Node } from "../js/requests"
import '../styles/node.css'


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
      this.setState({
        devices: [...devices],
        isLoading: false
      });
    });


  }
  render() {

    const { node, devices } = this.state;
    if (this.state.isLoading){
      return "loading"      
    }
    return (
      <main>
        <>
         
            <div key={node.id} className="NodeIndex node-card">
              <h3 className="node-header">
                {node.name.toUpperCase()}

              </h3>
            <Link to={`/node/${node.id}/dashboard`} > Dashboard</Link>

              <div>
                {devices.map(device => (
                  <div key={device.id} className="grid-device">
                    {device.node_id === parseFloat(node.id)  ? (
                      <>
                        <Link to={`/devices/${device.id}`}  >
                          <p>
                            {device.name}
                          </p>
                        </Link>
                        <p> {device.description} </p>
                      </>
                    ) : (null)}
                  </div>
                ))}
              </div>
            </div>
    
        </>
      </main>
    )
  }
}

export default NodeShow