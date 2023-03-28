import {View,Image,StyleSheet,Text,useWindowDimensions,ScrollView} from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Color from "../util/Color";

function GameOverScreen({roundsNumber,userNumber,onStartNewGame})
{
   const{height,width}=useWindowDimensions();

   let imageSize=300;

   if(width<380)
   {
    imageSize=150;
   }

   if(height<400)
   {
    imageSize=80
   }

   const imageStyle={
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2
   }

    return <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
       <View style={[styles.imageContainer,imageStyle]}>
       <Image style={styles.image} source={require('../assets/images/success.png')}></Image>
        </View> 
        <Text style={styles.summerText}>Your Phone needed
             <Text style={styles.hightlightText}> {roundsNumber}</Text> rounds to guess the number 
             <Text style={styles.hightlightText}> {userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
}

export default GameOverScreen;


const styles=StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'

    },
    imageContainer:{
        // width:deviceWidth<380?150:300,
        // height:deviceWidth<380?150:300,
        // borderRadius:deviceWidth<380?75:150,
        borderWidth:3,
        borderColor:Color.primary_800,
        overflow:"hidden",
        margin:36
    },
    image:{
        height:'100%',
        width:'100%'
    },
    summerText:{
        fontSize:24,
        textAlign:'center',
        marginBottom:24
    },
    hightlightText:{
        color:Color.primary_500
    }
})


///How Customized buttons can be created in above case
///With the help of dimension API we can acess the height and width of the screen and customize the design accordingly
///The component is rendered again when there is change in the screen size