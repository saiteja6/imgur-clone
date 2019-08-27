import React from "react";

import { Icon,Input } from 'antd';
import { genPercentAdd } from "antd/lib/upload/utils";
const { Search } = Input;
class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="https://imgur.com">Imgur</a></li>
                <li><a href="https://imgur.com/upload?beta"><Icon type="plus-circle" theme="twoTone" />  New post</a></li>
                <li>     <Search
        placeholder="Images, #tags, @users oh my!"
        onSearch={value => console.log(value)}
        style={{ width: 260, backgroundColor:'blue' }}
      /></li>  
                <li><a href="https://imgur.com/leaderboard"><img class="leaderboard uScaleTransition ProfileNavbar-item leaderboard" src=
"https://s.imgur.com/desktop-assets/desktop-assets/icon-leaderboard.2c7c197ab7cc58a23c14b83dcc3025a9.svg"/></a></li>
                <li><a href="https://imgur.com/signin?redirect=%2F">Sign in</a></li>
                <li><a href="https://imgur.com/register?redirect=%2F">Sign up</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar