import{View, Text, StyleSheet} from "react-native";


const style = StyleSheet.create({
    container:{
        margin: 10,
    },
    header: {
        padding:20, 
        backgroundColor: 'slateblue'
    },
    title:{
        fontSize: 20, 
        fongWeight: 'bold',
        color:'white',
    }
});

export default function App(){
    return <View>
        <View style ={style.header}>
            <Text style = {style.title}>TODO</Text>
        </View>

    </View>
}