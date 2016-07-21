import {RequestMethod} from "./RequestMethod";

export interface IDispatcher
{
    dispatch(requestMethod : RequestMethod) : Object;
}
