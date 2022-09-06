import axios from 'axios';

export default axios.create(
    {
        baseURL:'http://18.217.229.72:8400/api/v1/',
        headers:
              { "Authorization": `Bearer ${localStorage.getItem("token")}` }
          
    }
);