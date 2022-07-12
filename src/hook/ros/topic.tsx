import ros from "../../config/ros-config";
import ROSLIB from "roslib";
import { useEffect, useState } from "react";
import { RosMessage } from "../../types/ros/msg/msg";

export function useSubscription<M extends RosMessage>(topic: string, type: string, callback: (message: M) => void){
  
  const [topicObj,] = useState(new ROSLIB.Topic({
    ros: ros,
    name: topic,
    messageType: type
  }));

  useEffect(() => {
    topicObj.subscribe((message: ROSLIB.Message) => {
      callback(message as M);
    });
  }, [callback, topicObj]);
}

export const usePublisher = (topic: string, type: string) => {

  const [topicObj,] = useState(new ROSLIB.Topic({
    ros: ros,
    name: topic,
    messageType: type
  }));
  
  return topicObj;
}