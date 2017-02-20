import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './../actions'

import SimpleTable from './../pages/SimpleTable'

class Users extends Component {

  render() {
	return (
		<SimpleTable
			header={this.props.header}
			show_mobile_menu={this.props.show_mobile_menu} />
	);
  }
}



function mapStateToProps(state) {
  return {
    header : state.header
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { Users }
export default connect(mapStateToProps, mapDispatchToProps)(Users)