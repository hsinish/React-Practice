const { LampItem } = window.App;

class LampList extends React.Component {
    render(){
        return (
            <div>
                <div className = "lamp TW">
                    <div>TW</div>
                    <img src = "img/lamp.png" />
                </div>
                <div className = "lamp HK">
                    <div>HK</div>
                    <img src = "img/lamp.png" />
                </div>
                <div className = "lamp CN">
                    <div>CN</div>
                    <img src = "img/lamp.png" />
                </div>
            
            
                <div className = "lamp">
                    <LampItem title = "Ya" />
                </div>
            
            </div>
           
        );
    }
}

window.App.LampList = LampList;

