import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      title: 'My Journal',
      headerStyle: {
        backgroundColor: '#6200ea',
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
