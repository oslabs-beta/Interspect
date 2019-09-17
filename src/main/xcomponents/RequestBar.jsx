import React from 'react';
import Button from './styledComponents/Button';
import Form from './styledComponents/Form';
import Input from './styledComponents/Input';
import Select from './styledComponents/Select';


const RequestBar = () => {
    let url= '';

    const handleChange = (e) => {
        url = e.target.value;
    }

    const parseXmlToJson = (xml) => {
        let json;
        parseString(xml, (err, result) => {
          json = result;
          return result;
        });
        return json;
      };

    const fetchData = (e) => {
        e.preventDefault();
        console.log("URL", url);
        fetch(url)
        .then(res => {
            const val = res.headers.get('content-type');
            if (val.includes('xml')) {
                return res.text().then(xml => parseXmlToJson(xml));
              }
            console.log('val', val)
            return res.json()
        })
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