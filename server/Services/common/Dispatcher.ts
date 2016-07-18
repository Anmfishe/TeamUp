import {RequestMethod} from "./RequestMethod";

export interface Dispatcher
{
    dispatch(requestMethod : RequestMethod) : Object;
}
