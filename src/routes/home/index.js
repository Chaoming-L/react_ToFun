import React from "react";
import {qnfetch, apiURL} from "assets/utils/request";
import {openLink} from "assets/utils/tool";
import moment from "moment";
import {List, ListItem} from "material-ui/List";
import ContentAdd from "material-ui/svg-icons/content/add";
import FloatingActionButton from "material-ui/FloatingActionButton";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';
import setTitle from 'hoc/set_app_title';


import "./home.less";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      list: [],
      nextURL: '',
      dialogOpen: false,
      snackbarOpen: false
    }
  }

  componentWillMount() {
    this.fetchData();
    // this.props.setAppTitle('3333')
  }

  componentDidMount() {
    let that = this;

    function handlerUpdateData() {
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
            isFetching: true
          })

          qnfetch(that.state.nextURL)
            .then(res => res.json())
            .then(data => {
              const list = data.results;
              that.setState({
                ...that.state,
                list: [...that.state.list, ...list],
                nextURL: data.next,
                isFetching: false
              })
            })
            .catch(err => console.log(err))
        }
      }
    }

    // 监听手指触摸
    this.refs['list'].addEventListener('touchmove', handlerUpdateData, { passive: true })
    // 监听滚动条
    window.addEventListener('scroll', handlerUpdateData, true)
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

  handleCopy = (index) => {
    const content = this.state.list[index].content
    // 复制内容到剪切板
    const input = document.getElementById('content')
    input.value = content
    input.focus()
    input.select()
    input.setSelectionRange(0, input.value.length)
    document.execCommand('copy')
    // 底部提示
    this.setState({
      ...this.state,
      snackbarOpen: true
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

  onRequestClose = () => {
    this.setState({
      ...this.state,
      snackbarOpen: false
    })
  }

  render() {
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

    const iconButtonElement = (
      <IconButton
      >
        <MoreVertIcon color={grey400}/>
      </IconButton>
    );


    return (
      <div>
        <div className="message-list" ref="list">
          <List>
            {list.length > 0 && list.map((i, index) =>
              <ListItem key={index}
                        primaryText={i.content}
                        secondaryText={moment.unix(i.time).fromNow()}
                        className="message-item"
                        onTouchTap={() => openLink(i.content)}
                        rightIconButton={
                          <IconMenu iconButtonElement={iconButtonElement}>
                            <MenuItem key={index} onTouchTap={() => this.handleCopy(index)}>Copy</MenuItem>
                          </IconMenu>
                        }
              />
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
        {/*剪切板内容 容器*/}
        <input id="content" style={{position: 'fixed', zIndex: '-100', top: '0'}}/>

        <Snackbar
          open={this.state.snackbarOpen}
          message="Copyied !"
          autoHideDuration={1000}
          onRequestClose={this.onRequestClose}
        />

      </div>
    )
  }
}
;

export default setTitle('TOFUN',Home)
