
const addUser = async (user) => {
    let api_url = "http://localhost:8000/actions/createAccount.php"

    const requestInfos = new Request(
        api_url,
        {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user)
        }
    );
    const request = await fetch(requestInfos);
    const response = await request.json();

    return response;
}

const connectUser = async (user) => {
    let api_url = "http://localhost:8000/actions/connectUser.php"

    const requestInfos = new Request(
        api_url,
        {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user)
        }
    );
    const request = await fetch(requestInfos);
    const response = await request.json();
    
    return response;
}

const inscriptionTournois = async (inscription) => {
    let api_url = "http://localhost:8000/actions/inscriptionTournois.php"

    const requestInfos = new Request(
        api_url,
        {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(inscription)
        }
    );
    const request = await fetch(requestInfos);
    const response = await request.json();
    
    return response;
}

const isInscrit = async (data) => {
    let api_url = "http://localhost:8000/actions/isInscrit.php"

    const requestInfos = new Request(
        api_url,
        {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        }
    );
    const request = await fetch(requestInfos);
    const response = await request.json();
    
    return response;
}

export { addUser, connectUser, inscriptionTournois, isInscrit };
