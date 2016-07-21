export class Services
{
    constructor( config : any )
    {
        for ( var prop in config )
        {
            this[prop] = config[prop];
        }
    }
}