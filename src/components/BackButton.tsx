import { useNavigate } from "react-router-dom"

export const BackButton = () => {
    const navigate = useNavigate()
    const handleClick = () => navigate(-1)
    return <button className="uppercase border-white border-2 rounded w-fit py-2 px-5 hover:text-yellow-300 hover:border-yellow-300 ease-in-out duration-150" onClick={handleClick}>Back</button>
}