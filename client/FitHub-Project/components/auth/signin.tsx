
import React, { useState } from 'react';
import { View, Image, Text, TextInput,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import { LogBox } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import * as Yup from 'yup';
LogBox.ignoreLogs(['Remote debugger']);

// import icon from 'react-native-vector-icons';
export default function Login({ navigation }) {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  useKeepAwake();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').label('Name'),
    
    email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required')
      .label('Email'),

    password: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required')
      .label('Password'),
  });
 


  return (
    <Formik
      initialValues={{ email: '', password: "" }}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <View style={tw`w-full bg-black h-full`}>
            <ImageBackground style={tw`w-full h-full`} source={require("../assets/back.jpg")}>

              {/* <ImageBackground source={require('../assets/back.jpg')} /> */}
              <View style={tw` bg-black bg-opacity-60 h-4/5 pt-20`}>
                <View style={tw` h-16  w-4/5 ml-8`} >
                  <Image style={tw` w-full h-full pl-2 `} source={require("../assets/logo.png")} />
                </View>

                <View style={tw` items-center `}>

                  <Text style={tw` pt-16 text-white font-bold text-2xl`} >Log In to FitHub </Text>
                </View>


                <View style={tw` mt-10 w-4/5 ml-8 flex `}>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={tw` h-10 rounded bg-white p-2`}
                    placeholder="foulen@gmail.com"
                    autoCompleteType="email"
                    keyboardType="email-address"
                  />
                  {errors.email && touched.email && (
                    <Text style={{ color: 'red' }}>{errors.email}</Text>
                  )}
                  <TextInput
                    style={tw`mt-4 rounded h-10 bg-white p-2 `}
                    secureTextEntry={true}
                    placeholder="* * * * * * * *"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <Text style={{ color: 'red' }}>{errors.password}</Text>
                  )}
                </View>



                <View style={tw`  pt-4 w-4/5 ml-8`}>
                  <TouchableOpacity
                    style={Styles.button}
                  ><Text style={Styles.text}>Sign In</Text></TouchableOpacity>
                </View>
                <View style={tw`items-center`}>
                  <Text style={tw`text-white items-center mt-8 `}>Or</Text>
                </View>

                <View style={tw`border border-white items-center bg-white mt-8 rounded w-4/5 ml-8 h-8`}>
                  <View style={tw`flex flex-row`} >
                    <Image style={tw`mt-1.5 w-4 pl-2 h-4`} source={require("../assets/gogleh.png")} />
                    <Text style={tw`mt-1 pl-6 font-bold text-black`}>Connect with GOOGLE</Text>
                  </View>

                </View>
                <View style={tw`h-10 mt-6 items-center`}>
                  <Text style={tw`text-white  pl-6 pt-4`}>
                    Don't have an account ? <Text style={tw`text-blue-400 underline`}>Register</Text>
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      )}
    </Formik>
  )
};
const Styles = StyleSheet.create({
  button: {
    backgroundColor: "#e7ff19",
    alignItems: "center",
    padding: 10,

  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,


  }
})

