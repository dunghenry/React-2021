import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { IRegister } from 'types';
import { auth } from '../../Firebase';

export const registerApi = async (user: IRegister) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, user.email, user.password);
        await updateProfile(res.user,{
            displayName: user.name
        })
        return res.user;
    } catch (error : any) {
        return toast.error(error.message)
    }
}