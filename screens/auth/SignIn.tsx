import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Link, useTheme } from "@react-navigation/native";
import authStore from "../../stores/auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Heading } from "../../components/Text";

const SignIn = () => {
    const theme = useTheme();
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });
    const [pending, setPending] = React.useState(false);

    const handleSignIn = async () => {
        setPending(true);
        setPending(false);
    };

    return (
        <ScrollView
            contentContainerStyle={{ alignItems: "flex-start", gap: 16 }}
            style={{ flex: 1, padding: 12 }}
        >
            <Heading>Sign In</Heading>
            <Input
                label="Email address"
                value={form.email}
                placeholder="your@email.com"
                type="email-address"
                onChange={(email) => setForm((prev) => ({ ...prev, email }))}
            />
            <Input
                label="Password"
                value={form.password}
                secure
                onChange={(password) =>
                    setForm((prev) => ({ ...prev, password }))
                }
            />

            <Button loading={pending} disabled={pending} onPress={handleSignIn}>
                Sign in
            </Button>
            <View style={{ marginTop: 32, flexDirection: "column", gap: 16 }}>
                <View>
                    <Text style={{ ...theme.fonts.regular, fontSize: 16 }}>
                        Need an account?{" "}
                        <Link
                            screen="Register"
                            style={{ color: theme.colors.primary }}
                        >
                            Sign up
                        </Link>
                    </Text>
                </View>
                <View>
                    <Text style={{ ...theme.fonts.regular, fontSize: 16 }}>
                        Forgot your password?{" "}
                        <Link
                            screen="ResetPassword"
                            style={{ color: theme.colors.primary }}
                        >
                            Reset it
                        </Link>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignIn;
