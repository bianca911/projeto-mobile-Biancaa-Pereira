import { StyleSheet, Image, Platform, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#dc143c' }}
      headerImage={
        <Image
        source={require('@/assets/images/b.png')}
        style={styles.headerImage}
      />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Histórico</ThemedText>
      </ThemedView>
      <ThemedText>
      <Button color={'darkblue'}
      onPress={() =>{
        console.log('You tapped the button!');
      }}
      title='Buscar'
      />
      </ThemedText>

      <Collapsible title="Transferência">
        <ThemedText>
        Transferência enviada<br></br>Maria Luiza<br></br>199,99<br></br><ThemedText type="defaultSemiBold">VER MAIS</ThemedText>{' '}
        </ThemedText>
        
        <ThemedText>
          Transferência recebida<br></br>de Maria Luiza<br></br> 99,99<br></br> <ThemedText
           type="defaultSemiBold">VER MAIS</ThemedText>
        </ThemedText>
          
      </Collapsible>
      <Collapsible title="Cartões">
        <ThemedText>
          Cartão Fisíco<br></br> Bianca Moreira 
        </ThemedText>

        <ThemedText>
          Cartão Virtual<br></br> Bianca Moreira 
        </ThemedText>
          <Button color={'darkblue'}
      onPress={() =>{
        console.log('You tapped the button!');
      }}
      title='Criar Cartão'
      />

      </Collapsible>
      <Collapsible title="Faturas Pagas">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/b.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    height: 250,
    width: 400,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
