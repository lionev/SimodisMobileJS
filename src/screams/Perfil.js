import React, {useEffect, useState} from 'react';
import {View, Text, Image, Button, ImageBackground} from 'react-native';
import {infoUser, myCourse} from '../helpers/SimodisAPI';
import styles from '../components/stylePerfil';
import {Picker} from '@react-native-picker/picker';
import backgroundImg from '../imagens/backgroundPerfil.jpg';
import LinearGradient from 'react-native-linear-gradient';

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
          console.log(json);
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
      <ImageBackground source={backgroundImg} style={styles.image}>
        <View style={styles.header}>
          <Image
            style={styles.iconImage}
            source={require('../imagens/iconPerfil.png')}
            resizeMode="contain"
          />
        </View>
        {cursos.length !== 0 ? (
          <View style={styles.body2}>
            <LinearGradient
              style={styles.LinearGradientBody}
              colors={['#1e90ff', '#00bfff']}>
              <Text style={styles.text}>Name: {info.name}</Text>
              <Text style={styles.text}>Matricula: {info.enrollment}</Text>
              <Text style={styles.text}>Email: {info.email}</Text>
              <View style={styles.picker}>
                <Picker
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
              </View>

              {selectedCourse ? (
                <View style={styles.nota}>
                  <Text style={styles.notaText}>
                    Nota:{selectedCourse.grades}
                  </Text>
                </View>
              ) : null}
            </LinearGradient>
          </View>
        ) : (
          <View style={styles.body1}>
            <Text style={styles.text}>Name: {info.name}</Text>
            <Text style={styles.text}>Matricula: {info.enrollment}</Text>
            <Text style={styles.text}>Email: {info.email}</Text>
          </View>
        )}
      </ImageBackground>
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
