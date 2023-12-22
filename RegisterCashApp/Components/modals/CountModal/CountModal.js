import { Modal, View, Text, StyleSheet, TouchableOpacity}  from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react'

const MAX_VALUE = 20;

const CountModal = ({ onClose=()=>null, onSubmit=()=>null, isOpen=false, currencyValue=0.0, value=0}) => {
    const [selectedValue, setSelectedValue] = useState(value)
  
    const printValueComponents = () => {
        const output = [];
        for(let i = 0; i <= MAX_VALUE; i++) {
            output.push(<Picker.Item key={i} label={i.toString()} value={i} />) 
        }
        return output;
    };

    const handleSubmit = () => {
        console.log("SUBMIT");
        console.log({currency: currencyValue, selectedValue: selectedValue});
        onSubmit(currencyValue, selectedValue);
    }
    
    useEffect(() => {
        setSelectedValue(value);
    }, [currencyValue])
    
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Hello, I'm a modal!</Text>

                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(value) => setSelectedValue(value)}
                        >
                        {printValueComponents()}
                    </Picker>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
                            <Text style={styles.buttonText}>close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSubmit()} style={styles.submitButton}>
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CountModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignSelf: "flex-end"
    },
    
});