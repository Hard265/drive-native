import { useTheme } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps extends PropsWithChildren {
    loading?: boolean;
    disabled?: boolean;
    onPress?(): void;
}

const Button = (props: ButtonProps) => {
    const theme = useTheme();
    return (
        <RectButton
            onPress={props.onPress}
            enabled={props.disabled || props.loading}
            rippleColor={theme.colors.background}
            style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 12,
                paddingHorizontal: 16,
                backgroundColor: theme.colors.text,
            }}
        >
            <Text
                style={{
                    color: theme.colors.background,
                    fontFamily: theme.fonts.medium.fontFamily,
                    fontSize:16
                }}
            >
                {props.children}
            </Text>
        </RectButton>
    );
};

export default Button;
