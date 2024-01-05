export default async (query:string,language:string) => {
    try {
        const response  = await fetch(`
        https://api2.helperplace.com/mobile/job/FindJob${query}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Lang: language,
            },
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}