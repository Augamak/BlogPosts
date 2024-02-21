import BackButton from "../components/BackButton";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store/slices/articles";

const Home = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const addOne = () => {
        dispatch(increment())
    }
    const reduceOne = () => {
        dispatch(decrement())
    }

    const addByAmount = (amount) => {
        dispatch(incrementByAmount(amount))
    }

    return (
        <div className="about-home">
            <h1>This is a Home page</h1>
            <h1>{count}</h1>
            <div className="button-block">
                <span className="button" onClick={reduceOne}>-</span>
                <span className="button" onClick={addOne}>+</span>
            </div>
            <div className="button-block">
                <button className="buttonAmount" onClick={() => addByAmount(100)}>Add a lot</button>
            </div>
            <BackButton />
        </div>    
    );
};

export default Home;