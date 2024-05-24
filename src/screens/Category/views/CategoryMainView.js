import React from 'react';
import { Text, View, FlatList, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryMainView = (props) => {
    const {
        navigation,
        categories
    } = props;

    const renderCategoryItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => navigation.navigate('CategoryDetail', { category: item.category, categoriesItems: item.categoriesItems, })}
            >
                <ImageBackground
                    source={{ uri: item.image }}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
                    <Text style={styles.categoryText}>{item.category}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Categories</Text>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    categoryItem: {
        marginHorizontal: 16,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        borderRadius: 10, // Giá trị borderRadius tương ứng
        overflow: 'hidden', // Đảm bảo bo góc hình ảnh
    },
    categoryText: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    text: {
        margin: 16,
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'flex-start',
    },
});

export default CategoryMainView;
