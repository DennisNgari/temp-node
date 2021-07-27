const os = require("os");

//Info about current user.
const user = os.userInfo();
console.log(user);

//method returns the systems uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.totalmem(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
