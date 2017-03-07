import React from "react";
import {qnfetch, apiURL} from "assets/utils/request";
import moment from "moment";
import AppBar from "material-ui/AppBar";
import {List, ListItem} from "material-ui/List";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import "./home.less";

class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      list: []
    }
  }

  componentWillMount () {
    let that = this
    qnfetch(apiURL.Get_Message_list)
      .then(res => res.json())
      .then(data => {
        const list = data.results;
        that.setState({list})
      })
  }

  render () {
    const list = this.state.list || [];

    return (
      <div>
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


        <FloatingActionButton secondary={true} className="floating-button">
          <ContentAdd />
        </FloatingActionButton>

      </div>
    )
  }
}

export default Home
