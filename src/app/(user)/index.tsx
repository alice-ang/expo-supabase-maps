import { Button, TextInput } from "react-native";

import { supabase } from "@/lib/supabase";
import { Text, View } from "@/components/Themed";
import { Avatar } from "@/components";
import { useAuth } from "@/lib/providers/AuthProvider";
import { useState } from "react";

export default function TabOneScreen() {
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const { updateProfile, session, profile, loading } = useAuth();

  return (
    <View className="flex-1 ">
      <Text>Jek</Text>
      <View className="space-y-4">
        <View>
          <TextInput value={session?.user?.email} editable={false} />
        </View>
        <View>
          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
          />
        </View>
        <View>
          <TextInput
            value={profile?.website || profile?.website}
            onChangeText={(text) => setWebsite(text)}
            placeholder="Website"
          />
        </View>
      </View>
      <Avatar
        size={200}
        url={avatarUrl || profile?.avatar_url}
        onUpload={(url: string) => {
          setAvatarUrl(url);
          updateProfile({ username, website, avatar_url: url });
        }}
      />
      <Button
        title={loading ? "Loading ..." : "Update"}
        onPress={() =>
          updateProfile({ username, website, avatar_url: avatarUrl })
        }
        disabled={loading}
      />
      <Button onPress={() => supabase.auth.signOut()} title="Sign out" />
    </View>
  );
}
