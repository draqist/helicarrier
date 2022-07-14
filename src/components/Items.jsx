import { Box, Center, Flex, Grid, Heading, Image, Square, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const Items = ({ res }) => {
  const [data, setData] = useState()
  const {date,  Statuses} = res
  return (
    <>
      <Box py='10px' mt={['20px', '20px', '40px']} textAlign='left'>
        <Heading my='1rem' fontFamily="Oswald" fontWeight='500' fontSize='24px'> Date : {date} </Heading>
        <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)', ]} gap={[3,1,4]}>
        {
          Statuses.map((r, id) => (
              <Flex key={id} alignItems="center" px='10px'  bgColor='white' color='current' w='' h='80px' gap='4' borderRadius='8px' boxShadow='md'>
                <Square size='50px'>
                  <Image src='https://i.ibb.co/6m5kzsN/coool.jpg' borderRadius='4px'/>
                </Square>
                <Box textAlign='left'>
                <Text color='gray.800' fontFamily='Oswald' fontSize={['24px','24px','18px','24px','24px']} font> {r.title}</Text>
                <Text color='gray.800' fontFamily='Oswald' fontSize={['16px', '20px', '14px', '20px', '20px']}> status: {r.type}
                  <Text as='span'> id: { r.date_id } </Text>
                </Text>
                </Box>
                </Flex>
          ))
        }
        </Grid>
      </Box>
    </>
  )
} 

export default Items