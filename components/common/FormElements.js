import React, { Component } from 'react';
import { KeyboardAvoidingView, View, TouchableOpacity, Text, TextInput } from 'react-native';
import styled from '@emotion/native'

export const Label = styled.Text`
  margin-bottom: ${({theme}) => theme.sizes.small};
  font-size: ${({theme}) => theme.sizes.large};
  color: ${({theme}) => theme.colors.blueDark};
`

export const TextField = styled.TextInput`
  margin-bottom: ${({theme}) => theme.sizes.normal};
  padding: ${({theme}) => theme.sizes.xsmall} ${({theme}) => theme.sizes.normal};
  border-style: solid;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.silver};
  border-radius: ${({theme}) => theme.sizes.small};
  font-size: ${({theme}) => theme.sizes.large};
  color: ${({theme}) => theme.colors.blueDark};
`
