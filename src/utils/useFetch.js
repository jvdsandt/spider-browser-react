import {useState, useEffect} from "react";

const rest_headers = new Headers({
    "Content-Type": "application/json"
});

//const baseUrl = "https://www.cloudctrl.com";
const baseUrl = "http://localhost:8080"

function spiderFetch(path, setter) {
    fetch(baseUrl + path, {
        crossDomain: true,
        method: "GET",
        rest_headers
    })
        .then(res => res.json())
        .then(data => setter(data));
}

function useFetch(path) {
    const url = baseUrl + path;
    const [data, setDataState] = useState(null);
    const [loading, setLoadingState] = useState(true);
    useEffect(
        () => {
            setLoadingState(true);
            fetch(url)
                .then(j => j.json())
                .then(data => {
                    setDataState(data);
                    setLoadingState(false);
                });
        },
        [url]
    );
    return {data, loading};
}

export { spiderFetch, useFetch }