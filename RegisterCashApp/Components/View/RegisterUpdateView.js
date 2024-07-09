import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterUpdateView = ({ currency=0.0, count=0.0}) => {
  return (
      <View style={styles.Updateframe}>
        <View style={styles.Currencyview}>
          <Text style={styles._010}>{currency.toFixed(2)}</Text>
        </View>
        <View style={styles.Updatecountbutton}>
          <Text style={styles.X20}>x{count.toFixed(2)}</Text>
        </View>
      </View>
  );
}

export default RegisterUpdateView

const styles = StyleSheet.create({
  Updateframe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 0,
    alignItems: "center",
    width: 360,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Currencyview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 72,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 22,
    paddingBottom: 21,
    borderRadius: 40,
    boxSizing: "border-box",
    backgroundColor: "rgba(146,144,144,1)",
  },
  _010: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    lineHeight: 32,
    fontWeight: "400",
    textAlign: "center",
    width: 100,
    height:30
  },
  Updatecountbutton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 11,
    paddingRight: 9,
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
    fontWeight: "400",
    textAlign: "center",
    width:100 
  },
});