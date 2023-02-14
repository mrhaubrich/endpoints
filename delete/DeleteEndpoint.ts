import { Request, Response } from 'express';
import { BaseEndpoint } from '../BaseEndpoint';

export class DeleteEndpoint extends BaseEndpoint {

    name = 'BaseDelete';

    description = 'BaseDelete';

    args = '';

    route = '/';

    method = 'delete';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    run(req: Request, res: Response): void {
        throw new Error('Method not implemented.');
    }

}
