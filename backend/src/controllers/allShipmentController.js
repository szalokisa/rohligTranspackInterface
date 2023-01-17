import { allShipmentService } from '../services/allShipmentService';

export const allShipmentController = {
    async getallshipment(req, res, next) {
        let result;

        try {
            result = await allShipmentService(req.headers);
            res.status(200).json(result);
        } catch (error) {
            console.log('++++11 allShipmentController: ', error);
            next(error);
        }
    },  
}
