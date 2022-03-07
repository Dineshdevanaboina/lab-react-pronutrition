import React, { Component } from 'react';
import Search from "./Search"
class FoodBox extends Component {
  constructor(props)
  {
    super(props)
    this.state ={
      Food:[
      {Name : "Orange", cal : "47", img:"https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg"},
      {Name : "Apple", cal : "52", img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWX07iDArklMuiylVTsGCeBNlMvI4mwaI8w&usqp=CAU"},
      {Name : "Pizza", cal : "266" ,img:"https://i.imgur.com/eTmWoAN.png"},
      {Name : "Banana", cal : "89", img:"https://www.calorieking.com/food-images/us/c03d354f-af0a-4e3c-8c4d-adabe5d2b063.jpg"},
      {Name : "Milk",cal : "42", img:"data:image/jpeg;base64,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"}
    ],
    searchText:"",
    calories_count : 0,
    myFruits : []
  }
  }
  render() {
    return (
      <div>
        <Search data = {this.state}/>
      </div>
    );
  }
}

export default FoodBox;