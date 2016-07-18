export enum RequestMethod
{
    PUT,        // insert
    POST,       // update
    GET,        // read
    DELETE,     // delete
    UNKNOWN     // unknown
}

export function toRequestMethod(method : string) : RequestMethod
{
    switch (method){
        case "PUT":
            return RequestMethod.PUT;
        case "POST":
            return RequestMethod.POST;
        case "GET":
            return RequestMethod.GET;
        case "DELETE":
            return RequestMethod.DELETE;
        default:
            return RequestMethod.UNKNOWN;
    }
}