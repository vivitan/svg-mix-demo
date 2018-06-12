import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/reset.css'
/**
 *
 * @class PageGuide
 * @param {string} title 项目名称
 *
 *
 */

class PageGuide extends Component {
    render() {
        var divStyle = {
            "page_guide_wrap": {"minHeight": "600px","paddingTop":"100px"},
            "pages_title": {"marginTop": "50px", "fontSize": "16px", "textAlign": "center"},
            "pages_list": {"margin": "30px auto", "maxWidth": "800px","listStyleType":"circle"},
            "pages_list_li": {"marginBottom": "10px", "paddingLeft": "15px", "position": "relative","listStyle":"circle"},
            "pages_list_a": {"display": "block", "color": "#444", "wordWrap": "break-word"}
        };
        return (
            <div className="page-guide-wrap" style={divStyle.page_guide_wrap}>
                <h1 className="pages-title" style={divStyle.pages_title}>{this.props.title||"XX"}静态页面导航</h1>
                <ul className="pages-list" style={divStyle.pages_list}>
                    {/*pageRoute*/}
                </ul>

            </div>
        );
    }
}

export default PageGuide;
