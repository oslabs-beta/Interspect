import React from 'react';
import Button from './styledComponents/Button';
import Form from './styledComponents/Form';
import Input from './styledComponents/Input';
import Select from './styledComponents/Select';

const RequestBar = () => {
    //handles all the input changes
    const handleChange = () => {
        // event.persist();
        const inputValue = event.target.value;
        console.log('inputValue => ', inputValue);
        return inputValue;
    }

    const fetchData = (e) => {
        e.preventDefault();
        e.persist();
        console.log("Event Value", e.target);
        const url = handleChange();
        // console.log(url);
        fetch(url)
        // .then(function (response) {
        //     return response.json();
        // })
        .then(data => console.log('fetched data', data));
    }

    return (
        <Form onSubmit={fetchData}>
            <Select>
                <option value='GET'> GET </option>
            </Select>
            <Input onChange={handleChange}/>
            <Button type='submit' value='Submit' variation="positive"> Send </Button>
        </Form>
    )
}
export default RequestBar;