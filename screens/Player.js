/**
 * Created by buhe on 16/9/20.
 */

import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Dimensions
} from 'react-native';

import { connect } from 'react-redux';

import Pili, {
    Streaming,
    Player,
    StreamingConst
} from 'react-native-pili';

var {height, width} = Dimensions.get('window');

class RoomView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View>
              <Player
                  source={{
                        uri:this.props.route.params.url,
                        //uri:"rtmp://pili-live-rtmp.pilitest.qiniucdn.com/pilitest/buhe",
                        //controller: true,
                        timeout: 10 * 1000,
                        live:true,
                        hardCodec:false,
                      }}
                  started={true}
                  style={{
                        marginTop:70,
                        height:height - 70,
                        width:width,
                        flex:1
                      }}
                  aspectRatio={2}
                  />
          </View>
  }
}

export default connect()(RoomView);
