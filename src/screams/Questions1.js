import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {getQuestions} from '../helpers/SimodisAPI';

import question from '../components/styleQuestions';

const Questions = ({navigation}) => {
  const [value, setValue] = React.useState('');
  const [questions, setQuestions] = useState([]); // questionsExample (Quando vir do banco)
  const [currentQuestion, setCurrentQuestion] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const {} = useState('');

  console.log(currentQuestion);

  const nextQuestion = () => {
    if (currentIndex > questions.length) {
      console.warn('parabens, terminou');
      return;
    }
    setCurrentIndex(currentIndex + 1);
    console.log(currentQuestion);
  };

  useEffect(() => {
    const getQuestion = async () => {
      const fetchQuestions = await getQuestions(navigation.state.params.id);
      setQuestions(fetchQuestions);
      console.log(fetchQuestions);
      console.log(JSON.stringify(Object, null, 2));
    };
    getQuestion();
  }, []);

  useEffect(() => {
    const element = questions[currentIndex];
    setCurrentQuestion(element);
  }, [currentIndex]);

  return (
    <View style={question.container}>
      <Text>{navigation.state.params.id}</Text>
      <View style={question.content}>
        <View style={question.header}>
          <Text style={question.title}>Pergunta 1</Text>
          <Text style={{fontSize: 20, color: 'black'}}>Lorem Ipsum</Text>
        </View>
        <View style={question.radiButton}>
          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            {currentQuestion?.Object.map((alternative, index) => {
              return (
                <View style={question.button} key={`${index}`}>
                  <RadioButton value={alternative.Object} />
                  <Text style={question.ButtonText}>{alternative.Object}</Text>
                </View>
              );
            })}
          </RadioButton.Group>
        </View>
      </View>
      <TouchableOpacity style={question.nextQuestion} onPress={nextQuestion}>
        <Text style={question.nextText}>Proxima Pergunta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Questions;
