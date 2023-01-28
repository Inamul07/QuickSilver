import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Card from "../components/Card";

function HomePage() {
	return (
		<View style={styles.container}>
			<Card
				image={require("../assets/images/melting.png")}
				title="MELTING"
			/>
			<Card
				image={require("../assets/images/melting.png")}
				title="ENTRY"
			/>
			<Card
				image={require("../assets/images/melting.png")}
				title="DELIVERY"
			/>
			<Card
				image={require("../assets/images/melting.png")}
				title="CUSTOMER"
			/>
			<Card
				image={require("../assets/images/melting.png")}
				title="STOCKS"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 30,
	},
});

export default HomePage;
