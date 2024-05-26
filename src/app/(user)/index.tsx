import { Button, StyleSheet } from "react-native";

import { supabase } from "@/lib/supabase";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View className="bg-red-100">
      <Text>Jek</Text>
      <Button onPress={() => supabase.auth.signOut()} title="Sign out" />
    </View>
  );
}
