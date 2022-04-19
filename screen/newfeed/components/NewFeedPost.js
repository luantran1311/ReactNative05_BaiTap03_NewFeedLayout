import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {postStyles} from '../styles/NewFeedPostStyles';
import {dataFeeds} from '../../../assets/data/data';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

export default class NewFeedPost extends Component {
  renderPostList = dataList => {
    return dataList.map((data, index) => (
      <View style={postStyles.post_container} key={index}>
        {this.renderPostHeader(data)}
        {this.renderPostBody(data.content)}
        {this.renderPostFooter()}
      </View>
    ));
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

  renderPostFooter = () => {
    return (
      <View style={postStyles.post__footer_container}>
        <TouchableOpacity style={postStyles.post__footer_button}>
          <Image
            style={postStyles.image_btn}
            source={require('../../../assets/images/heart.png')}
          />
          <Text style={postStyles.reaction_count}>2</Text>
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
        <ScrollView>{this.renderPostList(dataFeeds)}</ScrollView>
      </View>
    );
  }
}
