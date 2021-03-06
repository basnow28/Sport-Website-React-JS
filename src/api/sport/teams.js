import request from "../../utils/request"

//Needed to create a call, 
//Otherwise there is a security error
//We need to introduce spring security to allow call only with a token
const getHeaders = () => {
    return {
        "Access-Control-Allow-Origin": "*"
    }
};

export const getTeams = () => {
    return request(`${process.env.REACT_APP_SERVER}/teams`, {
        method: 'get',
        headers: getHeaders()
    }
    )
}

