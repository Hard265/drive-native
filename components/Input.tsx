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
    secure?: boolean;
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
                width: "100%",
            }}
        >
            <Text
                style={{
                    color: theme.colors.text,
                    fontFamily: theme.fonts.medium.fontFamily,
                    fontSize: 16,
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
                selectionHandleColor={theme.colors.primary}
                selectionColor={theme.colors.primary
                    .replace("rgb", "rgba")
                    .replace(")", ", 0.5)")}
                secureTextEntry={props.secure}
                style={{
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    borderWidth: isFocused ? 2 : 1,
                    color: theme.colors.text,
                    borderColor: isFocused
                        ? theme.colors.primary
                        : theme.colors.border,
                    opacity: props.disabled ? 0.5 : 1,
                    width: "100%",
                    ...theme.fonts.regular,
                    fontSize: 16,
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
