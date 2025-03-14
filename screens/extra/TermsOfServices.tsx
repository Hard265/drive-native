import React from "react";
import { ScrollView, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const TermsOfServices = () => {
    const theme = useTheme();

    return (
        <ScrollView style={{ flex: 1, padding: 12 }}>
            <Text
                style={{
                    fontFamily: "Roobert-Medium",
                    fontSize: 24,
                    marginBottom: 16,
                }}
            >
                Terms of Services
            </Text>
            <Text style={{ ...theme.fonts.regular, fontSize: 16 }}>
                {/* Add your terms of services text here */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
            </Text>
        </ScrollView>
    );
};

export default TermsOfServices;
