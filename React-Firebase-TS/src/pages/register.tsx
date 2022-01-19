import RegisterForm from "components/auth/RegisterForm";
import { BigLoading } from "components/global/Loading";
import { Link } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

const Register = () => {
    const {loading} = useAppSelector(state => state.auth)
    return (
        <div className="flex items-center justify-center min-h-[calc(10vh-6rem)]">
            <div className="container max-w-md p-5 shadow">
                <h2 className="my-3 text-2xl font-semibold tracking-widest text-center uppercase">
                    REGISTER
                </h2>
                <RegisterForm/>
                <div className="text-right">
                    You already have an account ?<Link to="/login" className="text-blue-500 underline hover:underline"> Login</Link>
                </div>
            </div>
            {
                loading && <BigLoading/>
            }
           
        </div>
    )
}

export default Register;
