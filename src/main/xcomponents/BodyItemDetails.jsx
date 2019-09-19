/*eslint-disable*/
import React, { useState, Component } from "react";
import styled from 'styled-components';
import ReactJson from 'react-json-view';
import StyledModal from "../xcomponents/styledComponents/StyledModal.jsx";
import Select from './styledComponents/Select';
import Button from './styledComponents/Button';
import ItemDetailsArea from "./styledComponents/ItemDetailsArea.jsx";
import WrapperDiv from "../xcomponents/styledComponents/WrapperDiv.jsx";
import LeftColumn from "../xcomponents/styledComponents/LeftColumn.jsx";
import RightColumn from "../xcomponents/styledComponents/RightColumn.jsx";
import ModalWrapper from "../xcomponents/styledComponents/ModalWrapper";
import { TiEdit } from "react-icons/ti";


class BodyItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { routeAreaVal: this.props.bodyItem.customRoute}
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(
      nextProps.bodyItem.editorOpen != this.props.bodyItem.editorOpen
    ) {
      return true;
    } else {
      return false;
    }
  }
  toggleModal (e) {
    if (this.props.bodyItem.editorOpen){
      this.props.closeBodyItem(this.props.bodyItem.bodyItemId)
    } else {
      this.props.openBodyItem(this.props.bodyItem.bodyItemId)
    }
  }

  handleRouteTextAreaChange (e) {
    this.setState({routeAreaVal: e.target.value});
  }

  render () {
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
    const handleRouteChange = (e)=> {
      e.preventDefault();

      const customRoute = this.state.routeAreaVal;
      // // modifyBodyItem expects an entire bodyItem
      const modifiedBodyItem = {
        ...this.props.bodyItem,
        customRoute
      }
      this.props.modifyBodyItem(modifiedBodyItem);
    }
    const changeCustomResponse = (src) => {
      const customResponse = JSON.stringify(src.updated_src);
      // modifyBodyItem expects an entire bodyItem
      const modifiedBodyItem = {
        ...this.props.bodyItem,
        customResponse
      }
      this.props.modifyBodyItem(modifiedBodyItem);
    };

    const changeMethod = (e) => {
      e.preventDefault();
      const val = e.target.value;
      const customMethod = val;

      const modifiedBodyItem = {
        ...this.props.bodyItem,
        customMethod
      }
      console.log("val: ", val);
      console.log("modifiedBodyItem: ", modifiedBodyItem);
      console.log("this.props.bodyItem: ", this.props.bodyItem);
      this.props.modifyBodyItem(modifiedBodyItem);
    }

    const StyledEditButton = styled(TiEdit)`
      display: block;
      color: #aeb4b5;
      &:hover {
        color: black;
      }
    `
    return (
      <div>
        <StyledEditButton onClick={this.toggleModal.bind(this)}/>
        <StyledModal
          isOpen={this.props.bodyItem.editorOpen}
          onBackgroundClick={this.toggleModal.bind(this)}
          onEscapeKeydown={this.toggleModal.bind(this)}
          opacity={1}
          backgroundProps={{ opacity: 1 }}
        >

          <ModalWrapper>
            <WrapperDiv>
              <LeftColumn>
                <ItemDetailsArea>
                  <div className="detail-header">Source:</div>
                  <div className="detail-pair">
                    <div className="detail-label">
                      {this.props.bodyItem.sourceRoute ? "Cloned From: ": null }
                    </div>
                    <div className="detail-value">
                      {this.props.bodyItem.sourceRoute ? this.props.bodyItem.sourceRoute : null }
                    </div>
                  </div>

                  <div className="detail-pair">
                    <div className="detail-label">
                      {this.props.bodyItem.sourceMethod ? "Method: " : null}
                    </div>
                    <div className="detail-value">
                      {this.props.bodyItem.sourceMethod ? this.props.bodyItem.sourceMethod : null}
                    </div>
                  </div>
                </ItemDetailsArea>
                <ItemDetailsArea>
                  <div className="detail-header">Mock:</div>
                  <div className="detail-pair">
                    <div className="detail-label">
                      Method:
                    </div>
                    <div className="detail-value">
                      <Select
                        defaultValue = {this.props.bodyItem.customMethod ? this.props.bodyItem.customMethod : null}
                        onChange={(e) => changeMethod(e)}
                        name="customMethodSelector"
                      >
                        <option value="GET">GET</option>
                        <option value="PUT">PUT</option>
                        <option value="POST">POST</option>
                        <option value="PATCH">PATCH</option>
                        <option value="DELETE">DELETE</option>
                      </Select>
                    </div>
                  </div>
                  <div className="detail-pair">
                    <div className="detail-label">
                      Route:
                    </div>
                    <div className="detail-value">
                        <textarea
                          key={['routeeditor', this.props.bodyItemId].join('_')}
                          defaultValue={this.props.bodyItem.customRoute}
                          onChange={this.handleRouteTextAreaChange.bind(this)}
                        />
                        <input type='submit' value='Save' onClick={handleRouteChange}/>
                    </div>
                  </div>
                </ItemDetailsArea>

              </LeftColumn>

              <RightColumn>
                <ReactJson
                  src={JSON.parse(this.props.bodyItem.customResponse)}
                  theme='shapeshifter:inverted'
                  iconStyle='circle'
                  style={styles}
                  onAdd={changeCustomResponse}
                  onEdit={changeCustomResponse}
                  onDelete={changeCustomResponse}
                  enableClipboard={false}
                />
              </RightColumn>
            </WrapperDiv>
          </ModalWrapper>

        </StyledModal>
      </div>
    );
  }
}
export default BodyItemDetails;
