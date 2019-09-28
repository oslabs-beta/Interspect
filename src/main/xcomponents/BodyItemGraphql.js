import React, { Component } from 'react';
import axios from 'axios'

const divStyleButtons={
    color: 'blue',
    display: 'flex',
    flexDirection: 'row',
    padding: '20px'
  }
  const divStyleElements={
    color: 'blue',
    display: 'flex',
    flexDirection: 'column',
  }
  const btn={
      backgroundColor:'#2196F3',
      color:'white'
  }
  const divRest={
    border: "2px solid #2196F3",
    color: "#2196F3",
    backgroundColor: "white",
    padding: "10px",
    fontFamily: "Arial"
  }
  const divGraphql={
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  }

  let url = 'vdvd'
  let val = 'vsdvvvvvv'
  
class BodyItemGraphql extends Component{
    handleChangeImp (e) {
        url = e.target.value
        return url
    }
    handleChangeVar (e) {
        val = e.target.value
        return val
    }
    getData(axioso){
        axioso = {
            method: 'post',
            url: url,
            data:{
                'query':val
        }
    }
    axios(axioso).then(function(response){
            console.log(response.data.data);
        })    
    }
    render(){
        return(
            <div>
                <div style={divStyleButtons}>
                <button style={divRest}>REST</button><button style={divGraphql}>GRAPHQL</button></div>
                <div style={divStyleElements}>
                <input onChange={this.handleChangeImp} ></input>
                <textarea onChange={this.handleChangeVar}></textarea>
                <button onClick={this.getData(url,val) } style={btn}>Get Data Now..</button>
                </div>
            </div>
        )
    }
}
export default BodyItemGraphql