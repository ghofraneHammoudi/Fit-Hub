import React, { useState } from "react";
import { TouchableOpacity, TextInput, Text, View, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import axios from "axios";


export const createEvent = () => {
  function handelSubmit ()  {
    console.log(EventName,Adress,Description,date,user)
    axios.post('http://localhost:5000/events',{
        eventName:EventName,
        adress:Adress,
        description:Description,
        date:date,
        created_by:user,
        id:id,
        user_id:user_id,
        created_at:created_at,
        created_by_id:created_by_id,
        imageurl:imageurl
      }
      ).then((res)=>
      console.log(res.data))
      .catch((err)=>console.log(err))
    }
  let [id, setid] = useState(0)
  let [EventName, setEventName] = useState('')
  let [user_id, setuser_id] = useState(0)
  let [Adress, setAdress] = useState('')
  let [Description, setDescription] = useState('')
  let [date, setDate] = useState('')
  let [user, setuser] = useState('')
  let [created_at,setcreated_at] = useState('')
  let [created_by_id,setcreated_by_id]= useState(0)
  let [imageurl,setimageurl]=useState('')
  return (
    <View style={tw` mt-10 w-4/5 ml-8 flex `}>
      <Text>event Name</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="eventName"
        value={EventName}
        onChangeText={setEventName}
      />
        <Text>user_id</Text>
      <Text>adress</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="adress"
        value={Adress}
        onChangeText={setAdress}
      />
      <Text>description</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="description"
        value={Description}
        onChangeText={setDescription}
      />
      <Text>date</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="date"
        value={date}
        onChangeText={setDate}
      />
      <Text>user Name</Text>
      <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
        placeholder="user Name"
        value={user}
        onChangeText={setuser}
      />
      <Button onPress={handelSubmit} title="Submit" />
    </View>
  );
};