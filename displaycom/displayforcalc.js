import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Alert} from 'react-native';
export default class DisplayForCalc extends React.Component{
    constructor(props){
    super(props);
    this.state = {result : ""} 
    }
    isDotPressed = false
    isOperButtonPressable = false
    isEqualPressed = false
    answerResult = ""
    answerNumber = 0
    arrayNumber = [7,8,9,4,5,6,1,2,3]
    functionPress = (button) => {
    this.functionReloadView()
    if(this.state.result == "0"){
        this.setState({result : button})
    }
    else{
        this.setState((prevState) => ({result : prevState.result + `${button}`}))
        this.isOperButtonPressable = false
        this.isEqualPressed = false
    }
    }
    functionReloadView = () => {
        if(this.state.result === "DIVIDE BY ZERO"){
            this.functionClear()
        }
    }
    functionPlusMinus = (num) => {
        if(this.state.result == 0){
            this.setState((prevState) => ({result : prevState.result}))
        }
        else{
            this.setState((prevState) => ({result : 0 - prevState.result}))
        }
    }
    funcOperations = (oper) => {
        this.functionReloadView()
    if(this.isOperButtonPressable === false){
        this.setState((prevState) => ({result : prevState.result + oper}))
        this.isDotPressed = false
        this.isOperButtonPressable = true
        this.isEqualPressed = true
        }
        else{
            this.setState((prevState) => ({result : prevState.result}))
        }
    }
    calculatedResult = (state) =>  {
        isDotPressed = false;
        if (answerResult == "Infinity"){
            setState({result : "ERROR DIVIDE BY 0"})
        }
        else if(state.result == ""){
            setState({result : ""})
        }
        else if(isOperChange == false){
        }
        else{
            answerResult = eval(state.result).toString()
            console.log(answerResult + "eto")
            setState((state) => ({result : answerResult}))
        }
    }
    functionClear = () => {
        this.setState({result : ""})
        this.isDotPressed = false
    }
    functionDeleteOneChar = () => {
        this.functionReloadView()
        this.setState({result: this.state.result.substring(0,this.state.result.length-1)})
        this.isOperButtonPressable = false
        this.isDotPressed = false
    }
    dotButtonFunc = (dot) => {
        this.functionReloadView()
        if(this.isDotPressed){
            this.setState((prevState) => ({result : prevState.result}))
        }
        else{
            if(this.state.result.length === 0){
            this.setState((prevState) => ({result : prevState.result + "0"+ dot}))
            this.isDotPressed = true
            }
            else{
            this.setState((prevState) => ({result : prevState.result + dot}))
            this.isDotPressed = true
            }
        }
    } 
    render() {
        console.log(this.state.result)
        //console.log(eval("5+(-5)"))
        return (
            <View style={{flex:1}}>
                <View style={{flex:0.3,justifyContent:"flex-end",alignItems:"center",flexDirection:"row",backgroundColor:"#e1e6fc"}}>
                    <Text style={{fontSize:35,color:"#58595d"}}>
                        {this.state.result}
                   </Text>
                </View>
                <View style={{flex:0.7, backgroundColor:"#c1cefd"}}>
                    <View style={{flex:0.15,backgroundColor:"#c1cefd",flexDirection:"row"}}>
                        <TouchableOpacity onPress={() => this.calculatedResult("", this.answerResult)} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:50,color:"teal"}}>
                                =
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.functionPlusMinus()} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center',borderRadius:5}}>
                            <Text style = {{fontSize:50,color:"#c1cefd"}}>
                                +-
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.functionClear("" , this.answerResult)} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style = {{fontSize:50,color:"#c1cefd"}}>
                                C
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.dotButtonFunc(".")} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:50,color:"#c1cefd"}}>
                                .
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.functionDeleteOneChar("" , this.answerResult)} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:50,color:"#c1cefd"}}>
                                Del
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",flex:0.9,backgroundColor:"#11CBD7"}}>
                        <View style={{flex:0.8, backgroundColor:"teal",flexDirection:"row",flexWrap:"wrap"}}>
                            {this.arrayNumber.map((item , index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => this.functionPress(item , this.answerNumber)} style={{backgroundColor:"#94a9fc", justifyContent: 'center', alignItems: 'center', width: "33.3%", height: "33.3%"}}>
                                        <Text style={{fontSize:50,color:"#c1cefd"}}>
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        <View style={{flex:0.2,backgroundColor:"#FA4659"}}>
                        <TouchableOpacity onPress={() => this.funcOperations("+" , this.answerResult)} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:50,color:"teal"}}>
                                +
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.funcOperations("-" , this.answerResult)} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:50,color:"teal"}}>
                                -
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.funcOperations("*" , this.answerResult)} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:50,color:"teal"}}>
                                *
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.funcOperations("/" , this.answerResult)} style={{flex:0.25,backgroundColor:"#c1cefd", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:50,color:"teal"}}>
                                /
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.functionPress("0", this.answerResult)} style={{flex:0.1,backgroundColor:"#c1cefd",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:50,color:"#c1cefd"}}>
                        0
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}