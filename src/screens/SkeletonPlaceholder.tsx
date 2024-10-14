import { View } from 'react-native'
import React from 'react';

const SkeletonPlaceholder = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16, gap: 13 }}>
      {Array(6).fill(0).map(() => (
        <View
          style={{ 
            width: '48%',
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 25,
            paddingHorizontal: 10, 
            paddingVertical: 15, 
            gap: 25,
          }}
        >
          <View 
            style={{ 
              width: 100, 
              height: 100,
              borderRadius: 10,
              backgroundColor: '#EDEDED'
            }}
          />
          <View style={{ gap: 5, flexGrow: 1, width: '100%' }}>
            <View style={{ height: 20, borderRadius: 5, backgroundColor: '#EDEDED' }} />
            <View style={{ height: 20, borderRadius: 5, backgroundColor: '#EDEDED' }} />
          </View>
        </View>
      ))}
    </View>
  )
}

export default SkeletonPlaceholder;