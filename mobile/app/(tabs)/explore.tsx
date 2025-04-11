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
      source={require('@/assets/images/bb.png')}
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
    <Collapsible title="Pagos com Pix">
      <ThemedText>
      <Button color={'darkblue'}
    onPress={() =>{
      console.log('You tapped the button!');
    }}
    title='Extrato'
    />

      <br></br>

      <Button color={'darkblue'}
    onPress={() =>{
      console.log('You tapped the button!');
    }}
    title='Minhas Chaves'
    />

      <br></br>

      <Button color={'darkblue'}
    onPress={() =>{
      console.log('You tapped the button!');
    }}
    title='Comprovantes'
    />
      </ThemedText>
      </Collapsible>


    <Collapsible title="Empréstimos">
      <ThemedText>
        Limites de Crédito/Valor Disponível<br></br>Meus Contratos/Ver Detalhes<br></br>Crédito do Trabalhador<br></br>Adiantat Saque Aniversário
      </ThemedText>   
    </Collapsible>

    <Collapsible title="Habitação">
      <ThemedText>
        Meus Contratos<br></br>Acompanhar Proposta<br></br>Buscar Imóveis à Venda
      </ThemedText>
    </Collapsible>

    <Collapsible title="Seguro e Capitalização">
      <ThemedText>
        Seguro de vida/Simular e Cantratar<br></br>Seguro Residencial/Contratar<br></br>Capitalização/Meus Títulos
      </ThemedText>
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
