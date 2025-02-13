import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Option {
  name: string;
  value: string;
}

interface PortionSelectorProps {
  options: Option[];
  onSelect: (value: string) => void;
  defaultValue?: string;
}

const PortionSelector: React.FC<PortionSelectorProps> = ({ options, onSelect, defaultValue }) => {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[styles.option, selected === option.value && styles.selected]}
          onPress={() => handleSelect(option.value)}
        >
          <Text style={[styles.text, selected === option.value && styles.selectedText]}>
            {option.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PortionSelector;

// 🔹 **Styles**
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#3f3f3f",
    borderRadius: 50,
    alignSelf: "center",
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 50,
  },
  selected: {
    backgroundColor: "#FFFF00",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  selectedText: {
    color: "black",
    fontWeight: "bold",
  },
});
