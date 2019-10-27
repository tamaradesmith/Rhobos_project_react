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
      <main className="NodeIndex card">
        <div className="title-grid">

          <h1 className="home-header">Environment & Atmosphere Control Technology</h1>
          <div className="tag-line">

          </div>
        </div>
        <div className="home-background" />
      
        <h4 className="catagory-header">Nodes</h4>
          {nodes.map((node) => (
            <div key={node.id} >
              <Link to={`/nodes/${node.id}`} >
                <h3 className="header"> 
         {node.name} </h3>
              </Link>
              <p className="node-body">  {node.description} </p>
              </div>
     
          ))}
  
      </main>
    )
  }
}

export default NodeIndex