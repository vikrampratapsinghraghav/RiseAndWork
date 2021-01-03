import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/AntDesign';

export default function ItemRow(props) {
   
    let icon 
    if(props.data.action=='Withdrew')
    icon=<Icon1 name="arrow-up-outline" size={20} style={styles.iconStyle} />
    else  if(props.data.action=='Trade-Fee')
    icon=<Icon2 name="percent"  size={20} style={styles.iconStyle} />
    else icon=<Icon3 name="shrink" size={20} style={styles.iconStyle} />
    return (
        <View>
            
            <View style={{ flexDirection: 'row',marginTop: 20 }}>
            {
                icon
            }
                
                <View style={{ flexDirection: 'column' ,flex: 1}}>
                    <Text style={styles.textBig}>
                        {
                            props.data.action
                        }
                    </Text>
                    <Text style={styles.textSmall}>
                    {
                            props.data.date
                        }
                    </Text>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.textBig}>
                    {
                            props.data.amount
                        }
                    </Text>
                    <Text style={{...styles.textSmall,alignSelf:'flex-end'}}>
                    {
                            props.data.subAmount
                        }
                    </Text>
                </View>
            </View>

            
        </View>
    )
}
const styles = StyleSheet.create({
    textBig: {
        color:'white',
        fontSize:14,
        
    },
    textSmall: {
        color:'grey',
        fontSize:10,
        
    },
    iconStyle:{color:'grey', marginEnd: 20}
});