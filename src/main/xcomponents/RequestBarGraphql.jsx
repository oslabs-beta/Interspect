import React from 'react';
import Button from './styledComponents/Button';
import Form from './styledComponents/FormGQ.jsx';
import Input from './styledComponents/Input';
import Textarea from './styledComponents/Textarea';


let url = '';
let val = '';

const RequestBarGraphql = ({createBodyFromSource}) => {

    const handleChange = (e) => {
        url = e.target.value;
    }
    const handleChangeVal = (e) => {
        val = e.target.value;
    }


    const getData = (e) => {
        e.preventDefault();
        
        
              fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  query: val,
                }),
              })
                .then(response => {
                  return response.json()
                })
  
          
    
        .then(response => {
       
            console.log("responze", response);
            const stringifiedData = JSON.stringify(response);
            const newBodyItem = {
                sourceRoute: url,
                sourceMethod: 'POST',
                sourceResponse: stringifiedData,
                sourceResponseType: '',
                customRoute: '',
                customMethod: 'POST',
                customResponse: stringifiedData,
                customResponseType: '',
                collection: 'CLONED_ITEMS',
            }
            console.log("NBI: ",newBodyItem)
            createBodyFromSource(newBodyItem);
        }).catch(err=>{
            console.log("err:", err);
            
        })
    }

    return (
        <Form onSubmit={getData}>
            
            <Input onChange={handleChange} />
            <Textarea onChange={handleChangeVal}></Textarea>
            <Button type='submit' value='Submit' variation="positive"> Send </Button>
        </Form>
    )
}

export default RequestBarGraphql;
