import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, Input, Slider } from 'react-native-elements';
import { COLOR_ACTIONS, useColors, useLocale } from '../../hooks';
import style from './style';
import { getColorCode, isDark } from '../../utils';

const CreateColorScreen = ({ navigation }) => {
  const { dispatch } = useColors();
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [name, setName] = useState('');
  const { text } = useLocale().state;

  const color = getColorCode(red, green, blue);
  const addColor = () => {
    dispatch({
      type: COLOR_ACTIONS.ADD,
      payload: { name, red, green, blue },
    });
    navigation.goBack();
  };

  const textColor = isDark(red, green, blue) ? 'white' : 'black';
  return (
    <View style={style.main}>
      <View style={[style.colorView, { backgroundColor: color }]} >
        <Text h1 h1Style={{ color: textColor }}>{color}</Text>
      </View>
      <Input placeholder={text.enter_name} value={name} onChangeText={val => setName(val)} />
      <Slider value={red} onValueChange={val => setRed(val)} step={1} maximumValue={255} />
      <Slider value={green} onValueChange={val => setGreen(val)} step={1} maximumValue={255} />
      <Slider value={blue} onValueChange={val => setBlue(val)} step={1} maximumValue={255} />
      <Button
        title={text.add}
        onPress={addColor}
      />
    </View>
  );
};

export default CreateColorScreen;
