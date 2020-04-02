import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image style={styles.imageStyles} source={imageSource} />
      <Text style={styles.textStyles}>{title}</Text>
      <Text style={styles.textStyles}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: { marginLeft: 10 },
  imageStyles: { margin: 10 }
});

export default ImageDetail;
