import axios from "axios";
import Cookies from "js-cookie";

export async function uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file)
    console.log(formData + "dupa")
    return await
    //     axios.post(`http://localhost:8080/api/file/upload`,file,
    // ({
    //     // file: file,
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //         Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
    //     }
    // }))
    //     .catch(error => {
    //         return error
    //     })

    axios.post('http://localhost:8080/api/file/upload', formData, {
        headers: {
            Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`,
            'Content-Type': 'multipart/form-data', // Set the content type header to multipart/form-data

        }
    }).then(response => {
        console.log(response.data); // Handle response from the server
    }).catch(error => {
        console.error(error); // Handle error if any
    });
}