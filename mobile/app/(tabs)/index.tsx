import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/b.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BIBIX</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bibix, o banco que te deixa feliz</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"> </ThemedText> {' '}
          <Button color={'darkblue'}
      onPress={() =>{
        console.log('You tapped the button!');
      }}
      title='Dados pessoais'
      />
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo</ThemedText>
        <ThemedText>
          1.212,27
        </ThemedText>
        <Button color={'darkblue'}
      onPress={() =>{
        console.log('You tapped the button!');
      }}
      title='Pix'
      />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>

        <ThemedText type="subtitle">Limite Total</ThemedText>
        <ThemedText>
          3.500,00
        </ThemedText>

        <ThemedText type="subtitle">Vencimento</ThemedText>
        <ThemedText>
          05/11/2032
        </ThemedText>

        <ThemedText type="subtitle">Faturas em Aberto</ThemedText>
        <ThemedText>
          Vevcimento 10/07 <br></br> 1.025,66
        </ThemedText>
        <Button color={'darkblue'}
      onPress={() =>{
        console.log('You tapped the button!');
      }}
      title='Ver mais'
      />

        <ThemedText>
          Vevcimento 11/08 <br></br> 928,76
        </ThemedText>
        <Button color={'darkblue'}
      onPress={() =>{
        console.log('You tapped the button!');
      }}
      title='Ver mais'
      />

<Button color={'darkblue'}
      onPress={() =>{
        console.log('You tapped the button!');
      }}
      title='VER MAIS FATURAS'
      />

      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
