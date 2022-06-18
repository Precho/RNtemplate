import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, View, useColorScheme } from 'react-native'
import { Colors, Header, LearnMoreLinks } from 'react-native/Libraries/NewAppScreen'

import { styles } from './styles'

export const TestScreen = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View style={styles.root}>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
