import {Dimensions, StyleSheet} from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  inputError: {
    borderColor: colors.primary,
  },
  content: {
    display: "flex",
    height: Dimensions.get("window").height,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  labelTextWrapper: {
    display: "flex",
    alignItems: "center"
  },
  labelText: {
    fontFamily: "AvenirNextLTPro-Bold",
    fontSize: 17,
    margin: 5,
    padding: 5
  },
  form: {
    flexDirection: "column",
    marginTop: 100
  },
  button: {
    backgroundColor: "#000"
  },
  inputFocused: {
    borderColor: "#000",
  },
});

export default styles;
