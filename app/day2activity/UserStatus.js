export default function UserStatus({isLoggedIn}){
    return(
        <div>
           
            {isLoggedIn&&<div>Welcome Back!</div>}
             {!isLoggedIn&&<div> Please Login</div>}
           
        </div>
    )
}  