import React from 'react';
import styled from '@emotion/native'

const BaseButton = styled.TouchableOpacity`
  margin-bottom: ${({theme}) => theme.sizes.normal};
  padding: ${({theme}) => theme.sizes.small} ${({theme}) => theme.sizes.normal};
  border-style: solid;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.silver};
  border-radius: ${({theme}) => theme.sizes.small};
`

const PrimaryButton = styled(BaseButton)`
  background-color: ${({theme}) => theme.colors.green}
`

const SecondaryButton = styled(BaseButton)`
  background-color: ${({theme}) => theme.colors.purple}
`

const TertiaryButton = styled(BaseButton)`
  background-color: ${({theme}) => theme.colors.red}
`

const AltButton = styled.TouchableOpacity`
  margin: ${({theme}) => theme.sizes.normal} auto;
`

const BtnTxt = styled.Text`
  font-size: ${({theme, type}) => type === 'dele' ? theme.sizes.normal : theme.sizes.large};
  color: ${({theme, type}) => type === 'dele' ? theme.colors.red : theme.colors.white};
  text-decoration: ${({type}) => type === 'dele' ? 'underline' : 'none'};
`

export const PrimaryBtn = props => (
  <PrimaryButton {...props}>
    <BtnTxt>{props.children}</BtnTxt>
  </PrimaryButton>
)

export const SecondaryBtn = props => (
  <SecondaryButton {...props}>
    <BtnTxt>{props.children}</BtnTxt>
  </SecondaryButton>
)

export const TertiaryBtn = props => (
  <TertiaryButton {...props}>
    <BtnTxt>{props.children}</BtnTxt>
  </TertiaryButton>
)

export const AltBtn = props => (
  <AltButton {...props}>
    <BtnTxt type="dele">{props.children}</BtnTxt>
  </AltButton>
)
