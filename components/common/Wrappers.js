import React from 'react'
import styled from '@emotion/native'

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
