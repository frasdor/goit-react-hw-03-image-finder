import React, { Component } from 'react';

class Searchbar extends Component {
     state = {
        query: '',
     };

handleChange = (e) => { this.setState({ query: e.target.value });
};

handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
        <header class="searchbar">
            <form class="form">
                <button type="submit" class="button">
                <span class="button-label">Search</span>
                </button>

                <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={this.state.query}
                onChange={this.handleChange}
                />
            </form>
        </header>
    );
  }
}
export default Searchbar;