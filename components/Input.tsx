import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps {
    value?: string;
    onChange?: (value: string) => void;
    label: string;
    disabled?: boolean;
    placeholder?: string;
    description?: string;
    type?: TextInputProps["keyboardType"];
}

const Input = (props: InputProps) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            style={{
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
            }}
        >
            <Text
                style={{
                    color: theme.colors.text,
                    fontFamily: theme.fonts.medium.fontFamily,
                }}
            >
                {props.label}
            </Text>
            <TextInput
                editable={!props.disabled}
                value={props.value}
                onChangeText={props.onChange}
                keyboardType={props.type}
                placeholder={props.placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                cursorColor={theme.colors.primary}
                style={{
                    paddingVertical: isFocused ? 10 : 12,
                    paddingHorizontal: 16,
                    borderWidth: isFocused ? 2 : 1,
                    color: theme.colors.text,
                    borderColor: isFocused
                        ? theme.colors.border
                        : theme.colors.primary,
                    opacity: props.disabled ? 0.5 : 1,
                    width: "100%",
                }}
            />
            {props.description && (
                <Text
                    style={{
                        color: theme.colors.text,
                        fontFamily: theme.fonts.regular.fontFamily,
                        opacity: 0.75,
                    }}
                >
                    {props.description}
                </Text>
            )}
        </View>
    );
};

export default Input;
