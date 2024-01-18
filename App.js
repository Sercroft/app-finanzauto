import AppBarBottom from "./src/components/AppBar/AppBarBottom"
import Navigation from "./src/components/Navigation"
import StyledText from "./src/styleds/StyledText"
import Constants from 'expo-constants'
import { StyleSheet, View } from "react-native"

const HeaderApp= () => {
  return(
    <View style={styles.container}>
      <StyledText fontSize='superBig' fontWeight='bold' color='colorTitlePrimary'>Finanzauto</StyledText>
    </View>    
)
}

const App = () => {
  return(
    <>
      <HeaderApp/>
      <Navigation/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  }
})

export default App