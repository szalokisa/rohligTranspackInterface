import { shipmentByIdService } from '../services';

export const shipmentByIdController = {
    async getshipmentbyid(req, res, next) {
        let result;

        try {
            result = await shipmentByIdService(req.headers);
            res.status(200).json(result);
        } catch (error) {
            console.log('++++11 shipmentByIdController: ', error);
            next(error);
        }
    },  
}
