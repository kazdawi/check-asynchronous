// task 1
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(value);
    }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

                                            // 

// task 2

async function fetchData() {
    // Simulating an API call with a 2-second delay
    return new Promise(resolve => setTimeout(() => resolve("API Response Data"), 2000));
}

async function awaitCall() {
    const data = await fetchData();
    console.log("Fetched Data:", data);
}

// Example usage
awaitCall();
    

                                                        //   
// task 3

async function fetchDataWithError() {
    // Simulating an API call that might fail
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.5; // 50% chance of failure
            if (shouldFail) {
                reject(new Error("Failed to fetch data from API"));
            } else {
                resolve("API Response Data");
            }
        }, 2000);
    });
}

async function awaitCallWithErrorHandling() {
    try {
        const data = await fetchDataWithError();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Example usage
awaitCallWithErrorHandling();

