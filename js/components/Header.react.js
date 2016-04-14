
var React = require('react');

var injectTapEventPlugin = require("react-tap-event-plugin");

var mui = require('material-ui'),
  ThemeManager = require('material-ui/lib/styles/theme-manager'),
  FlatButton = require('material-ui/lib/flat-button'),
  AppBar = require('material-ui/lib/app-bar');

injectTapEventPlugin();

import View from "react-flexbox";

var Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      //muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  /**
   * @return {object}
   */
  render: function() {
    return (
      <View row className="header">
        <AppBar
          title="ValcomLocate Administration Console"
          iconElementRight={<a href="http://valcom.com" target="_blank"><img style={{width:'180', marginTop:'-15'}} src="images/ValcomLogo_color.png" /></a>}
        />
      </View>
    );
  }
});

module.exports = Header;
