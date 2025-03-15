import { useTheme } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { Text } from "react-native";

interface HeadingProps extends PropsWithChildren {}
const Heading = (props: HeadingProps) => {
    const theme = useTheme();
    return (
        <Text
            style={{
                color: theme.colors.text,
                fontSize: 24,
                fontFamily: "Roobert-Medium",
                marginBottom: 32,
            }}
        >
            {props.children}
        </Text>
    );
};

export { Heading };
