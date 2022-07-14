import { gql, useQuery } from '@apollo/client';

const useQUERY = ({date_id}) => {
  const QUERY = gql`
  {
    allStatuses (filter: {date_id: date_id}){
      type 
      Date{
        date
      }
    }
  }
  `
  const { data, error, loading} = useQuery(QUERY)
  return data
}

export default useQUERY