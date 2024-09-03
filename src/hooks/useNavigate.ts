import { useNavigate } from "react-router-dom";

const Navigate = (path: string) => {
    const navigate = useNavigate();
    return navigate;
};
export default Navigate