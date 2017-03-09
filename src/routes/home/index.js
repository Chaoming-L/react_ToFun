import React from "react";
import {qnfetch, apiURL} from "assets/utils/request";
import moment from "moment";
import AppBarFixed from "./appbar";
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
      isFetching: false,
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

    this.refs['list'].addEventListener('touchmove', function (e) {

      var clientH = document.documentElement.clientHeight
      var scrollTop = document.body.scrollTop
      var scrollH = document.body.scrollHeight

      // 防止重复拉取
      if (that.state.isFetching) {
        return;
      }

      if (clientH + scrollTop >= scrollH - 80) {
        if (that.state.nextURL) {

          that.setState({
            ...that.state,
            isFetching:true
          })

          qnfetch(that.state.nextURL)
            .then(res => res.json())
            .then(data => {
              const list = data.results;
              that.setState({
                ...that.state,
                list: [...that.state.list,...list],
                nextURL: data.next,
                isFetching:false
              })
            })
            .catch(err => console.log(err))
        }
      }
    }, true)
  }

  fetchData = () => {
    let that = this;
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
    const content = document.getElementById('contentText').value
    const params = {content}
    const that = this
    qnfetch(apiURL.Post_Message, params, 'POST')
      .then(res => res.json())
      .then(data => {
        that.setState({
          ...that.state,
          list: [data, ...that.state.list],
          dialogOpen: false
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    const list = this.state.list || [];

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Send"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSend}
      />,
    ];

    return (
      <div>
        <AppBarFixed />

        <div className="message-list" ref="list">
          <List>
            {list.length > 0 && list.map((i, index) =>
              <ListItem primaryText={i.content} secondaryText={moment.unix(i.time).fromNow()}
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
          <TextField style={{width: '100%'}}
            hintText="Write what you think"
            floatingLabelText="Yo man!"
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
