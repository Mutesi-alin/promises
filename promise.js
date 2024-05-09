//q2
const userIds = [1, 2, 3, 4, 5];


function getUserData(id) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const userData = { id, name: `User ${id}` };
      resolve(userData);
    }, 1000); 
  });
}
async function fetchAndLogUserData() {
    for (const userId of userIds) {
      try {
        const userData = await getUserData(userId);
        console.log(`User ID ${userId}: ${userData.name}`);
      } catch (error) {
        console.error(`Error fetching data for User ID ${userId}: ${error.message}`);
      }
    }
  }
  
  fetchAndLogUserData()

  //q1
  async function messaging(message, delayTime) {
    await new Promise(resolve => setTimeout(resolve,delayTime));
    console.log(message);
 }
   
 messaging("You will be successfully.",2000)

 //q3
 async function performTask() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        resolve('Task completed successfully');
        
      }, 1000); 
    });
  }
  
  async function handleTask() {
    try {
      const result = await performTask();
      console.log(`Success: ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  handleTask();

  //q4
  function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
      const randomValue = Math.random(); 
      if (randomValue > failureProbability) {
    
        resolve(`Task "${taskName}" succeeded`);
      } else {
        
        reject(new Error(`Task "${taskName}" failed`));
      }
    });
  }
  
  
  async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        await unstableTask(taskName, failureProbability);
        console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
        return; 
      } catch (error) {
        console.error(`Attempt ${attempt}: ${error.message}`);
      }
    }
    console.log(`All ${retries} attempts failed for task "${taskName}"`);
  }
  
  
  executeWithRetry('Data Processing', 3, 0.3);

