import React from "react";
import { View, Text } from "react-native";
import authStore from "../../stores/auth";
import Button from "../../components/Button";
import Input from "../../components/Input";

const SignIn = () => {
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
        <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text
                style={{
                    fontSize: 24,
                    fontFamily: "Roobert-Medium",
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
<View>

</View>
        </View>
    );
};

export default SignIn;
