import {Train} from "../../types";

export abstract class AbstractTrainsModel {
    public abstract getTrains(name?: string) : Array<Train>;
}