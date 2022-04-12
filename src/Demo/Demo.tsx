import React from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {Formik} from 'formik';
import {demoValidationSchema} from './DemoValidation';

export const Demo = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.header}>Formik</Text>
    </View>
    <Formik
      validationSchema={demoValidationSchema}
      initialValues={{email: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder={'enter your email'}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
export default Demo;
