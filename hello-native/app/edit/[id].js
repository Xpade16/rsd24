import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {View,Text, TextInput, Button} from "react-native";

const api = "http://172.20.10.3:6969/tasks";
export default function Edit(){
    const{id} = useLocalSearchParams();
    const[subject, setSubject] = useState("");

    useEffect(()=>{
        (async()=>{
            const res = await fetch(`${api}/${id}`);
            const data = await res.json();
            setSubject(data.subject);
        })();
    },[]);
    return <View style = {{flexDirection:'row'}}>
        <TextInput style = {{flexGrow:1, backgroundColor:'#ddf', paddingLeft:10}}
            value={subject} on onChangeText={(setSubject)}
        />
        <Button title="Save" onPress={async()=> {
            const res = await fetch(`${api}/${id}`,{
                method:'PUT',
                body: JSON.stringify({subject}),
                headers:{
                    'Content-Type':'application/json',
                }
            });
            router.replace("/");
        }}/>
    </View>
}