import {Application} from "../../Application/main";

export class RequestUrl
{

    // url structure
    //      /<serviceName>/<id>(optional)

    serviceName : string;
    id : string = "0000000000000000";

    constructor( baseUrl : string )
    {
        var elements : string[] = baseUrl.split("/");

        // validate url length
        if ( elements.length == 0 || elements.length > 3 )
        {
            throw new Error("Given url is invalid");
        }

        // validate service
        if ( !Application.services.hasOwnProperty(elements[1]) )
        {
            throw new Error(elements[1] + " is not a service");
        }

        this.serviceName = elements[1];

        // validate optional id
        if ( elements.length == 3 )
        {
            if ( elements[2].length != 16 /*TODO: !IdHelper.validate(elements[1])*/)
            {
                throw new Error("Given url is invalid");
            }

            this.id = elements[2];
        }
    }
}