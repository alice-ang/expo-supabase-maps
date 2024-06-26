import { View, Text, ActivityIndicator, Button } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/providers/AuthProvider";

const index = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(user)"} asChild>
        <Button title="User" />
      </Link>

      <Button onPress={() => supabase.auth.signOut()} title="Sign out" />
    </View>
  );
};

export default index;
