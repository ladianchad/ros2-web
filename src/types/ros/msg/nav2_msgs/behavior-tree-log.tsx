import { RosMessage } from "../msg";
import Time from "../built-in/time";

export default class BehaviorTreeLog extends RosMessage
{
  static readonly type: string = "nav2_msgs/BehaviorTreeLog";

  timestamp: Time = new Time();

  event_log: Array<BehaviorTreeStatusChange> = [];
}

export class BehaviorTreeStatusChange extends RosMessage
{
  static readonly type: string = "nav2_msgs/BehaviorTreeStatusChange";

  timestamp: Time = new Time();
  
  node_name: string = "";

  previous_status: string = "";

  current_status: string = "";
}