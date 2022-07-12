import ROSLIB from "roslib";

const ros = new ROSLIB.Ros({});

ros.on('error', (error) => {
  console.error('ROS error!!');
});

ros.on('connection', () => {
  console.log('ROS connection success!!');
  console.log(`connected port : ${process.env.REACT_APP_ROS_WS_PORT}`);
});

ros.on('close', () => {
  console.log('ROS conncetion closed');
});

console.log(process.env);

ros.connect(process.env.REACT_APP_ROS_WS_PORT!!);

export default ros;