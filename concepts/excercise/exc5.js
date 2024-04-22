function performAsyncTask(taskId) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous task
    const randomDelay = Math.random() * 2000;
    setTimeout(() => {
      console.log(
        `Task ${taskId} is completed after ${randomDelay.toFixed(
          2
        )} miliseconds`
      );
      resolve(`Result of Task ${taskId}`);
    }, randomDelay);
  });
}

async function performParallelTask(taskIds) {
  const taskPromises = taskIds.map(performAsyncTask);

  try {
    const results = await Promise.allSettled(taskPromises);
    console.log("All tasks completed successfully.");
    console.log("Results:", results);
  } catch (error) {
    console.log("Error perfroming tasks:", error);
  }
}

const taskIds = [1, 2, 3, 4, 5];
performParallelTask(taskIds);
