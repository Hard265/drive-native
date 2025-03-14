import { Link, useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import authStore from "../../stores/auth";

const ResetPassword = () => {
    const theme = useTheme();
    const [email, setEmail] = React.useState("");
    const [pending, setPending] = React.useState(false);

    const handleResetPassword = async () => {
        setPending(true);
        setPending(false);
    };

    return (
        <ScrollView
            contentContainerStyle={{ alignItems: "flex-start", gap: 16 }}
            style={{ flex: 1, padding: 12 }}
        >
            <Text
                style={{
                    fontSize: 24,
                    fontFamily: "Roobert-Medium",
                    marginBottom: 32,
                }}
            >
                Reset Your Password
            </Text>
            <Text
                style={{
                    ...theme.fonts.regular,
                    fontSize: 16,
                    marginVertical: 12,
                }}
            >
                Enter your email address and we’ll send you a password reset
                link.
            </Text>
            <Input
                label="Email address"
                placeholder="your@email.com"
                value={email}
                type="email-address"
                onChange={setEmail}
            />

            <Button
                loading={pending}
                disabled={pending}
                onPress={handleResetPassword}
            >
                Reset Password
            </Button>
        </ScrollView>
    );
};

export default ResetPassword;
