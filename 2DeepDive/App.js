import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Color from './util/Color';
import GameOverScreen from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {


  const [userNumber,setUserNumber]=useState();
  const [gameIsOver,setGameIsOver]=useState(true);
  const [guessRound,setGuessRound]=useState(0);

  function pickedNumberHandler(pickedNumber)
  {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds)
  {
    setGameIsOver(true);
    setGuessRound(numberOfRounds)
  }

  function startNewGameHandler()
  {
    setUserNumber(null);
    setGuessRound(0);
  }



  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}></StartGameScreen>

  if(userNumber)
  {
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} ></GameScreen>
  }

  if(gameIsOver && userNumber)
  {
    screen=<GameOverScreen roundsNumber={guessRound} userNumber={userNumber} onStartNewGame={startNewGameHandler}></GameOverScreen>
  }




  return (
    <>
    <StatusBar style="light"></StatusBar>
    <LinearGradient colors={[Color.primary_800,Color.accent_400]} style={styles.appContainer}>
      <ImageBackground style={styles.appContainer} imageStyle={styles.backgroundImage} resizeMode='cover' source={require('./assets/images/dice.jpg')}>
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
     flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});


//SafeAreaView-It is used to render content with safe boundaries at the top like adjusting of padding.
//It currently works in IOS

//ImageBackground-It is component provided by reactnative.And pass some parameters
//LinearGradient can be obtained from expo linear gradient
//

///We managed screens using states in this project


//We have Platform package in react native that helps to know OS type we have syntax which is used in Title.js 
//There is also another approach for it like using select keyword

///We can also name component for component specific like Card.android.js or Card.ios.js
//The Device then will pick it accordinly