
class LampItem extends React.Component {
    render(){
        const {title} = this.props;
        return (
            <div>
                <div>{title}</div>
                <img src = "img/lamp.png" />
            </div>
        );
    }
}

window.App.LampItem = LampItem;