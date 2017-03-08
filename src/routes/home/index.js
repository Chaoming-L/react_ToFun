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
import "./home.less";

class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      list: [],
      nextURL: '',
      dialogOpen: false
    }
  }

  componentWillMount () {
    this.fetchData();
  }

  componentDidMount () {
    let that = this;

    document.addEventListener('touchmove', function (e) {
      e.stopPropagation();
      var clientH = document.body.clientHeight
      var scrollTop = document.body.scrollTop
      var scrollH = document.body.scrollHeight

      if (clientH + scrollTop >= scrollH) {
        if (that.state.nextURL) {
          qnfetch(that.state.nextURL)
            .then(res => res.json())
            .then(data => {
              const list = data.results;
              that.setState({
                ...that.state,
                list: that.state.list.push(list),
                nextURL: data.next
              })
            })
            .catch(err => console.log(err))
        }
      }
    }, false)
  }

  fetchData = () => {
    let that = this
    qnfetch(apiURL.Get_Message_list)
      .then(res => res.json())
      .then(data => {
        const list = data.results;
        const nextURL = data.next;
        that.setState({list, nextURL})
      })
      .catch(err => console.log(err))

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
          list: this.state.list.push(data),
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
      <div>
        <div className='fixed-nav'>
          <AppBar
            title="POST MAN"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>

        <div className="message-list">
          <List>
            {list.length > 0 && list.map((i, index) =>
              <ListItem primaryText={i.content} secondaryText={i.time && moment.unix(i.time).fromNow()}
                        leftIcon={<ContentDrafts />} key={index}/>
            )}
          </List>
        </div>

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
      </div>
    )
  }
}
;

export default Home
