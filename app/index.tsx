import { Ionicons } from "@expo/vector-icons";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { TextInput } from "react-native-gesture-handler";



function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>



      {/* Top frame */}
     
      <View style={{ flex: 0.3, backgroundColor: 'skyblue', justifyContent: 'center' }}>


        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'navy',
          textAlign: 'center',
          lineHeight: 50
        }}>
          EXPENSE{'\n'}   TRACKER
        </Text>
      </View>

      {/* input fields */}
      <View style={{ flex: 0.4, backgroundColor: 'lightgrey', padding: 20, justifyContent: 'center' }}>


        {/* Username */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 15,
          padding: 10,
          marginBottom: 20,
          backgroundColor: 'white'
        }}>

          <Ionicons name="person-outline" size={24} color="black" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Username"
            style={{
              flex: 1,
              fontSize: 18
            }}
          />
        </View>


        {/* Password */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 5,
          borderColor: 'black',
          borderRadius: 20,
          padding: 10,
          backgroundColor: 'white'
        }}>


          <Ionicons name="lock-closed-outline" size={24} color="black" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={{
              flex: 1,
              fontSize: 18
            }}
          />
        </View>
      </View>



      {/* login button */}
      <View style={{ flex: 0.3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'navy',
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 25
          }}
          onPress={() => alert('Logging in...')}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      </View>
{/* some credintial issue resolved*/}
    </View>
  );
}

export default App;