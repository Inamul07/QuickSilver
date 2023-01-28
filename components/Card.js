import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Card = (props) => {
	return (
		<View style={styles.card}>
			<Image source={props.image} style={styles.image} />
			<View style={styles.textContainer}>
				<Text style={styles.title}>{props.title}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		height: 150,
		width: 150,
		backgroundColor: "#fff",
		borderRadius: 15,
		elevation: 15,
		alignItems: "center",
		justifyContent: "center",
		margin: 15,
	},
	image: {
		height: 70,
		width: 70,
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#AFB6BA",
		marginTop: 10,
	},
});

export default Card;
