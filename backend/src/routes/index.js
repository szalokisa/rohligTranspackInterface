import apiRouter from './api.routes';
import docsRouter from './docs.routes';
import dataRouter from './data.routes';
import paramsRouter from './params.routes';
import loginTranspack from './login.routes'
import shipmentRouter from './shipment.routes';
import allShipmentRouter from './allshipment.routes';
import shipmentByIdRouter from './shipmentbyid.routes';

export const api = apiRouter;
export const docs = docsRouter;
export const data = dataRouter;
export const params = paramsRouter;
export const login = loginTranspack;
export const shipment = shipmentRouter;
export const allshipment = allShipmentRouter;
export const shipmentbyid = shipmentByIdRouter;
