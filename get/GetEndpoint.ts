import { Request, Response } from 'express';
import { Constants } from '../../../../app/classes/constants';
import { ResponseCodes } from '../../../../app/enum';
import { BaseEndpoint } from '../BaseEndpoint';

export class GetEndpoint extends BaseEndpoint {

    name = 'Return bot status';

    description = 'Returns if the bot is online or not';

    args = '';

    route = '/';

    method = 'get';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    run(req: Request, res: Response): void {
        if (Constants.api.checkBot()) {
            console.log('ENTROU NESSE');
            res.send({ status: 'online' });
            return;
        }
        // return 500 if bot is offline
        res.status(ResponseCodes.InternalServerError).send({ status: 'offline' });
    }

}
