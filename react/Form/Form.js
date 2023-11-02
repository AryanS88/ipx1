import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', error: '' };
  }

  handleChange = (event) => {
    const name = event.target.value;
    this.setState({ value: name, error: '' });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.value.trim()) {
      this.setState({ error: 'Name is required' });
    } else {
      this.props.onSubmit(this.state.value);
      this.setState({ value: '', error: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        {this.state.error && <div className="error">{this.state.error}</div>}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
