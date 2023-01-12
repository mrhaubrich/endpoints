import { Request, Response } from 'express';
import { ResponseCodes } from '../../api/requestCodes';
import { BaseEndpoint } from '../BaseEndpoint';
import { Constants } from '../../common/classes/Constants';

export class GetEndpoint extends BaseEndpoint {

    name = 'Return bot status';

    description = 'Returns if the bot is online or not';

    args = '';

    route = '/';

    method = 'get';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    run(req: Request, res: Response): void {
        if (Constants.api.checkBot()) {
            res.send({ status: 'online' });
            return;
        }
        // return 500 if bot is offline
        res.status(ResponseCodes.InternalServerError).send({ status: 'offline' });
    }

}
