import React from 'react'

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  onInputChange = (e) =>{
    this.setState({term: e.target.value});
  };

  // Children onFormSubmit
  onFormSubmit = e =>{
    e.preventDefault();
    // To props Parent(App.js)'s onFormSubmit
    this.props.onFormSubmit(this.state.term)
    // TODO: Make sure we call 
    // callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.term}
              // onChange={e=> this.setState({term: e.target.value})}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}
