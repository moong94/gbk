import axios from "axios";

const handleGBKFutureResultData = (gbkFutureData) =>{
    axios.post('/future/result',gbkFutureData)
    .then(response =>{
        console.log("result : response.data")
    })
    .catch(error => {
        console.error(error);
    });
  }

  export default handleGBKFutureResultData;