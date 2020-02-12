const {
  InputField,
  Header,
  LampList
} = window.App;

class LampApp extends React.Component {
  render() {
    return (
      <div>
        <div className = "head">    
            <Header
          title="Light a lamp and make a wish!"
        />
            <InputField placeholder="Enter country code (ex: TW)" />
        </div>
        <LampList />
      </div>
    );
  }
}

window.App.LampApp = LampApp;













//from todo app

//const {
//    Header,
//    InputField,
//    LampList
//} = window.App;
//
//const _createLamp = (lamps, title) => {
//    lamps.push({
//        title
//    })
//    return lamps;
//}
//
//const _updateLamp = (lamps, title) => {
//    const target = lamps.find((lamp) => lamp.id === id);
//    if (target) target.title = title;
//    return lamps;
//};
//
//class LampApp extends React.Component {
//    constructor(props, context) {
//        super(props, context);
//        this.state = {
//            lamps: [
//                {title: 'TW'},
//                {title: 'HK'},
//                {title: 'CN'},
//                {title: 'JP'},
//                
//            ]
//        };
//    }
//    updateLampsBy(updateFn) {
//        return (...args) => {
//            this.setState({
//                todos: updateFn(this.state.lamps,...args)
//            });
//        };
//    }
//    render(){
//        const { lamps } = this.state;
//        return (
//            <div>
//                <Header title ="Light a lamp and make a wish" />
//                <InputField
//                    placeholder="Country name"
//                    onSubmitEditing={this.updateLampsBy(_createLamp)}
//                />
//                <LampList
//                    lamps = {lamps}
//                    onUpdateLamp = {this.updateLampsBy(_updateLamp)}
//                />
//            </div>
//        );
//        
//    }
//}
//
//window.App.LampApp = LampApp;