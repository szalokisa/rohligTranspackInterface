import fetch from 'node-fetch';
import { loginService, fnParams } from './loginService';

let urlSendShipment;

export async function shipmentByIdService(queryParams) {
    let p = await fnParams();
    let jsonParams = JSON.parse(JSON.stringify(p));
    urlSendShipment = jsonParams.data.find((it) => { return it.PARAMCODE === "URL_SHIPMENTS" }).PARAMVALUE
    let jsonToken = await loginService();
    let tokenParams = JSON.parse(jsonToken);
    const authKey = tokenParams.access_token
    urlSendShipment = urlSendShipment.concat("/", queryParams.shipment_id);
    const url = new URL(urlSendShipment);

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
    console.log("++++31: ", JSON.stringify(jsonData));
    return JSON.stringify(jsonData);

}
