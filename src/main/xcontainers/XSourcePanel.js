import React, { Component } from 'react';
import RequestBar from '../xcomponents/RequestBar';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';

export default class SourcePanel extends Component {
  render() {
    const { onClick, active } = this.props;
    return (

      <StyledPanel
        onClick={()=> {onClick("source")}}
        active={active}
        style={{ cursor: 'pointer' }}
        >
        <h1>Source</h1>
        <RequestBar/>
      </StyledPanel>
    )
  }
}

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

SourcePanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

