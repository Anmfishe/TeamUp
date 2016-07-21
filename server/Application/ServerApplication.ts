import {Services} from "./Services";

// contains static configuration information
export class ServerApplication
{
    services : Services;

    constructor()
    {
        this.services = new Services( require("../Services/config.json") );
    }
}