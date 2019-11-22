import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "./List";
import { TextInput } from "./TextInput";
import { addColor } from "../state/actions";
import { Button } from "./Button";

class ListContainer extends Component {
  state = {
    inputValue: ""
  };

  onClick = e => {
    this.props.addColor(this.state.inputValue);

    this.setState({
      inputValue: ""
    });
  };

  onChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  removeItem = color => {
    this.setState({
      colors: this.state.colors.filter(c => c !== color)
    });
  };

  render() {
    return (
      <div>
        <div>
          <TextInput value={this.state.inputValue} onChange={this.onChange} />
          <Button text="add" onClick={this.onClick} />
        </div>
        <List colors={this.props.colors} removeItem={this.removeItem} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.colors,
  users: state.users
});

const mapDispatchToProps = {
  addColor
};

const func = connect(
  mapStateToProps,
  mapDispatchToProps
);

const connected = func(ListContainer);

export { connected as ListContainer };
