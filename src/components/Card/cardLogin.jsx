import { useRef } from "react"


export const cardLogin = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const handlerSingIn = () => {
        axios.post("http://localhost:4000/api/user/login", {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        })
        .then((response) => {

            localStorage.setItem("token", response.data.token);

            localStorage.setItem("response", JSON.stringify(response.data));

            let token = JSON.parse(localStorage.getItem("response")).token;

        })
        .catch((err) => err.response.data.message.forEach(message => console.log(message)));
    };

    return (
        <div className="container">
            <div className="formContainer">
                <label htmlFor="" className="inputText">

                </label>

            </div>

        </div>
    )
}