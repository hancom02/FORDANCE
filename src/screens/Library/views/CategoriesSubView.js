import { Text, View } from "react-native";
import Category from "../../Category";

const CategoriesSubView = (props) => {
    const {
        navigation
    } = props;

    const propsCategory = {
        navigation,

    }

    return(
        <View>
            <Text>Category Sub View</Text>
            <Category{...propsCategory}/>
        </View>
    )
}

export default CategoriesSubView;