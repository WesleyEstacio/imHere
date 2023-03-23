import { Text, View } from 'react-native'

export default function App() {
  return (
    <View 
      style={{ 
        backgroundColor: '#333', 
        flex: 1,
        padding: 24
      }}
    >
      <Text
        style={{ 
          color: '#FDFCFE',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48
        }}
      >
        Nome do Evento
      </Text>

      <Text
        style={{ 
          color: '#6B6B6B',
          fontSize: 16
        }}
      >
        Sexta, 4 de Novembro de 2023
      </Text>
    </View>
  )
}