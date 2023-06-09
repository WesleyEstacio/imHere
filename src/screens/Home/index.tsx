import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome')
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => {
                    const filteredParticipants = participants.filter(participant => participant !== name)
                    setParticipants(filteredParticipants)
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Festa hoje
            </Text>

            <Text style={styles.eventDate}>
                {new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())} {new Intl.DateTimeFormat('pt-BR').format(new Date())}
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder={'Nome do participante'}
                    placeholderTextColor={'#6b6b6b'}
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant 
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda ? Adicione Participantes a sua lista de presença</Text>
                )}
            />
        </View>
    )
}