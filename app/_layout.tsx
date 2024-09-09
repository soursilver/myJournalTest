import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      title: 'My Journal',
      headerStyle: {
        backgroundColor: '#FBFFFF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: "#2B303B",
      },
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
