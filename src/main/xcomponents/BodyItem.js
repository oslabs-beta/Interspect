import React, { Component } from 'react';
import ReactJson from 'react-json-view';
// import PropTypes from 'prop-types';

class BodyItem extends Component{
  render () {
    const editable = this.props.modifyBodyItem;
    const styles = {
      borderRadius: '5px',
      fontFamily: '\'IBM Plex Mono\', monospace',
      fontSize: '90%',
      maxHeight: '250px',
      overflow: 'auto',
      margin: '0.75em auto',
      padding: '1em',
      border: '1px solid grey',

      
    };
    
    const changeObject = (src) => {

      const customResponse = JSON.stringify(src.updated_src);
      // modifyBodyItem expects an entire bodyItem
      const modifiedBodyItem = {
        ...this.props.bodyItem,
        customResponse
      }
      this.props.modifyBodyItem(modifiedBodyItem);
    };
    const bodyItem = this.props.bodyItem;
    const src = JSON.parse(bodyItem.customResponse);
    
    return (
      <div>
        
          <button className="body-item-delete-button" type="button" onClick={()=>{
            this.props.deleteBodyItem(bodyItem.bodyItemId);
          }}>
            <span aria-hidden="true">&times;</span>
          </button>
        
        <ReactJson
            src={src}
            theme='shapeshifter:inverted'
            iconStyle='circle'
            style={styles}
            collapsed={2}
            onAdd={(editable) ? changeObject : false}
            onEdit={(editable) ? changeObject : changeObject}
            onDelete={(editable) ? changeObject : false}
            enableClipboard={false}
            />
    </div>
    )  
  }
};

export default BodyItem;
