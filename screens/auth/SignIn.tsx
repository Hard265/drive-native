import React from "react";
import { View, Text, ScrollView } from "react-native";
import authStore from "../../stores/auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useTheme } from "@react-navigation/native";

const SignIn = () => {
    const theme = useTheme();
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });
    const [pending, setPending] = React.useState(false);

    const handleSignIn = async () => {
        setPending(true);
        await authStore.setToken({
            access: "TODO:",
            refresh: "TODO:",
        });
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
                Sign In to Omni_drive
            </Text>
            <Input
                label="Email address"
                value={form.email}
                onChange={(email) => setForm((prev) => ({ ...prev, email }))}
            />
            <Input
                label="Password"
                value={form.password}
                onChange={(password) =>
                    setForm((prev) => ({ ...prev, password }))
                }
            />
            
            <Button loading={pending} disabled={pending}>
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
                        <Text style={{ color: theme.colors.primary }}>
                            Reset it
                        </Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignIn;
