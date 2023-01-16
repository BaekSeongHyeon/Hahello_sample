import {useLinkProps, useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import PropTypes, {array, number, string} from 'prop-types';
import SelectionButton from '../../Buttons/selectionButton';
import TxtCollection from '../../txtCollection/txtcolletion';
import {UserStyle} from '../../styling/userLayout';
import NextButton from '../../Buttons/nextButton';
import UserImg from '../../Buttons/userImg';
import images from '../../img';
import MyUpBar from '../../upbar/MyUpBar';
import GobackButton from '../../Buttons/gobackButton';

type props = {
  pglevel: number;
  title: string;
  content: string[];
  count: number; //엇 그럼 필요없어지나? map으로 content 내용 개수만큼 갖고오면?
  imgpath: object;
  nextpage: string;
};

function Button_Selector({
  pglevel,
  title,
  content,
  count,
  imgpath,
  nextpage,
}: props) {
  //왜 두개 다 같이 선택되는 거지 -> 하나의 state에 몽땅 넣어버려서 그럼
  //
  //이거는 부겸이가 한거 - map사용
  //selectionbutton 써서 하는거 ㅊㅊ하더라
  //txt갖고오는거 다시해봐 똥멍청아;;

  const navigation = useNavigation();

  const setCount = () => {
    count = content.length;
    return count;
  };

  setCount();

  // const hi = require('../../img/userA.png');
  return (
    //bextbutton 네비게이션 오류 수정 및 기능 추가 필요
    //navigation기능 어뜨케하지 nextbutton을 포함시켜야할텐데 이거 썸바디헲미ㅜㅠ
    //
    //selectionbutton 개수별 container styling 재정의 필요
    //조건별로(selection 개수별로)0_n, 1_n 조합 재구성할 것
    //

    <>
      <MyUpBar level={pglevel} />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={count > 2 ? UserStyle.container0_3 : UserStyle.container0_2}>
        <Text>{title}</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        {content.map(function (value: string, index: number) {
          return <SelectionButton key={index} txt={value} />;
        })}
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton destination={nextpage} disable={false} />
      </View>
      <Image source={imgpath} style={styles.image} />
    </>
  );
}

//굳이 써야하나? 안써도 괜찮아 보이는데
// Button_Selector.defaultProps = {
//   title: null,
//   count: 0,
//   content: null,
//   comment: null,
//   destination: null,
// };

// Button_Selector.propTypes = {
//   title: PropTypes.string,
//   count: PropTypes.number,
//   content: PropTypes.string,
//   comment: PropTypes.string,
//   destination: PropTypes.string,
// };

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    // backgroundColor: '#E3E3E3',
    width: 324,
    height: 64,
    borderRadius: 8,
    marginBottom: '2%',

    //   width: 300,
    //   height: 50,
  },
  nextbutton: {
    justifyContent: 'center',
    backgroundColor: '#F47100',
    width: 260,
    height: 48,
    borderRadius: 5,

    // bottom: '10%',
    // left: 65,
    // right: 65,
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    // color: '#242424',
  },
  next: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FBFBFB',
  },
  image: {
    position: 'absolute',
    left: '36%',
    top: '13%',
    width: 105,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button_Selector;
