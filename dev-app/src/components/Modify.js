import React, { Component } from 'react';

class Modify extends Component {

    constructor(props){
        super(props);
        this.state=
                {
                    'id': '',
                    'name' : '',
                    'price' : '',
                    'manufacturer' : '',
                    'country' : ''
                }
      }
      handleChangeId(e){
        this.setState({id: e.target.value});
      }
      handleChangeName(e){
        this.setState({name: e.target.value});
      }
      handleChangePrice(e){
        this.setState({price: e.target.value});
      }
      handleChangeManu(e){
        this.setState({manufacturer: e.target.value});
      }
      handleChangeCount(e){
        this.setState({country: e.target.value});
      }

      handleSubmit(e){
        const url = 'http://localhost:63508/api/Aircraft/Aircraft';
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://localhost:63508/api/Aircraft/Aircraft', requestOptions)
        .then(response => response.json())
      }

      render()
      {
       return(
        <form>
          <input onChange={this.handleChangeId.bind(this)} type="text" name="id" placeholder="Enter id" />
          <input onChange={this.handleChangeName.bind(this)} type="text" name="name" placeholder="Enter name" />
          <input onChange={this.handleChangePrice.bind(this)} type="text" name="price" placeholder="Enter price" />
          <input onChange={this.handleChangeManu.bind(this)} type="text" name="manufacturer" placeholder="Enter manufacturer" />
          <input onChange={this.handleChangeCount.bind(this)} type="text" name="country" placeholder="Enter country" />
          <button onClick={this.handleSubmit.bind(this)}>Modify</button>
        </form>
       )
      }
}

export default Modify