import {Button, Text} from "native-base";
import React from "react";
import {StyleSheet} from "react-native";

type Props = {
    style?: {},
    onSubmitButton: () => {}
}

const SymbolButton = (props: Props) => {
    return <Button
        primary
        onPress={props.onSubmitButton}
        style={{...styles.submitButton, ...props.style}}
    >
        <Text style={{...styles.submitButtonText, ...props.style}}>GO</Text>
    </Button>;
};

const styles = StyleSheet.create({
    submitButton: {
        margin: 0,
        padding: 0,
        justifyContent: "center",
        backgroundColor:  "#ECECEC",
        borderRadius: 0,
        height: 75,
    },
    submitButtonText: {
        color: "#FFFFFF",
        fontFamily: "AvenirNextLTPro-Bold",
        fontSize: 17
    }
});

export default SymbolButton;