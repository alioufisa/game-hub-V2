import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'


interface Props {
    children: ReactNode
}

const GameCardComponent = ({ children }: Props ) => {
  return (
    <Box width='280px' borderRadius={10} overflow='hidden'>
        { children}
    </Box>
  )
}

export default GameCardComponent