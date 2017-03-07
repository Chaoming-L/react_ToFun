import React from "react";
import {qnfetch, apiURL} from "assets/utils/request";
import moment from "moment";
import AppBar from "material-ui/AppBar";
import {List, ListItem} from "material-ui/List";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import ContentAdd from "material-ui/svg-icons/content/add";
import FloatingActionButton from "material-ui/FloatingActionButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import TouchRefresh from "components/touch_refresh";
import "./home.less";

class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      list: [],
      dialogOpen: false
    }
  }

  componentWillMount () {
    this.fetchData()
  }

  fetchData = () => {
    let that = this
    qnfetch(apiURL.Get_Message_list)
      .then(res => res.json())
      .then(data => {
        const list = data.results;
        that.setState({list})
      })
  }

  handleOpen = () => {
    this.setState({
      ...this.state,
      dialogOpen: true
    })
  }
  handleClose = () => {
    this.setState({
      ...this.state,
      dialogOpen: false
    })
  }

  handleSend = () => {
    const content = document.getElementById('contentText').value;
    const params = {content}

    qnfetch(apiURL.Post_Message, params, 'POST')
      .then(res => res.json())
      .then(data => {

        this.setState({
          ...this.state,
          dialogOpen: false
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    const list = this.state.list || [];

    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="发送"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSend}
      />,
    ];

    return (
      <TouchRefresh action={this.fetchData}>
        <AppBar
          title="POST MAN"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <List>
          {list.length > 0 && list.map((i, index) =>
            <ListItem primaryText={i.content} secondaryText={moment.unix(i.time).fromNow()}
                      leftIcon={<ContentDrafts />} key={index}/>
          )}
        </List>

        <FloatingActionButton secondary={true} className="floating-button" onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="尽情吐槽吧"
            floatingLabelText="你的留言"
            multiLine={true}
            rows={2}
            id="contentText"
          />
        </Dialog>
      </TouchRefresh>
    )
  }
};

export default Home
