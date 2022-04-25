import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import {postStyles} from '../styles/NewFeedPostStyles';
import {dataFeeds} from '../../../assets/data/data';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

export default class NewFeedPost extends Component {

  state = {
    likeCount: [
      {
        id: 1,
        count: 0
      },
      {
        id: 2,
        count: 0
      },
      {
        id: 3,
        count: 0
      },
      {
        id: 4,
        count: 0
      },
      {
        id: 5,
        count: 0
      }
    ]
  }

  performLike = (postId) => {
    let currentLikeCount = this.state.likeCount;

    let updatedLikeCountIndex = currentLikeCount.findIndex(el => el.id === postId);

    currentLikeCount[updatedLikeCountIndex].count = currentLikeCount[updatedLikeCountIndex].count + 1;
    console.log(currentLikeCount);
    this.setState({
      likeCount: currentLikeCount
    })
  }

  renderPostList = dataList => {
    return dataList.map((data, index) => (
      <View style={postStyles.post_container} key={index}>
        {this.renderPostHeader(data)}
        {this.renderPostBody(data.content)}
        {this.renderPostFooter()}
      </View>
    ));
  };

  renderPostListByFlatList = (feed) => {
    return (
      <View style={postStyles.post_container} index={feed.index}>
        {this.renderPostHeader({
          image: feed.item.image,
          name: feed.item.name, 
          title: feed.item.title, 
          time: feed.item.time
        })}
        {this.renderPostBody(feed.item.content)}
        {this.renderPostFooter(feed.item.id)}
      </View>
    );
  };

  renderPostHeader = headerData => {
    const {image, name, title, time} = headerData;
    return (
      <View style={postStyles.post__header_container}>
        <View style={postStyles.post__header__left}>
          <View>
            <Image source={image} style={postStyles.post__avatar} />
          </View>
          <View style={postStyles.post__info__container}>
            <Text style={postStyles.post__info__summary}>{title}</Text>
            <View style={postStyles.post__info}>
              <Text style={postStyles.post__info__name}>{name}</Text>
              <Text style={postStyles.post__info__time}>{time}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faEllipsis} />
        </TouchableOpacity>
      </View>
    );
  };

  renderPostBody = bodyData => {
    return <Text style={postStyles.post__body}>{bodyData}</Text>;
  };

  renderPostFooter = (postId) => {
    return (
      <View style={postStyles.post__footer_container}>
        <TouchableOpacity style={postStyles.post__footer_button} onPress={() => this.performLike(postId)}>
          <Image
            style={postStyles.image_btn}
            source={require('../../../assets/images/heart.png')}
          />
          <Text style={postStyles.reaction_count}>{this.state.likeCount[postId-1].count}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={postStyles.post__footer_button}>
          <Image
            style={postStyles.image_btn}
            source={require('../../../assets/images/comment.png')}
          />
          <Text style={postStyles.reaction_count}>4</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {/* <ScrollView>{this.renderPostList(dataFeeds)}</ScrollView> */}
        <FlatList
          data={dataFeeds}
          renderItem={this.renderPostListByFlatList}
        />
      </View>
    );
  }
}
