import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import FloatingAddButton from '../../components/FloatingAddButton';
import { useColors, COLOR_ACTIONS } from '../../hooks';
import style from './style';

const MainScreen = ({ navigation }) => {
  return (
    <View style={style.main}>
      <ColorList />
      <FloatingAddButton onPress={() => navigation.navigate('create')} />
    </View>
  );
};

export const ColorList = props => {
  const { state } = useColors();
  return (
    <FlatList
      data={state}
      keyExtractor={color => `${color.id}`}
      renderItem={({ item }) =>
        <ColorItem item={item} />
      }
    />
  );
};

export const ColorItem = props => {
  const { dispatch } = useColors();
  const { name, code, dark, id } = props.item;
  const frontColor = dark ? 'white' : 'black';
  const removeItem = () =>
    dispatch({
      type: COLOR_ACTIONS.REMOVE,
      payload: { id },
    });

  return (
    <View style={[style.item, { backgroundColor: code }]}>
      <Text style={[style.text, { color: frontColor }]}>{name}</Text>
      <Icon
        name='delete'
        color={frontColor}
        size={24}
        onPress={removeItem}
      />
    </View>
  );
};

export default MainScreen;
