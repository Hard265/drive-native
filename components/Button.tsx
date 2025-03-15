import { useTheme } from "@react-navigation/native";
import { PropsWithChildren, ReactNode } from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import ActivityIndicator from "./ActivityIndicator";

interface ButtonProps extends PropsWithChildren {
    loading?: boolean;
    disabled?: boolean;
    onPress?(): void;
    icon?: ReactNode;
}

const Button = (props: ButtonProps) => {
    const theme = useTheme();
    return (
        <RectButton
            onPress={props.onPress}
            enabled={props.disabled || props.loading}
            rippleColor={theme.colors.background}
        >
            <View
                style={{
                    flexDirection: "row",
                    gap: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    backgroundColor: theme.colors.text,
                    opacity: props.disabled ? 0.5 : 1,
                }}
                accessible
                accessibilityRole="button"
            >
                {props.loading ? (
                    <ActivityIndicator
                        size={16}
                        color={theme.colors.background}
                    />
                ) : (
                    props.icon && props.icon
                )}
                <Text
                    style={{
                        color: theme.colors.background,
                        fontFamily: theme.fonts.medium.fontFamily,
                        fontSize: 16,
                    }}
                >
                    {props.children}
                </Text>
            </View>
        </RectButton>
    );
};

export default Button;
