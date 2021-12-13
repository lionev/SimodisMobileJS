import React, {useEffect, useState, useCallBack} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {getQuestions} from '../helpers/SimodisAPI';
import backgroundImg from '../imagens/backgroundQuestions.png';
import LinearGradient from 'react-native-linear-gradient';

import questions from '../components/styleQuestions';

const Questions = ({navigation}) => {
  const [selectValue, setSelectValue] = React.useState('');
  const [selectAnswers, setSelectAnswers] = React.useState([]);
  const [questoes, setQuestoes] = useState([]); // questionsExample (Quando vir do banco)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState('Proxima pergunta');

  const nextQuestion = () => {
    if (currentIndex < questoes.length - 1) {
      saveAnswer();
      setCurrentIndex(currentIndex + 1);
      return;
    }
    if (currentIndex >= questoes.length - 1) {
      sendAnswers();
      return;
    }
  };

  const sendAnswers = () => {
    // enviar selectAnswers
  };

  useEffect(() => {
    const getQuestion = async () => {
      const fetchQuestions = await getQuestions(navigation.state.params.id);
      setQuestoes(fetchQuestions);
    };
    getQuestion();
  }, []);

  useEffect(() => {
    if (currentIndex === questoes.length - 1) {
      setTitle('Salvar');
      navigation.navigate('ListarProdutos');
    }
  }, [currentIndex, questoes]);

  const saveAnswer = () => {
    if (selectValue) {
      setSelectAnswers(prevValues => [...prevValues, selectValue]);
    }
  };

  return (
    <View style={questions.container}>
      <ImageBackground source={backgroundImg} style={questions.image}>
        <View style={questions.content}>
          <View style={questions.header}>
            {questoes.map((alternative, index) => {
              if (index === currentIndex) {
                return (
                  <View key={index} style={questions.questions}>
                    <Text style={questions.textQuestions}>
                      {alternative.question}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
          <View style={questions.radiButton}>
            <RadioButton.Group
              onValueChange={newValue => setSelectValue(newValue)}
              value={selectValue}>
              {questoes.map((alternative, index) => {
                if (index == currentIndex)
                  return (
                    <View key={index} style={questions.quests}>
                      {alternative.answers.map((answer, index) => {
                        return (
                          <View key={index} style={questions.quest}>
                            {answer.answer_false ? (
                              <>
                                <RadioButton value={answer.id} />
                                <Text style={questions.ButtonText}>
                                  {answer.answer_false}
                                </Text>
                              </>
                            ) : answer.answer_true ? (
                              <>
                                <RadioButton value={answer.id} />
                                <Text style={questions.ButtonText}>
                                  {answer.answer_true}
                                </Text>
                              </>
                            ) : null}
                          </View>
                        );
                      })}
                    </View>
                  );
              })}
            </RadioButton.Group>
          </View>
        </View>
        <TouchableOpacity onPress={nextQuestion} disabled={!selectValue}>
          <LinearGradient
            style={questions.LinearGradient}
            colors={!!selectValue ? ['#1e90ff', '#00bfff'] : ['#000', '#000']}>
            <Text
              style={{fontSize: 20, color: !!selectValue ? '#000' : '#FFF'}}>
              {title}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Questions;
