import React from 'react';
import {View} from 'react-native';
import NextButton from '../../Buttons/nextButton';
import images from '../../img';
import {UserStyle} from '../../styling/userLayout';
import TxtCollection from '../../txtCollection/txtcolletion';
import MyUpBar from '../../upbar/MyUpBar';
import Button_Selector from '../test/testing';
// import UserAimg from '../../../assets/images/userA.png';
import TestPage from '../test/testing';

const BTEST = () => {
  return (
    <>
      {/* <MyUpBar level={5} /> 
      여기다 따로 빼는게 나은지 button_selector에 넣는게 나은지...
      */}
      <Button_Selector
        pglevel={4}
        title="hehe"
        content={TxtCollection.selection}
        imgpath={images.userA}
        nextpage="Home"
        count={0}
      />
      {/* <View style={[UserStyle.container2]}>
        <NextButton destination="Home" disable={false} />
      </View> 
      마찬가지로 next button도 한곳에 넣는게 나은지 아니면 따로 빼는게 나은지...
      */}
    </>
  );
};

export default BTEST;
