import axios from "axios";

const BASE_URL = 'https://ncs-leave-management.herokuapp.com';

const UPDATE_USER_PROFILE_URL = `${BASE_URL}/api/update-user`;
const postRequest = async ({apiUrlEndpoint, data}) => {

    const api = `${BASE_URL}${apiUrlEndpoint}`;

    console.log(api, data);
    try {
        const res = await axios.post(api, data);
        return res;
    } catch (err) {
        console.log('Error in post request: ', err);
        return;
    }
};

const putRequestWithToken = async ({apiUrlEndpoint, data, token}) => {

    const api = `${BASE_URL}${apiUrlEndpoint}`;

    try {
        let res = await axios({
            method: "put",
            url: api,
            data: data,
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
        })
        return res;
    } catch (err) {
        console.log('error in put request: ', err);
        return;
    }
};

const putRequest = async ({apiUrlEndpoint, data}) => {

    const api = `${BASE_URL}${apiUrlEndpoint}`;

    try {
        let res = await axios({
            method: "put",
            url: api,
            data: data,
            headers: {
                "Content-Type": "application/json",
            },
        })
        return res;
    } catch (err) {
        console.log('error in put request: ', err);
        return;
    }
};

const getRequestWithToken = async ({apiUrlEndpoint, token}) => {

    const api = `${BASE_URL}${apiUrlEndpoint}`;

    try {
        let res = await axios({
            method: 'get',
            url: api,
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
        })
        return res;
    } catch (err) {
        console.log('error in put request: ', err);
        return;
    }
};

const getRequest = async ({apiUrlEndpoint}) => {

    const api = `${BASE_URL}${apiUrlEndpoint}`;

    try {
        let res = await axios({
            method: 'get',
            url: api,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return res;
    } catch (err) {
        console.log('error in put request: ', err);
        return;
    }
};

const deleteRequestWithToken = async ({apiUrlEndpoint, id, token}) => {

    const api = `${BASE_URL}${apiUrlEndpoint}/${id}`;
    try {
        let res = await axios({
            method: 'delete',
            url: api,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
        console.log(res);
        return res;
    } catch (err) {
        console.log('error in delete request: ', err);
        return;
    }
    
}

export {
    postRequest,
    putRequestWithToken,
    getRequestWithToken,
    getRequest,
    deleteRequestWithToken,
    putRequest,
};
