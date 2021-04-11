import React, { Component } from 'react';

class Search extends Component {

    async componentDidMount() {
        const url = "http://127.0.0.1:5000/wayocean"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    render() {
        return (
            <section>
                <div class="box">
                    Input Two Usernames from Old School Runescape
                    <input class="input" type="text" placeholder="First Username"></input>
                    <input class="input" type="text" placeholder="Second Username"></input>
                    <button class="button">Compare</button>
                </div>
            </section>
        )
    }

    onClick() {
        
    }
}

export default Search
