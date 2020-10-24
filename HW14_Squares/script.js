class Image extends React.Component {
    constructor(props) {
        super(props);
        this.newImage = React.createRef();
        this.bigImage = React.createRef();
    }

    handleClickNonActive = () => {
        this.bigImage.current.style.display = 'none';
    }

    handleClickActive = () => {
        this.bigImage.current.style.display = 'block';
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.handleClickNonActive} ref={this.bigImage} className={'active ' + this.props.image}/>
                <div onClick={this.handleClickActive} ref={this.newImage} className={'block ' + this.props.image}/>
            </React.Fragment>
        );
    }
}


class ImageList extends React.Component {
    constructor() {
        super();
        this.state = {
            classNames: ['red', 'blue', 'yellow', 'green']
        }
    }

    render() {
        return (
            <div className='row'>
                {this.state.classNames.map((item, index) => <Image key={index} image={item}/>)}
            </div>
        );
    }
}

ReactDOM.render(
    <div className='container'>
        <ImageList/>
    </div>, document.getElementById('root'));