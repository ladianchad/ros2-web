import { RosMessage } from "../msg";

export default class Time extends RosMessage
{
  static readonly type: string = "builtin_interfaces/Time";

  sec: number = 0;

  nanosec: number = 0;
}