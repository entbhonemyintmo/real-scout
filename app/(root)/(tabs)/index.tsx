import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="text-lg font-bold my-10 font-rubik-bold color-primary-300">
                Welcome to Real Scout
            </Text>

            <Link href="/profile">Profile</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/properties/1">Property 1</Link>
        </View>
    );
}
