import './app-info.css';

const AppInfo = ({increased, emplooyees}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in company N</h1>
            <h2>Total number of employees: {emplooyees}</h2>
            <h2>The prize will be received by: {increased} </h2>
        </div>
    )
}

export default AppInfo;