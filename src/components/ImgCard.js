import React from 'react';
import {Card, Avatar, Icon} from 'antd';

class ImgCard extends React.Component{
    render(){
        const {Meta} = Card;
        return(
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="Image failed to load. Please try again"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <Icon type="like" theme="filled" key="likes" />,
                <Icon type="dislike" theme="filled" key="dislikes" />,
                <Icon type="message" theme="filled" key="comment" />,
                <Icon type="eye" theme="filled" key="views" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
                />
            </Card>
        );
    }
}

export default ImgCard