import React, { Component } from "react";
import UserLinks from "../UserLinks";
import "./ToolbarActions.scss";

class Toolbar extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
            }`;
        script.async = true;
        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script2.async = true;
        document.body.appendChild(script2);
    }

    render() {
        const { config } = this.props;
        return (
            <div className="toolbar-actions">
                <div className="userlinks-container">
                    <UserLinks config={config} />
                </div>
                <div id="google_translate_element" />
            </div>
        );
    }
}

export default Toolbar;
