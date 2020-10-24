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
                <img onClick={this.handleClickNonActive} ref={this.bigImage} src={this.props.image}
                     className={'active'}/>
                <figure className='figure'>
                    <img onClick={this.handleClickActive} ref={this.newImage} src={this.props.image}
                         className={'img'}/>
                </figure>
            </React.Fragment>
        );
    }
}


class ImageList extends React.Component {
    constructor() {
        super();
        this.state = {
            images: ['Images/Cat1.jpg', 'Images/Cat2.jpg', 'Images/Cat3.jpg', 'Images/Cat4.jpg']
        }
    }

    render() {
        return (
            <div className='row'>
                {this.state.images.map((item, index) => <Image key={index} image={item}/>)}
            </div>
        );
    }
}

ReactDOM.render(
    <div className='container'>
        <ImageList/>
    </div>, document.getElementById('root'));