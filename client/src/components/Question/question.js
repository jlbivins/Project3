import React from "react";
import "./question.css";

const Question = props => (
    <div className="question-container">
        <div className="question">{props.children}</div>
        <div className="answer-choices">
            {/*clickable images to allow user to choose answer type */}
            <img src="./images/boolean.png" height="100px" id="boolean-img"></img>
            <img src="./images/item-list.png" height="100px" id="list-img"></img>
            <img src="./images/textbox.png" height="100px" id="textbox-img"></img>
        </div>
        <div className="add-delete">
            {/* clickable images for add/delete function */}
            <img src="./images/add.png" height="100px" id="add-img"></img>
            <img src="./images/delete.png" height="100px" id="delete-img"></img>
        </div>
    </div>
);

export default Question;