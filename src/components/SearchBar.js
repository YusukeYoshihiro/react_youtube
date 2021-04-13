import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
	-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;  /* 2 */
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;            /* 3 */
`

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
            <Label>Search Bar</Label>
            <input
              type="text"
              value={this.state.term}
              // onChange={e=> this.setState({term: e.target.value})}
              onChange={this.onInputChange}
              placeholder="Search Video"
            />
          </div>
        </form>
      </div>
    )
  }
}
