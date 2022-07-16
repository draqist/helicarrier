import { gql, useQuery } from '@apollo/client';
import { Box, Button, Center, Flex, Grid, Heading, Image, Spinner, Square, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { queryData } from '../atom';

const Items = ({ }) => {
  const [theValue, setCompleted] = useState(false);
  const [querydata, setData] = useRecoilState(queryData);
  const QUERY = gql` 
  ${theValue ?
      `{allDates (filter: {id: 1}) {
      date
      Statuses{
        type
        title
        date_id
      }
    }
  }}` : `
  {
    allDates {
      date
      Statuses{
        type
        title
        date_id
      }
    }
}`}`
const { data, loading, error } = useQuery(QUERY);
  setData(data)
  if (loading) return (
    <Center h='80vh' w='100%'>  
      <Spinner w='60px' h='60px' color='white'/>
    </Center>
  )
  if (error) return <pre>{error.message}</pre>
  return (
    <>
      <Flex direction={['column', 'row', 'row']} justifyContent={'center'} gap={['6', '', '20']} mt='18px' alignItems='center'>
            <Button onClick={() => setCompleted(true)}>
              Completed
            </Button>
            <Button> Pending </Button>
            <Button> Dispute </Button>
            <Button> Cancelled </Button>
          </Flex>
      <Box py='10px' mt={['20px', '20px', '40px']} textAlign='left'>
        {
          data.allDates.map((data, id) => (
            <>
              <Heading key={id} my='1rem' fontFamily="Oswald" fontWeight='500' fontSize='24px'> Date : {data.date} </Heading>
          <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)', ]} gap={[3,1,4]}>
          {
            data.Statuses.map((r, id) => (
                <Flex key={id} alignItems="center" px='10px'  bgColor='white' color='current' w='' h='80px' gap='4' borderRadius='8px' boxShadow='md'>
                  <Square size='50px'>
                    <Image src='https://i.ibb.co/6m5kzsN/coool.jpg' borderRadius='4px'/>
                  </Square>
                  <Box textAlign='left'>
                  <Text color='gray.800' fontFamily='Oswald' fontSize={['24px','24px','18px','24px','24px']} font> {r.title[0]}</Text>
                  <Text color='gray.800' fontFamily='Oswald' fontSize={['16px', '20px', '14px', '20px', '20px']}> status: {r.type[0]}
                    <Text as='span' ml='36px'> id: { r.date_id } </Text>
                  </Text>
                  </Box>
                  </Flex>
            ))
          }
          </Grid>
            </>
          ))
        }
      </Box>
    </>
  )
} 

export default Items