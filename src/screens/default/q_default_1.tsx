import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MyUpBar_0 from '../../upbar/UpBar_0';
import NextButton from '../../Buttons/nextButton';
import {DefaultStyle} from '../../styling/defaultLayout';
import GobackButton from '../../Buttons/gobackButton';

const Q_Default_1 = ({navigation, route}) => {
  Date.prototype.format = function (f) {
    if (!this.valueOf()) return ' ';

    var weekName = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
      switch ($1) {
        case 'yyyy':
          return d.getFullYear();
        case 'yy':
          return (d.getFullYear() % 1000).zf(2);
        case 'MM':
          return (d.getMonth() + 1).zf(2);
        case 'dd':
          return d.getDate().zf(2);
        case 'E':
          return weekName[d.getDay()];
        case 'HH':
          return d.getHours().zf(2);
        case 'hh':
          return ((h = d.getHours() % 12) ? h : 12).zf(2);
        case 'mm':
          return d.getMinutes().zf(2);
        case 'ss':
          return d.getSeconds().zf(2);
        case 'a/p':
          return d.getHours() < 12 ? '오전' : '오후';
        default:
          return $1;
      }
    });
  };

  String.prototype.string = function (len) {
    var s = '',
      i = 0;
    while (i++ < len) {
      s += this;
    }
    return s;
  };
  String.prototype.zf = function (len) {
    return '0'.string(len - this.length) + this;
  };
  Number.prototype.zf = function (len) {
    return this.toString().zf(len);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
    },
    textInput: {
      fontSize: 24,
      fontWeight: '400',
      color: '#F47100',
      height: 50,
      width: 300,
      textAlign: 'center',
      //borderColor: '#000000',
      //borderWidth: 1,
      //borderRadius: 12,
      padding: 10,
    },
    text: {
      fontSize: 24,
      fontWeight: '400',
      color: '#000000',
      textAlign: 'center',
    },
    boxline: {
      marginTop: 80,
      marginBottom: '10%',
      marginRight: '3%',
      marginLeft: '3%',
    },
    boxlineDone: {
      backgroundColor: '#F47100',
    },
    boxlineYet: {
      backgroundColor: '#FFFFFF',
    },
    buttonSelection: {
      backgroundColor: '#F2F2F2',
      width: 300,
      height: 40,
    },
    buttonNext: {
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: '#F47100',
      width: 300,
      height: 40,
    },
  });

  const date = new Date();
  const year = date.getFullYear();
  var month_ = date.getMonth() + 1;
  const month = month_.toString();
  const day = date.getDate().toString();

  const con_day = year + ' / ' + month + ' / ' + day;

  const placeholder = '날짜를 입력해주세요';

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('dateFormat: ', date.format('yyyy/MM/dd'));
    hideDatePicker();
    onChangeText(date.format('yyyy/MM/dd'));
  };

  return (
    <>
      <MyUpBar_0 />
      <GobackButton onPress={() => navigation.pop()} />
      {/* <View style={[Styling.container0]}></View> */}
      <View style={DefaultStyle.container0_1}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.text}>나는</Text>
          <TextInput
            pointerEvents="none"
            style={styles.textInput}
            placeholder={con_day}
            placeholderTextColor="#000000"
            underlineColorAndroid="transparent"
            editable={false}
            value={text}
          />
          <Text style={styles.text}>에 태어났어</Text>
          <DateTimePickerModal
            headerTextIOS={placeholder}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View>
      <View style={[DefaultStyle.container1_2]} />
      <View style={[DefaultStyle.container2]}>
        <NextButton
          onPress={() => navigation.navigate('Q_Default_2')}></NextButton>
      </View>
    </>
  );
};

export default Q_Default_1;
