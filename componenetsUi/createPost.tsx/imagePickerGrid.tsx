import React from "react";
import { View, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ImagePickerGridProps {
  images: string[];
  onImageSelect: (images: string[]) => void;
}

const ImagePickerGrid: React.FC<ImagePickerGridProps> = ({ images, onImageSelect }) => {
  const selectImage = () => {
    const newImages = [
      ...images,
      "https://source.unsplash.com/random/200x200?sig=" + Math.floor(Math.random() * 1000),
    ];
    onImageSelect(newImages);
  };

  return (
    <View style={styles.gridContainer}>
      <TouchableOpacity style={styles.addImage} onPress={selectImage}>
        <Ionicons name="camera" size={28} color="yellow" />
      </TouchableOpacity>

      <FlatList
        data={images}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

export default ImagePickerGrid;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  addImage: {
    width: 60,
    height: 60,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 10,
  },
});
