import React, {Component} from "react"

class UpdateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.status,
      accounts: props.accounts
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.status !== nextProps.status) {
      return true;
    }
    if (this.props.accounts !== nextProps.accounts) {
      return true;
    }
    return false;
  }

  render() {
    return (<div>{this.props.children}</div>);
  }
}


export default UpdateComponent;
