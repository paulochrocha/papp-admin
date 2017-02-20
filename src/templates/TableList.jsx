import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import Header from './../organisms/Header'
import Content from './../organisms/Content'
import TableList from './../organisms/TableList'
import Footer from './../organisms/Footer'

class TableListTemplate extends Component {

  render() {

  	let { header, show_mobile_menu } = this.props
    return (
      	<Grid fluid={true}>
        	<Header data={header} show_mobile_menu={show_mobile_menu}/>
          <Content>
          <TableList />
            { this.props.children }          
          </Content>
        	<Footer />
        </Grid>
    );
    
  }
}
 
export { TableListTemplate }
export default TableListTemplate