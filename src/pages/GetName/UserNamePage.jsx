import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo"

const UserNamePage=()=>{
    return(
        <div>
            <BackgroundVideo/>
            <div>
                <p>Every special story begins with a name.</p>
                <p>Tell me yours, so I can make this moment even more special. ✨</p>
            </div>
            <form action="">
                <input type="text" placeholder="Enter your beautiful name..."/>
            </form>
        </div>
    )
}
export default UserNamePage