import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function CashUpController() {
    const [cashUpState, setCashUpState] = useState();

    return (
      <View>
        <Text>CashUpController</Text>
      </View>
    );
}