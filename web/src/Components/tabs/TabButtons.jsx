export default function({loginData, setActiveTab, activeTab}){

    return (
        <div className="tab__header">
            {loginData.map((item, index) => (
                <li className={`${index === activeTab && "active"} tab__button`} key={item.name} onClick={()=> setActiveTab(index)}>
                    {item.name}
                </li>
            ))}
        </div>
    )
}