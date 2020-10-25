import React from 'react';
import { Icon } from 'react-native-elements';
import style from './style';

const FloatingAddButton = props => {
  return (
    <Icon
      testID='FloatingAddButton'
      reverse
      name='add'
      color='blue'
      containerStyle={style.buttonPosition}
      onPress={props.onPress}
    />
  );
};

export default FloatingAddButton;
