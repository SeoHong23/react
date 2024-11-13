import ChildComponent from "./ChildComponents";

const { Component } = require("react");

class ParentComponent extends Component {
    render() {
        return (
          <div className="ParentComponent">
            <h4>ParentComponent</h4>
            <p>부모 컴포넌트 입니다.</p>
            <ChildComponent/>
          </div>
        );
    }
}

export default ParentComponent;