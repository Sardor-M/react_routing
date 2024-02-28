
export  async function getEvents() {
    const response = await fetch("/api/runners");
   
    if (!response.ok){
        throw {
            message: "Error fetching data from the server!",
            statusText: response.statusText,
            status: response.status,
        }
    }
    const data = await response.json();
    return data;
}

// http://localhost:4000/api/runners








