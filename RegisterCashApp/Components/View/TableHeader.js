import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Platform } from "react-native"

export default function TableHeader() {
  return (
    <View style={styles.Header}>
      <Text style={styles.Value}>Value</Text>
      <Text style={styles.Count}>Count</Text>
      <Text style={styles.Total}>Total</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 360,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(78,73,73,1)",
    paddingHorizontal: 20,
  },
  Value: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    lineHeight: 15,
    fontFamily: Platform.OS === 'ios' ? 'Cochin' : 'monospace',
    fontWeight: "400",
    textAlign: "center",
  },
  Count: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    lineHeight: 15,
    fontFamily: Platform.OS === 'ios' ? 'Cochin' : 'monospace',
    fontWeight: "400",
    textAlign: "center",
  },
  Total: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    lineHeight: 15,
    fontFamily: Platform.OS === 'ios' ? 'Cochin' : 'monospace',
    fontWeight: "400",
    textAlign: "center",
  },
})