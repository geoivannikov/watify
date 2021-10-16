import React, { Component } from 'react'

class TextFieldComponent extends Component {

  render() {
    return (
      <div className={this.props.classN}>
        <label htmlFor={this.props.htmlFor}>{this.props.printText}</label>
        <input
          className={"KEK"}
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          noValidate
        />
      </div>
    );
  }
}

export { TextFieldComponent };
