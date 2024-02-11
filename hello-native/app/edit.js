import { router } from "expo-router";
import {View,Text, TextInput, Button} from "react-native";

export default function Edit(){
    return <View>
        <Text>Edit Page</Text>
        <Button title="Save" onPress={()=>{
            router.replace("/");
        }}/>
    </View>
}