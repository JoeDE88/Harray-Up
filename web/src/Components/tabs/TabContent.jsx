export default function({loginData, activeTab}){

    const ActiveComp = loginData[activeTab].component

    return (
        <div className="tab__container">
            <div className="tab__content">
              <ActiveComp/>
            </div>
        </div>
    )
}