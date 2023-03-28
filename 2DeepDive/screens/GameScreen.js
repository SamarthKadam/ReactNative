import { useState,useEffect } from 'react';
import {View,Text,StyleSheet,Alert, FlatList,useWindowDimensions} from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';
import GuessLoginItem from '../components/game/GuessLoginItem';
import {Ionicons} from '@expo/vector-icons'

function GenrateRandomNumber(min,max,exclude)
{
    const rndNum=Math.floor(Math.random()*(max-min))+min;

    if(rndNum===exclude)
    {
        return GenrateRandomNumber(min,max,exclude);
    }
    else{
        return rndNum;
    }
}

let minBoundary=1;
let maxBoundary=100;

function GameScreen({userNumber,onGameOver})
{

    const intialGuess=GenrateRandomNumber(1,100,userNumber);
    const[currentGuess,settCurrentGuess]=useState(intialGuess);
    const [guessRound,setGuessRound]=useState([intialGuess])
   const{width,height}=useWindowDimensions()



    useEffect(()=>{
        if(currentGuess===userNumber)
        {
            onGameOver(guessRound.length);
        }
    
      },[currentGuess,userNumber,onGameOver])


      useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
      },[])


    function nextGuessHandler(direction){

        if((direction==='lower' && currentGuess<userNumber)||(direction==='greater' && currentGuess>userNumber))
        {
            Alert.alert("Don't lie","You know that this is wrong..",[{text:'Sorry',style:'cancel'}])
            return;
        }


        if(direction==='lower')
        {
            maxBoundary=currentGuess;
            
        }
        else{
            minBoundary=currentGuess+1
        }

        const rndNumber=GenrateRandomNumber(minBoundary,maxBoundary,currentGuess)
        settCurrentGuess(rndNumber);
        setGuessRound((prevGuessRounds)=>[rndNumber,...prevGuessRounds])
    }



    const guessRoundlistLenght=guessRound.length

    let content=<>
     <NumberContainer>{currentGuess}</NumberContainer>
             <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                    <Ionicons name="md-remove" size={24} color='white'></Ionicons>
                    </PrimaryButton></View> 
                   <View style={styles.buttonContainer} ><PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                   <Ionicons name="md-add" size={24} color='white'></Ionicons>
                    </PrimaryButton></View> 
                </View>
             </Card>
    </>

    if(width>500)
    {
        content=(
       <>
       <View style={styles.buttonContainerWide}>
                  <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                    <Ionicons name="md-remove" size={24} color='white'></Ionicons>
                    </PrimaryButton></View>  
       <NumberContainer>{currentGuess}</NumberContainer>
       <View style={styles.buttonContainer} ><PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                   <Ionicons name="md-add" size={24} color='white'></Ionicons>
                    </PrimaryButton></View> 
       </View>
       </>
        )
    }




    return (<View style={styles.screen}>
             <Title>Opponent's Guess</Title>
             {content}
             <View style={styles.listContainer}>
                <FlatList data={guessRound} keyExtractor={(item)=>item} renderItem={(itemData)=><GuessLoginItem roundNumber={guessRoundlistLenght-itemData.index} guess={itemData.item}></GuessLoginItem>}></FlatList>
             </View>
           </View>)

}


export default GameScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:40,
        alignItems:'center'
    },
    instructionText:{
        marginBottom:12
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
    listContainer:{
        flex:1,
        padding:16
    },
    buttonContainerWide:{
        flexDirection:'row',
        alignItems:'center'
    }
})