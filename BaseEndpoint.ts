/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { Constants } from '../common/classes/Contants';

export interface IEndpoint {
    name: string;
    description: string;
    args: string;
    route: string;
    method: string;
    run: (req: Request, res: Response) => void;
    init(): void;
}

export class BaseEndpoint implements IEndpoint {

    method = '';

    name = '';

    description = '';

    args = '';

    route = '';

    run(req: Request, res: Response): void {
        throw new Error('Method not implemented.');
    }

    init(): void {
        Constants.api.addEndpoint(this);
    }

}
