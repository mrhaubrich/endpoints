import { GetEndpoint } from './get/GetEndpoint';

export class Endpoints {

    private static allEndpoints = [
        new GetEndpoint(),
    ];

    public static init(): void {
        this.allEndpoints.forEach((endpoint) => {
            endpoint.init();
        });
    }

}
