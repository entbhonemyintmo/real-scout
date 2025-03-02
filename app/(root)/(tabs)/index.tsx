import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text className="text-3xl font-bold my-10 font-rubik-bold color-primary-300">Welcome to Real Scout</Text>

            <Link className="text-md mb-4 font-rubik-semibold" href="/sign-in">
                Sign In 📝
            </Link>
            <Link className="text-md mb-4 font-rubik-semibold" href="/profile">
                Profile 👦
            </Link>
            <Link className="text-md mb-4 font-rubik-semibold" href="/explore">
                Explore 🔭
            </Link>
            <Link className="text-md mb-4 font-rubik-semibold" href="/properties/1">
                Property 1
            </Link>
        </View>
    );
}
