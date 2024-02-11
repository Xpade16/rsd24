import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome"

const styles = StyleSheet.create({
    list: {
        borderWidth: 1,
        borderColor: "#ccc",
        margin: 15,
    },
    listItem: {
        flexDirection: "row",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    itemText: {
        flexGrow: 1,
        fontSize: 18,
    },
    form: {
        margin: 15,
        flexDirection: 'row'
    },
    input: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: '#ddd',
        fontSize: 18
    }
});
const api = "http://172.20.10.3:6969/tasks";
export default function App() {
    const [subject, setSubject] = useState('');
    const [tasks, setTasks] = useState([])
    
    useEffect(()=>{
        (async()=>{
            
            const res = await fetch(api);
            const data = await res.json();
            setTasks(data);
        })();
    },[])
    const add = async () => {

        const res = await fetch(api,{
            method:'POST',
            body: JSON.stringify({subject}),
            headers:{
                'Content-Type':'application/json',
            }
        });
        const data = await res.json();
        // const _id = tasks[tasks.length - 1]._id + 1;
        setTasks([...tasks, data]);
        setSubject("");
    }
    
    return (
        <View>
            <View style={styles.form}>
                <TextInput style={styles.input} value={subject} onChangeText={setSubject} />
                <Button title="Add" onPress={add} />
            </View>
            <View style={styles.list}>
                {tasks.map(item => (
                    <View style={styles.listItem}
                        key={item._id}>
                        <Text style={styles.itemText}>{item.subject}</Text>
                        <Link href={`/edit/${item._id}`} style={{ marginRight: 10 }}>
                            <FontAwesome
                                name="edit"
                                style={{ fontSize: 18, color: 'teal' }}
                            />
                        </Link>
                        <TouchableOpacity onPress={() => {
                            setTasks(tasks.filter(task => {
                                return task._id !== item._id;
                            }))
                        }}>
                            <FontAwesome name="trash" style={{ fontSize: 18, color: "salmon" }}></FontAwesome>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    )
}