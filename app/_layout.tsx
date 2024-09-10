import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      title: 'My Journal',
      headerStyle: {
        backgroundColor: '#9BC0E5',
      },
      headerTintColor: '#44EFA6',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: "#2B303B",
      },
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
