import react from "react"
import { useContext} from "react"
import UserContext from "../Context/UserContext"
export default function Login(){
    const [username,setUsername]=react.useState("")
    const [password,setPassword]=react.useState("")
    const {setUser}=useContext(UserContext)
     
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            placeholder="username" 
            value={username} 
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
            />
            <input type="text" 
            placeholder="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}