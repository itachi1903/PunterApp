import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

const PostInput = () => {
  return (
    <View style={styles.inputContainer}>
      <Image source={{ uri: "https://i.pravatar.cc/100" }} style={styles.profileImage} />
      <View style={styles.inputBox}>
        <Text style={styles.username}>Alucard</Text>
        <TextInput placeholder="Start typing" placeholderTextColor="gray" style={styles.textInput} multiline />
      </View>
    </View>
  );
};

export default PostInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  inputBox: {
    flex: 1,
  },
  username: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInput: {
    color: "white",
    fontSize: 16,
  },
});
