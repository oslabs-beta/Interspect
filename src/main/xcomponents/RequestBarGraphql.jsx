import React from 'react';
import Button from './styledComponents2/Button';
import Form from './styledComponents2/Form';
import Input from './styledComponents2/Input';
import Textarea from './styledComponents2/Textarea';
import Select from './styledComponents2/Select';
import Span from './styledComponents2/Span';
import axios from 'axios'

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
        console.log('url',url);
        console.log('val',val);
        
        
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
            console.log(response);
            
            const stringifiedData = response;
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
            createBodyFromSource(newBodyItem);
        }).catch(err=>{
            console.log(err);
            
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
