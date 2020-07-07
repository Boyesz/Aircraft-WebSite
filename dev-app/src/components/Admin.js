import React, { Component } from 'react';

class Admin extends Component {

    constructor(props){
        super(props);
        this.state={'id': ''}
      }
      handleChange(e){
        this.setState({id: e.target.value});
      }
      handleSubmit(e){
        const requestOptions = {
            method: 'DELETE'
          };
          fetch("http://localhost:63508/api/Aircraft/Aircraft/" + this.state.id, requestOptions).then((response) => {
            return response.json();
          }).then((result) => {
            console.log(result)
          });
      }

      render()
      {
       return(
        <form>
          <input onChange={this.handleChange.bind(this)} type="text" name="id" placeholder="Enter id" />
          <button onClick={this.handleSubmit.bind(this)}>Delete</button>
        </form>
       )
      }
}

export default Admin