import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import styles from '../components/styleListarProdutos';
import {listcourse} from '../helpers/SimodisAPI';

const Screen = ({navigation}) => {
  const [cursos, setCursos] = useState([]);
  const [buscar, setBuscar] = useState('');

  const handleQuestions = id => {
    navigation.navigate('Questions', {id: id});
  };

  useEffect(() => {
    const getCoursers = async () => {
      const json = await listcourse();

      if (json) {
        setCursos(json);
      }
    };

    getCoursers();
  }, []);

  const cursosFiltro = cursos.filter(mov =>
    mov.name.toLowerCase().includes(buscar.toLocaleLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="&#128269;  Consultar cursos "
        style={styles.input}
        value={buscar}
        onChangeText={t => setBuscar(t)}
      />

      <View style={styles.area}>
        <FlatList
          data={cursosFiltro}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View style={styles.areaCurso}>
                <TouchableHighlight
                  onPress={() => handleQuestions(item.id)}
                  underlayColor="#CCCCCC"
                  activeOpacity={0.8}>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        marginLeft: 5,
                        marginTop: 5,
                        color: '#000',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        marginLeft: 5,
                        marginTop: 5,
                        color: '#000',
                      }}>
                      {item.description}
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            );
          }}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};

Screen.navigationOptions = () => {
  return {
    title: 'Consultar cursos',
  };
};

export default Screen;
