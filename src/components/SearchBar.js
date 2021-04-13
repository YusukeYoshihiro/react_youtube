import React from 'react';
import styled from 'styled-components';
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'

const SearchCtn = styled.div`
  display: flex;
`
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

const SearchIcon = styled(SearchAlt)`
  color: #000;
  width: 30px;
  margin-right:10px;
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
          <SearchCtn className="field">
            <Label>Search Bar</Label>
            <SearchIcon/>
            <input
              type="text"
              value={this.state.term}
              // onChange={e=> this.setState({term: e.target.value})}
              onChange={this.onInputChange}
              placeholder="Search Video"
            />
          </SearchCtn>
        </form>
      </div>
    )
  }
}
