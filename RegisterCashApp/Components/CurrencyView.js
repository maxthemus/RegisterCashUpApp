import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CurrencyView = ({ name=0.0, value=0.0, add=()=>null, remove=()=>null, onUpdate=()=>null }) => {
    
    const calculateTotal = (name, value) => {
        const total = (name * value);
        return total.toFixed(2);
    }

    return (
      <View style={styles.Currencyframe}>
        <View style={styles.value}>
          <TouchableOpacity onPress={() => add()}>
            <View style={styles.Currencyview}>
              <Text style={styles._010}>
                {name < 1 ? name.toFixed(2).replace(/^0./, "") + "c" : name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Updatecountbutton} onPress={() => onUpdate(name)}>
          <Text style={styles.X20}>{value}</Text>
        </TouchableOpacity>
        <View style={styles.Totalframe}>
          <Text style={styles._20}>{calculateTotal(name, value)}</Text>
        </View>
      </View>
    );
}

export default CurrencyView;


const styles = StyleSheet.create({
  Currencyframe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 360,
    height: 87,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
  },
  Currencyview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    boxSizing: "border-box",
    backgroundColor: "rgba(150,150,150,1)",
    height: 80,
    width: 80,
  },
  value: {
    flex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  _010: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "monospace",
    fontWeight: "400",
    textAlign: "center",
    width: 100,
  },
  Updatecountbutton: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingTop: 22,
    paddingBottom: 21,
    borderRadius: 20,
    boxSizing: "border-box",
    backgroundColor: "rgba(78,73,73,1)",
  },
  X20: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "monospace",
    fontWeight: "400",
    textAlign: "center",
    width: 50,
  },
  Totalframe: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    paddingTop: 22,
    paddingBottom: 21,
    boxSizing: "border-box",
  },
  _20: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "monospace",
    fontWeight: "400",
    textAlign: "center",
    width: 100,
  },
})
