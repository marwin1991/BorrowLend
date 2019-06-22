import React from "react";

class MainPage extends React.Component {
    state = {
        applicationTile: "BorrowLend",
    };

    render() {
        return (
            <div>
                {this.state.applicationTile}
            </div>
        );
    }
}

export default MainPage;
