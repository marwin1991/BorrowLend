import React from "react";

class Item extends React.Component {
    state = {
        applicationTile: "BorrowLend",
        mode: "borrow", //borrow,lend
        styleMode: "success", // borrow=success lend=danger
        color: "#28a745", // borrow = #28a745 lend = #dc3545
        opositColor: "#dc3545",
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Item;