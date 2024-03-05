import { GetEvent } from "../types";


async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    
    if (!response.ok){
        throw {
            message: "Error from data server is thrown by Runner's side",
            statusText: response.statusText,
            status: response.status,
        }
    }
    return response.json();
}

export  async function getEvents( ) {
    return fetchData("http://localhost:4000/api/runners");
}

export async function getEventDetail(id: string) {
    return fetchData(`http://localhost:4000/api/runners/${id}`);

}

export async function getUpcomingEventsList() {
    return fetchData("http://localhost:4000/api/events/upcoming");
}


// export async function getEventDetails(id : GetEvent) {
//     const url = id ? `http://localhost:4000/api/events/upcoming${id}` : "http://localhost:4000/api/events/upcoming";
//     const response = await fetch(url);
    
//     if(!response.ok){
//         throw {
//             message: "Error fetching data from the server !",
//             statusText: response.statusText,
//             status: response.status,
//         }
//     }
//     const data = await response.json();
//     return data;
// }
