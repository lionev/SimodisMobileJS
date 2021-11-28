import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

import question from '../components/styleQuestions'

const Questions = ({navigation}) => {
    const [value, setValue] = React.useState('');

    return(
        <View style={question.container}>
            <View style={question.content}>
                <View style={question.header}>
                    <Text style={question.title}>Pergunta 1</Text>
                
                    <Text style={question.questions}>lorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem ipsum dolor sit amet, conlorem orem ipsum dolor sit amet, con orem ipsum dolor sit amet, co orem ipsum dolor sit amet, co orem ipsum dolor sit amet, co</Text>
                </View>
                <View style={question.radiButton}>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={question.button}>
                            <RadioButton value="One" />
                            <Text style={question.ButtonText}>One</Text>
                        </View>
                        <View style={question.button}>
                            <RadioButton value="Two" />
                            <Text style={question.ButtonText}>Two</Text>
                        </View>
                        <View style={question.button}>
                            <RadioButton value="Three" />
                            <Text style={question.ButtonText}>Three</Text>
                        </View>
                        <View style={question.button}>
                            <RadioButton value="Four" />
                            <Text style={question.ButtonText}>Four</Text>
                        </View>
                        <View style={question.button}>
                            <RadioButton value="Five" />
                            <Text style={question.ButtonText}>Five</Text>
                        </View>
                    </RadioButton.Group>
                </View> 
            </View>
            <TouchableOpacity style={question.nextQuestion}>
                <Text style={question.nextText}>Proxima Pergunta</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Questions;