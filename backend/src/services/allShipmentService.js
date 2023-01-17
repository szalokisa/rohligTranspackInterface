import fetch from 'node-fetch';
import { loginService, fnParams } from './loginService';

let urlSendShipment;

export async function allShipmentService(queryParams) {
    let p = await fnParams();
    let jsonParams = JSON.parse(JSON.stringify(p));
    urlSendShipment = jsonParams.data.find((it) => { return it.PARAMCODE === "URL_SHIPMENTS" }).PARAMVALUE
    let jsonToken = await loginService();
    let tokenParams = JSON.parse(jsonToken);
    const authKey = tokenParams.access_token
    const url = new URL(urlSendShipment);

    const params = {
        "filter[created][from]": "2022-05-01",
        "filter[created][to]": "2022-05-05",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    let headers = {
        "Authorization": "Bearer #authkey#",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Encoding": "application/json",
    };

    headers = JSON.parse(JSON.stringify(headers).replace("#authkey#", authKey));

    const response = await fetch(url, {
        method: "GET",
        headers,
    })

    const jsonData = await response.json();
    return JSON.stringify(jsonData);

}
