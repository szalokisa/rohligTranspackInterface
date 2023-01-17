import fetch from 'node-fetch';
// import { json, response } from 'express';
import { loginService, fnParams } from './loginService';
import { U_TRANSPACKIF_Shipment } from "../db/storedProcedures";

let urlSendShipment;

export async function shipmentService(queryParams) {
    let p = await fnParams();
    let jsonParams = JSON.parse(JSON.stringify(p));
    urlSendShipment = jsonParams.data.find((it) => { return it.PARAMCODE === "URL_SHIPMENTS" }).PARAMVALUE
    let jsonToken = await loginService();
    let tokenParams = JSON.parse(jsonToken);
    const authKey = tokenParams.access_token
    const b = await U_TRANSPACKIF_Shipment(queryParams);
    const bodyArray = b.data
    const url = new URL(urlSendShipment);
    let headers = {
        "Authorization": "Bearer #authkey#",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Encoding": "application/json",
    };

    headers = JSON.parse(JSON.stringify(headers).replace("#authkey#", authKey));

    for (var i = 0; i < bodyArray.length; i++) {
        const body = bodyArray[i];

        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json())
            .then(jsonData => console.log('RESULT!!!', jsonData))
            .catch(err => console.error(err));
    }
    return bodyArray;
}
