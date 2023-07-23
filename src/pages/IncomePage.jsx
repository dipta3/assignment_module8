import { useState } from "react";
import Menu from "../components/Menu";


// eslint-disable-next-line react/prop-types
const IncomePage = ({ addIncome }) => {
    const [income, setIncome] = useState('');

    const handleIncomeChange = (event) => {
        setIncome(parseFloat(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addIncome(income);
        setIncome('');
    };
    return (
        <div>
            <Menu />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">ADD YOUR INCOME</h1>
                        <p className="py-6"></p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter Income</span>
                                    </label>
                                    <input type="number"
                                        value={income}
                                        onChange={handleIncomeChange} placeholder="Enter Your Income" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-warning">Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default IncomePage;