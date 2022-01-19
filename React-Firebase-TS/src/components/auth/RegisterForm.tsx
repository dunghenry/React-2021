import { FormEvent, useState } from "react";
import { validateRegister } from "utils/validate";
import { toast } from 'react-toastify';
import Errors from "components/global/Errors";
// import { registerApi } from "redux/actions/authActions";
import { useAppDispatch } from "redux/hooks";
import { authRegister } from "redux/slice/authSlice";
const RegisterForm = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[cf_password, setCfPassword] = useState("");
    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const user = {name, password, email, cf_password}
        const result = validateRegister(user);
        console.log(result);    
        if(result.errLength > 0)
            return toast.error(()=><Errors errors={result.errMsg}/>);
        dispatch(authRegister(user))
        setTimeout(()=>{
            setName('');
            setPassword('');
            setEmail('');
            setCfPassword('');
        }, 1700)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label htmlFor="name" className="font-bold">Username :</label>
                <input type="text" id="name" placeholder="" className="w-full p-1.5 border mt-2" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="font-bold">Email :</label>
                <input type="email" id="email" placeholder="" className="w-full p-1.5 border mt-2" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="font-bold">Password :</label>
                <input type="password" id="password" placeholder="" className="w-full p-1.5 border mt-2" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <div className="mb-2">
                <label htmlFor="cf_password" className="font-bold">Confirm Password :</label>
                <input type="password" id="cf_password" placeholder="" className="w-full p-1.5 border mt-2" value={cf_password} onChange={(e)=> setCfPassword(e.target.value)}/>
            </div>

            <button type="submit" className="w-full rounded-md p-3 my-2 font-semibold tracking-wider bg-blue-600 text-white uppercase border-2 hover:bg-purple-900">Register</button>


        </form>
    )
}

export default RegisterForm;
