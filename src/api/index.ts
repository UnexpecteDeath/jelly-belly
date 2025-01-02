export async function fetchData(url:string) {
        const res = await fetch(`https://jellybellywikiapi.onrender.com/api${url}`);
        if(!res.ok) {
            throw new Error('server error')
        }
        return await res.json();
}
