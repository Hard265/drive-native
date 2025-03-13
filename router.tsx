import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "./screens/auth/SignIn"
import { observer } from "mobx-react-lite"
import Home from "./screens/Home"

const RootStack = createNativeStackNavigator()

export default observer(() => {
    return (
        <RootStack.Navigator>

            <RootStack.Group>

                <RootStack.Screen name="SignIn" component={SignIn} />
            </RootStack.Group>
            <RootStack.Screen name="Home" component={Home} />

        </RootStack.Navigator>
    )
})