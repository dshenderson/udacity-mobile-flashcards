import React from 'react'
import styled from '@emotion/native'

export const AppWrapper = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.sizes.large} ${({theme}) => theme.sizes.normal};
  background-color: ${({theme}) => theme.colors.blueLight};
  align-items: center;
  justify-content: flex-start;
`

export const ViewWrapper = styled.View`
  flex: 1;
  width: 320px;
  padding: ${({theme}) => theme.sizes.normal};
  background-color: ${({theme}) => theme.colors.white};
  border-style: solid;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.silver};
  border-radius: ${({theme}) => theme.sizes.small};
  align-items: center;
  justify-content: ${({layout}) => layout === 'compact' ? 'center' : 'space-between'};;
`

export const FormWrapper = styled.View`
  align-items: flex-start;
  justify-content: center;
`

export const CenteringWrapper = styled.View`
  align-items: center;
`

export const HalfScreen = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`
