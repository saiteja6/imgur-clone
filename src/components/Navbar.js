import React from "react";

import { Icon } from 'antd';

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="https://imgur.com">Imgur</a></li>
                <li><a href="https://imgur.com/upload?beta"><Icon type="plus-circle" theme="twoTone" />New post</a></li>
                <li><a href="https://imgur.com/leaderboard">FAQ</a></li>
                <li><a href="https://imgur.com/signin?redirect=%2F">Sign in</a></li>
                <li><a href="https://imgur.com/register?redirect=%2F">Sign up</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar