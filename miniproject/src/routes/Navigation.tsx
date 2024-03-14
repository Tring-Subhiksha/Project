import DashboardLayout from "../Dashboard/DashboardLayout"
import HomePage from "../Dashboard/HomePage"
import SignIn from "../SignIn/SignIn"
import Signup from "../SignUp/Signup"
export type navigationPropertiesTypes ={
    path: string,
    component: React.FC
}
type navigationType ={
    public : navigationPropertiesTypes[],
    private: navigationPropertiesTypes[]
}
export const useNavigation=()=>{
    const navigation:navigationType={
        public: [
            {
                path: '/login',
                component: SignIn
            },
            {
                path: '/register',
                component: Signup
            }
        ],
        private: [
            {
                path: '/dashboard',
                component: HomePage
            }
        ]
    }
    return {navigation};
}