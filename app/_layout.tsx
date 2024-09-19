import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      title: 'My Journal',
      headerStyle: {
        backgroundColor: '#1f1f1f',
      },
      headerTintColor: '#44EFA6',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: "#ffffff",
      },
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
