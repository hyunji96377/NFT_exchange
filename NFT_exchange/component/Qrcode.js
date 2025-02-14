import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Qrcode extends React.Component {
    static defaultProps = {
        color: 'black',
        marginLeft: 10,
        marginTop: null,
        onPress: () => null,
    }
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon style={[
                    {color: this.props.color},
                    {marginLeft: this.props.marginLeft},
                    {marginTop: this.props.marginTop},
                ]}name="qr-code-outline" size={26} />
            </TouchableOpacity>

        );
    }
}