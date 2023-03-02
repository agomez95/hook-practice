import { useForm } from "../hooks/useForm"

export const SimpleForm = () => {

    const {username, email, password, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    return (
        <>
            <h2>Simple Form</h2>

            <input
                type="number"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="somemail@here.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-success mt-2" onClick={onResetForm}>Borrar</button>
        </>
    )
}
