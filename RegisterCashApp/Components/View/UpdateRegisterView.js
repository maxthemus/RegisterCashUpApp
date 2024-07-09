import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterUpdateView from './RegisterUpdateView';

const UpdateRegisterView = ({differenceMap=null}) => {

      const printRegisterChanges = () => {
        if (differenceMap === null) return null;
        return (
          <View>
            <View style={{ gap: 10 }}>
              <Text style={{ paddingLeft: 11}}>Add to Register</Text>
              <View style={{ gap: 10 }}>
                {Array.from(differenceMap).map(([key, value]) => {
                  if (value > 0) {
                    return (
                      <RegisterUpdateView
                        key={key + "add"}
                        currency={key}
                        count={value}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </View>
            </View>
            <View style={{gap:10}}>
              <Text style={{ paddingLeft: 11}}>Remove from Register</Text>
              <View style={{ gap: 10}}>
                {Array.from(differenceMap).map(([key, value]) => {
                  if (value < 0) {
                    return (
                      <RegisterUpdateView
                        key={key + "remove"}
                        currency={key}
                        count={value*-1}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </View>
            </View>
          </View>
        );
      };


  return (
    <View style={styles.Frame3}>
        <View style={styles.Group10105}>
          <View style={styles.Group628}>
            <Text style={styles.ToResetRegister}>Balance Register</Text>
          </View>
          <ScrollView style={{flex: 1}}>
            {printRegisterChanges()}
          </ScrollView>
        </View>
    </View>
  );
}

export default UpdateRegisterView

const styles = StyleSheet.create({
  Frame3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 360,
    paddingBottom: 94,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group10105: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Group628: {
    width: "100%",
    height: 42,
    paddingLeft: 11,
    paddingTop: 11,
    paddingRight: 220,
    paddingBottom: 19,
    boxSizing: "border-box",
    backgroundColor: "rgba(78,73,73,1)",
  },
  ToResetRegister: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "400",
    textAlign: "center",
    width: "100%"
  },
  Add: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  Remove: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "400",
    textAlign: "center",
  },
});