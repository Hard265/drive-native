import { Link, useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import authStore from "../../stores/auth";

const Register = () => {
    const theme = useTheme();
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });
    const [pending, setPending] = React.useState(false);

    const handleRegister = async () => {
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
                Create an account
            </Text>
            <Input
                label="Email address"
                value={form.email}
                type="email-address"
                placeholder="your@email.com"
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
            <Text
                style={{
                    ...theme.fonts.regular,
                    fontSize: 16,
                    marginVertical: 12,
                }}
            >
                By signing up you agree to our{" "}
                <Link
                    screen="TermsOfServices"
                    style={{ color: theme.colors.primary }}
                >
                    terms of service
                </Link>{" "}
                and privacy policy.
            </Text>

            <Button
                loading={pending}
                disabled={pending}
                onPress={handleRegister}
            >
                Create Account
            </Button>
            <View style={{ marginTop: 32, flexDirection: "column", gap: 16 }}>
                <View>
                    <Text style={{ ...theme.fonts.regular, fontSize: 16 }}>
                        Have an account?{" "}
                        <Link
                            screen="SignIn"
                            style={{ color: theme.colors.primary }}
                        >
                            Signin
                        </Link>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Register;
