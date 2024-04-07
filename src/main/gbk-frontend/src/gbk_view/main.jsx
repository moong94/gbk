import React from 'react'
import ReactDom from 'react-dom'

class MainPage extends React.Component {

    render() {
        return <div className="main">메인 페이지</div>;
    }

}

ReactDom.render(<MainPage/>, document.getElementById('gbkMain'));