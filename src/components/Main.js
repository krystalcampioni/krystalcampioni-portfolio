import React from 'react';
import Header from './Header';

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
