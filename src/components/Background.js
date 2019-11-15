import React from 'react';

const apiKey = 'baf5fb44732fcb83d8c6d37602e28058642c845445f15ae70c3a1eb7bd80f547';
const url = 'https://api.unsplash.com/photos/random/?client_id=' + apiKey;

class Background extends React.Component {
    
    state = {
        photographer: '',
        imgUrl: '',
    }

    getPhoto = () => {
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                localStorage.setItem('backgroundUrl', json.urls.full);
                this.setState({
                    imgUrl: json.urls.full,
                    photographer: json.user.name,
                });
            })
    }

    componentDidMount() {
        this.getPhoto();
    }

    render() {
        return (
            <img src={this.state.imgUrl} alt={`Background image photographed by ${this.state.photographer}`} />
        )   
    }
}


export default Background;