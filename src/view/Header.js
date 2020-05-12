import React, { Component } from 'react';
import Blob from 'blob'

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	saveAsMd () {
		const element = document.createElement('a');
		const file = new Blob([localStorage.getItem('markdown-editor-content')], {type: 'text/plain'});
		element.href = global.URL.createObjectURL(file);
		element.download = "markdown.md";
		document.body.appendChild(element);
		element.click();
	}

	render() {
		return (
			<div className="row">
				<div className="col"><a className="title">Markdown Editor</a></div>
				<div className="col"><button onClick={this.saveAsMd} className="btn right">Save as Markdown</button></div>
			</div>
		);
	}
}
