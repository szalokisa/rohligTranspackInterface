import { shipmentService } from '../services';

export const shipmentController = {
    async getshipment(req, res, next) {
        let result;

        try {
            result = await shipmentService(req.headers);
            res.status(200).json(result);
        } catch (error) {
            console.log('++++11 shipmentController: ', error);
            next(error);
        }
    },  
}
