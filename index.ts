import { IEndpoint } from './BaseEndpoint';
import { GetEndpoint } from './get/GetEndpoint';

export class Endpoints {

    private static allEndpoints: IEndpoint[] = [
        new GetEndpoint(),
    ];

    public static init(): void {
        this.allEndpoints.forEach((endpoint) => {
            endpoint.init();
        });
    }

    public static addEndpoint(endpoint: IEndpoint): void {
        this.allEndpoints.push(endpoint);
    }

    public static addEndpoints(endpoints: IEndpoint[]): void {
        this.allEndpoints = this.allEndpoints.concat(endpoints);
    }

}
