import axios from "axios";

async function fetchData(url) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    try {
        const response = await axios.get(url, {headers});
        return response.data;
    } catch (error) {
        return null;
    }
}

async function postData(url, payload, headers) {
    console.log("posting with url: " + url);
    try {
        const response = await axios.post(url, payload, { 
            headers: headers
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export async function getPlanetParams() {
    const url = "https://de-server-d3cth9e3cvc8gjeh.canadacentral-01.azurewebsites.net/planetparams";
    return await fetchData(url);
}

export async function getPlanetFacts() {
    const url = "https://de-server-d3cth9e3cvc8gjeh.canadacentral-01.azurewebsites.net/planetfacts";
    return await fetchData(url);
}

export async function getStarData() {
    const url = "https://de-server-d3cth9e3cvc8gjeh.canadacentral-01.azurewebsites.net/stardata";
    return await fetchData(url);
}

export async function sendImage(payload) {
    const url = "https://de-server-d3cth9e3cvc8gjeh.canadacentral-01.azurewebsites.net/guess";

    const headers = {
        'Content-Type': 'multipart/form-data',
    }

    console.log('here');

    return await postData(url, payload.data, headers);
}