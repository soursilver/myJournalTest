import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      title: 'My Journal',
      statusBarStyle: 'dark',
      headerStyle: {
        backgroundColor: '#18171E',
        // @ts-ignore
        borderWidth: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: "#ffffff",
      },
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
