import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex: 'male'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} role="form">
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />
        <p>Sex:</p>
        <div>
          <label>
            <input
              type="radio"
              name="sex"
              id="male"
              value="male"
              checked={this.state.sex === 'male'}
              onChange={this.handleInputChange}
            />
              Male
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sex"
              id="female"
              value="female"
              checked={this.state.sex === 'female'}
              onChange={this.handleInputChange}
            />
              Female
          </label>
        </div>
        <button type="submit" className="btn btn-default btn-sm">Submit</button>
      </form>
    );
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const { name, sex } = this.state;
    if (name === '') {
      return
    }
    this.props.addFriend(name, sex);
    this.setState({ name: '' });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
