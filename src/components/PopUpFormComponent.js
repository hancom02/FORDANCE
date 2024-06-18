import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const formatDate = _date => {
  const date = new Date(_date) || new Date();
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;
};

const PopUpFormComponent = props => {
  const {handleSubmit, offlinelessons, handleCloseModal} = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [isJoinOff, setIsJoinOff] = useState(offlinelessons.isJoinOff);

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = number => {
    const phoneRegex = /^\d{9,10}$/; // Check if phone number is 9 or 10 digits
    return phoneRegex.test(number);
  };

  useEffect(() => {
    if (offlinelessons) setIsJoinOff(offlinelessons.isJoinOff);
  }, [JSON.stringify(offlinelessons)]);

  const handleEmailChange = email => {
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = phone => {
    setPhoneNumber(phone);
    if (!validatePhoneNumber(phone)) {
      setPhoneError('Phone number must be 9 or 10 digits.');
    } else {
      setPhoneError('');
    }
  };

  const onSubmit = () => {
    // if (emailError || phoneError || !name || !email || !phoneNumber) {
    //     if (!name) alert('Name is required.');
    //     if (!email) alert('Email is required.');
    //     if (!phoneNumber) alert('Phone number is required.');
    //     return;
    // }
    setIsJoinOff(true);
    handleSubmit({name, email, phoneNumber: `+84${phoneNumber}`});
  };

  return (
    <SafeAreaView style={styles.popUpFormContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>REGISTER FOR A OFFLINE CLASS</Text>
        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
          <Ionicons name="close-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flexGrow: 1}}>
        <Text style={styles.sectionTitle}>CLASS INFORMATION</Text>
        {/* <Text style={styles.infoNameText}>{offlinelessons?.title}</Text> */}
        <Text style={styles.infoInstructorText}>
          {offlinelessons?.instructor.name}
        </Text>
        <View style={styles.rowContainer}>
          <View style={{flexDirection: 'row', alignItems: ''}}>
            <Ionicons name="location" size={20} color="black" />
            <Text style={styles.infoText}>{offlinelessons?.address}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginRight: 10, marginTop: 10}}>
          <Ionicons name="calendar-number-outline" size={20} color="black" />
          <Text style={styles.infoText}>
            {formatDate(offlinelessons?.startDate)}
            {offlinelessons?.endDate
              ? ` - ${formatDate(offlinelessons?.endDate)}`
              : ''}
          </Text>
        </View>
        {/* <Text style={styles.sectionTitle}>YOUR INFORMATION</Text>
                <TextInput
                    style={styles.popUpFormInput}
                    placeholder="Your Name"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.sectionTitle}>Email</Text>
                <TextInput
                    style={styles.popUpFormInput}
                    placeholder="Email"
                    value={email}
                    onChangeText={handleEmailChange}
                    keyboardType="email-address"
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                <Text style={styles.sectionTitle}>Phone Number</Text>
                <View style={styles.phoneContainer}>
                    <Text style={styles.countryCodeText}>+84</Text>
                    <TextInput
                        style={[styles.popUpFormInput, styles.phoneNumberInput]}
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChangeText={handlePhoneChange}
                        keyboardType="phone-pad"
                    />
                </View>
                {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null} */}
      </ScrollView>
      {isJoinOff ? null : (
        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default PopUpFormComponent;

const styles = StyleSheet.create({
  popUpFormContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 30,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#888',
  },
  popUpFormTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },
  infoText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  infoNameText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  infoInstructorText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginVertical: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  popUpFormInput: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: 40, // Ensure the container has the same height as the input
  },
  countryCodeText: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10, // Adjust padding to match input height
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    height: '100%',
    textAlignVertical: 'center',
  },
  phoneNumberInput: {
    flex: 1,
    marginTop: 10,
    height: '100%',
  },
});
