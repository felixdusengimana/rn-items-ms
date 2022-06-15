import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export default Input = ({label, placeholder, autoComplete=false, autoCapitalize=false, handleChange }) => {
    const [isFocused, setisFocused] = useState(false);

    return (
      <View>
        <Text>{label}</Text>
        <TextInput 
        style={[styles.input, isFocused? styles.inputFocused : null]}
        placeholder={placeholder} 
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        onChange={(e)=>handleChange(e.target.value)}
        onBlur={() => setisFocused(false)}
        onFocus={() => setisFocused(true)}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#d7d6dd',
        borderRadius: 8,
        padding: 15,
        paddingLeft: 16,
        paddintRight: 8,
    },
    inputFocused: {
        borderColor: '#bb23f0',
    }
})