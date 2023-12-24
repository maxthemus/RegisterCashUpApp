import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Platform } from "react-native"

export default function RegisterBalanceView({value=0.0}) {

  return (
    <View style={styles.Registerbalanceview}>
      <View style={styles.textFrame}>
        <Text style={styles.text}>${value.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Registerbalanceview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    height: 110,
    paddingLeft: 42,
    paddingRight: 42,
    paddingTop: 35,
    paddingBottom: 25,
    boxSizing: "border-box",
    backgroundColor: "rgba(78,73,73,1)",
  },
  textFrame: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: 9,
    paddingBottom: 9,
    borderRadius: 100,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    lineHeight: 32,
    fontFamily: Platform.OS === 'ios' ? 'Cochin' : 'monospace',
    fontWeight: "400",
    textAlign: "center",
  },
})
