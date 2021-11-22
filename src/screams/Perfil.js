import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {infoUser, myCourse} from '../helpers/SimodisAPI';
import styles from '../components/stylePerfil';
import {Picker} from '@react-native-picker/picker';

const Screen = ({navigation}) => {
  const [info, setInfo] = useState({});
  const [cursos, setCursos] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState();

  useEffect(() => {
    const myCoursers = async () => {
      try {
        const json = await myCourse();

        if (json) {
          setCursos(json);
        }
      } catch (err) {
        console.error(err);
      }
    };

    const infoUse = async () => {
      try {
        const json = await infoUser();

        if (json) {
          setInfo(json);
        }
      } catch (err) {
        console.error(err);
      }
    };
    myCoursers();
    infoUse();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../imagens/17004.png')}
          resizeMode="contain"
        />
      </View>
      {cursos.length !== 0 ? (
        <View style={styles.body2}>
          <Text style={styles.text}>Name: {info.name}</Text>
          <Text style={styles.text}>Matricula: {info.enrollment}</Text>
          <Text style={styles.text}>Email: {info.email}</Text>

          <Picker
            style={styles.picker}
            selectedValue={selectedCourse}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCourse(itemValue)
            }>
            {cursos.map((item, index) => {
              return (
                <Picker.Item
                  style={styles.text}
                  label={item.course}
                  value={item}
                  key={index}
                />
              );
            })}
          </Picker>

          {selectedCourse ? (
            <Text style={styles.text1}>Nota:{selectedCourse.grades}</Text>
          ) : null}
        </View>
      ) : (
        <View style={styles.body1}>
          <Text style={styles.text}>Name: {info.name}</Text>
          <Text style={styles.text}>Matricula: {info.enrollment}</Text>
          <Text style={styles.text}>Email: {info.email}</Text>
        </View>
      )}
    </View>
  );
};

Screen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <Button
        title="Cursos"
        onPress={() => navigation.navigate('ListarProdutos')}
      />
    ),
  };
};

export default Screen;
