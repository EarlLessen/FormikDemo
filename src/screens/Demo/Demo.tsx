import React from 'react';
import {styles} from './styles';
import {Button, SafeAreaView, TextInput, View, Text} from 'react-native';
import {Formik} from 'formik';
import {demoValidationSchema} from './DemoValidation';

export const Demo = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Formik</Text>
    </View>
    <Formik
      validationSchema={demoValidationSchema}
      initialValues={{name: '', email: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.form}>
          <Text style={styles.textLabel}>username</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'enter your name'}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          <Text style={styles.textLabel}>email</Text>
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
export default Demo;
