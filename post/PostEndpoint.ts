import { Request, Response } from 'express';
import { BaseEndpoint } from '../BaseEndpoint';

export class PostEndpoint extends BaseEndpoint {

    name = 'BasePost';

    description = 'BasePost';

    args = '';

    route = '/';

    method = 'post';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    run(req: Request, res: Response): void {
        throw new Error('Method not implemented.');
    }

}
