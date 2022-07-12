import { RosMessage } from "../msg";

export default class Bool extends RosMessage
{
  static readonly type: string = "std_msgs/Bool";

  data: boolean = false;
}