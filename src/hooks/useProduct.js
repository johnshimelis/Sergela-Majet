import api from '../adapter/base'
import { useQuery } from 'react-query'
const product=(id)=>{return(api.get(`products/${id}`))}

export const useProduct=(id)=>{
     return useQuery(['product',id],()=>product(id),{
        select:(data)=>{
            const imagepaths=data.data.data.image_paths
            return imagepaths;
        }
     })
}