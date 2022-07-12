import { Message } from "roslib";

export class RosMessage extends Message
{
  static readonly type: string = "";

  constructor(values: any = undefined)
  {
    super(values)
  }
}