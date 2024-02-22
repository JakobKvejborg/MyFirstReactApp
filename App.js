// lav ny app: 
// number 1 kinda doesn't work. create folder manually
// 0. open terminal eller kosol. cmd eller ctrl+æ. cd stiTilDetStedDuVilHaveAppenTilAtLigge
// 1. lav ny folder -> cmd: expo init AwesomeAppName (kan også gøres fra terminalen, ctrl + æ) ((if error, npm install -g expo-cli))
// 2. cd awesomeappname
// 3. code .  (starter appen i vs code studio)
//
// ctrl + shift + y console
// npm start for at starte programmet
// w web
// ctrl + c for at lukke lortet
// ()=>console.log("printThisWhenPressed") is method

// How to clone repository from GitHub:
// 1. Create a folder
// 2. In terminal: (ctrl + æ) cd path/to/your/directory
// 3. In terminal: git clone ""insert github clone repository URL here""
// 4. In terminal: code repository
// 5. File -> Open folder (ctrl + k)

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';


export default function App() {
  const [counter, setCounter] = useState(0)  // hej
  const [showThisText, setShowThisText] =  useState(true)
   const toggleDisappearingText = () => {
    setShowThisText(!showThisText); }

  return (
// Alt herover er javascript
    // Alt dette er ReactNative 
//_________________________________
   <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log("printThisWhenPressed");
          setCounter(counter + 1);
          toggleDisappearingText(); // Toggle the visibility of disappearingText
          //setShowThisText(!showThisText);
        }}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            Det her kan trykkes på
          </Text>
        </View>
         <TouchableOpacity onPress={toggleDisappearingText}>
        <View style={styles.counterBox}>
          <Text style={styles.counterText}>{counter}</Text>
        </View>
        </TouchableOpacity>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View style={styles.disappearingTextContainer}>
        {showThisText && (
          <Animatable.View
            animation="fadeOut"
            duration={1000} // Adjust the duration as needed
          >
            <Text style={styles.disappearingText}>This text can disappear</Text>
          </Animatable.View>
        )}
      </View>
    </View>
  );
}
//_____________________________________


// Dette er CSS (hvordan tingene ser ud)
//____________________________________
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Arial',
    fontSize: 24,
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  counterBox: {
    backgroundColor: 'lightgreen',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -40 }, { translateY: -40 }],
  },
  counterText: {
    color: 'blue',
    fontSize: 44,
  },
  disappearingTextContainer: {
    marginTop: 200, // Fixed margin to create space for the disappearingText
  },
  disappearingText: {
    fontSize: 38,
    color: 'gray',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

//_____________________________________

