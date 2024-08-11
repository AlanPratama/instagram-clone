import { View, Text, Pressable } from 'react-native'
import React from 'react'

const PizzaButton = (props) => {
  return (
    <Pressable
        style={{ backgroundColor: !props.isHovered ? "lightblue" : "blue" , padding: 10, borderRadius: 5 }}
        onPress={() => props.setPizzaList([...props.pizzaList, "Pizza"])}
        onHoverIn={() => props.setIsHovered(true)}
        onHoverOut={() => props.setIsHovered(false)}
      >
        <Text style={{ color: "white" }}>Add Pizza</Text>
      </Pressable>
  )
}

export default PizzaButton