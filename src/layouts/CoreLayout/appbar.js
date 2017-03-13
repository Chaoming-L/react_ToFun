import React from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";

class AppBarFixed extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false};
  }

  titleCSS = {
    textAlign: 'center'
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render () {
    return (
      <div>
        <div className='fixed-nav'>
          <AppBar
            title="TOFUN" titleStyle={this.titleCSS}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </div>

        <Drawer open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                docked={false}
                width={280}>

          <List>
            <ListItem primaryText='Damon' secondaryText='https://github.com/chaoming56' onTouchTap={this.handleClose}/>
            <ListItem primaryText='Ross' secondaryText='https://github.com/DevRoss' onTouchTap={this.handleClose}/>
          </List>
        </Drawer>
      </div>
    )
  }
}

export default AppBarFixed
