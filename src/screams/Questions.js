import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

import question from '../components/styleQuestions'

const INITIAL_QUESTIONS_STATE = [
  {
    question: '1. lorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem orem ipsum dolor sit amet, con orem ipsum dolor sit amet, co orem ipsum dolor sit amet, co orem ipsum dolor sit amet, co',
    alternatives: [
      { text: 'One1' },
      { text: 'One2' },
      { text: 'One3' },
      { text: 'One4' },
      { text: 'One5' },
    ]
  },
  {
    question: '2. lorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem orem ipsum dolor sit amet, con orem ipsum dolor sit amet, co orem ipsum dolor sit amet, co orem ipsum dolor sit amet, co',
    alternatives: [
      { text: 'Two1' },
      { text: 'Two2' },
      { text: 'Two3' },
      { text: 'Two4' },
      { text: 'Two5' },
    ]
  }
]

const Questions = ({questionsExample}) => {
  const [value, setValue] = React.useState('');
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS_STATE) // questionsExample (Quando vir do banco)
  const [currentQuestion, setCurrentQuestion] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)

  console.log(currentQuestion)


  const nextQuestion = () => {
    if(currentIndex > questions.length) {
      console.warn('parabens, terminou')
      return
    }
    setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
      const element = questions[currentIndex]
      setCurrentQuestion(element)
  }, [currentIndex])

  return (
    
      <View style={question.container}>
        <View style={question.content}>
          <View style={question.header}>
            <Text style={question.title}>Pergunta 1</Text>

            <Text style={question.questions}>{currentQuestion?.question}</Text>
          </View>
          <View style={question.radiButton}>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
              {currentQuestion?.alternatives.map((alternative, index) => {
                return (
                  <View style={question.button} key={`${index}`}>
                    <RadioButton value={alternative} />
                    <Text style={question.ButtonText}>{alternative.text}</Text>
                  </View>
                )
              })}
            </RadioButton.Group>
          </View>
        </View>
        <TouchableOpacity style={question.nextQuestion} onPress={nextQuestion}>
          <Text style={question.nextText}>Proxima Pergunta</Text>
        </TouchableOpacity>
      </View>
    
  )
}

export default Questions;