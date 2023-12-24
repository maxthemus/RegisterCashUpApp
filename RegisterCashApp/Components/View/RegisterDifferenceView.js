import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RegisterDifferenceView = ({ registerBalance=0.0, expectedBalance=0.0, difference=0.0}) => {

    const getDifferenceText = () => {
        if(difference === 0) {
            return "";
        } else if(difference < 0) {
            return "Missing";
        } else if(difference > 0) {
            return "Surplus";
        }
    };

  return (
    <View style={styles.Registerdifference}>
      <View style={styles.Group332}>
        <View style={styles.Group9110}>
          <View style={styles.Numbercomponent}>
            <Text style={styles.RegisterBalance}>Register Balance</Text>
            <View style={styles.Textcontainer}>
              <Text style={styles.text}>{registerBalance.toFixed(2)}</Text>
            </View>
          </View>
          <View style={styles.Numbercomponent}>
            <Text style={styles.RegisterBalance1}>Expected Balance</Text>
            <View style={styles.Textcontainer}>
              <Text style={styles.text}>{expectedBalance.toFixed(2)}</Text>
            </View>
          </View>
          <View style={styles.Minusrectangle} />
        </View>
        <View style={styles.Differencecomponent}>
          <Text style={styles.Difference}>{getDifferenceText()}</Text>
          <View style={styles.differenceContainer}>
            <Text style={styles.text}>{difference}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RegisterDifferenceView;

const styles = StyleSheet.create({
  Registerdifference: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 360,
    height: 152,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 35,
    paddingBottom: 13,
    boxSizing: "border-box",
    backgroundColor: "rgba(78,73,73,1)",
  },
  Group332: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Group9110: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
  },
  Numbercomponent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
    gap: 10,
  },
  RegisterBalance: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: Platform.OS === "ios" ? "Cochin" : "monospace",
    fontWeight: "400",
    textAlign: "center",
  },
  Textcontainer: {
    width: "100%",
    height: 33,
    borderRadius: 20,
    backgroundColor: "rgba(217,217,217,1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Numbercomponent1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    boxSizing: "border-box",
  },
  RegisterBalance1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: Platform.OS === 'ios' ? 'Cochin' : 'monospace',
    fontWeight: "400",
    textAlign: "center",
  },
  Textcontainer1: {
    width: "100%",
    height: 33,
    borderRadius: 20,
    backgroundColor: "rgba(217,217,217,1)",
  },
  differenceContainer: {
    width: "33%",
    height: 33,
    borderRadius: 50,
    backgroundColor: "rgba(217,217,217,1)",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  Minusrectangle: {
    position: "absolute",
    top: 32,
    left: 157,
    width: 26,
    height: 8,
    backgroundColor: "rgba(255,255,255,1)",
  },
  Differencecomponent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
    boxSizing: "border-box",
    gap: 10,
  },
  Difference: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: Platform.OS === "ios" ? "Cochin" : "monospace",
    fontWeight: "400",
    textAlign: "center",
  },
  Textcontainer2: {
    width: "100%",
    height: 43,
    borderRadius: 20,
    backgroundColor: "rgba(217,217,217,1)",
  },
  text: {
    justifyContent: "center",
    verticalAlign: "middle",
    textAlign: "center",
    fontSize: 25,
  },
});