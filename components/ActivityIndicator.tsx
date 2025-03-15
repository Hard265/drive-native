import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import Iconify from "react-native-iconify";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

interface ActivityIndicatorProps {
    size?: number;
    color?: string;
}

const ActivityIndicator = ({ size = 24, color }: ActivityIndicatorProps) => {
    const theme = useTheme();
    const rotation = useSharedValue(0);

    useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 500,
                easing: Easing.linear,
            }),
            -1,
            false
        );
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotation.value}deg` }],
    }));

    return (
        <Animated.View style={animatedStyle}>
            <Iconify
                icon="mingcute:loading-3-fill"
                size={size}
                color={color || theme.colors.background}
            />
        </Animated.View>
    );
};

export default ActivityIndicator;
