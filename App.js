import { StyleSheet, Text, View, StatusBar, ScrollView, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.tela}>
      <StatusBar barStyle="dark-content" backgroundColor="yellow" />
      <View>
        <Text >lorem</Text>
        <Text style={styles.titulo}>lorem</Text>
        <Image style={styles.estiloImage} source={{uri: "https:picsum.photos/200/200"}} />
      </View>
      <View>
      <Text style={styles.colorText}>Alguma coisa em algum lugar do lado de algo perto de alguém</Text>
      <Text style={styles.colorText}>Blá Blé Blí Bló Blú</Text>
      <Text style={styles.colorText}>ã ë ï õ ü</Text>
      <Text style={styles.colorText}>Harry Potter e o último mago de Oz</Text>
      <Text style={styles.colorText}>Leia a história de facções de jogos que vão lutar pela continuação de seus jogos, nome do livro</Text>
      <Text style={styles.colorText}>Saw Games</Text>
      <Text style={styles.colorText}>Em uma terra muito distante, quatro reinos se enfreitavam com recorrencia, o reino azul, vermelho, amarelo e preto serem se enfrentavam em lutas épicas com os mais variados tipos de guerreiros e guerreiras.
      Essas terras são divididas entre o deserto vivo, a planíce concervadora, o litora sombril e a ilha singular. Esse é o mundo Ares. </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   tela: {
    backgroundColor: 'cyan'
   },
   titulo:{
      color: "black",
      fontSize: 48,
      marginVertical: 32,
      textAlign: "center"
   },
   colorText: {
    color: 'purple',
   },
   estiloImage: {
    height: 200,
    width: "100%"
   },
});


