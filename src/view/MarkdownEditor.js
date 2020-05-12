import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import markdownFile from '../assets/markdown.md';
import Header from './Header';
import './style.scss'

const CONTENT_KEY = 'markdown-editor-content';


export default class MarkdownEditor extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			updates : ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		fetch(markdownFile)
			.then(res =>
				res.text()
			)
			.then(markdown =>
				this.setState({ updates: markdown })
			)
			.catch((error) => console.error(error))
			if(this.state.updates){
				localStorage.setItem(CONTENT_KEY, this.state.updates)
			}
	}

	handleChange(event) {
		this.setState({ updates: event.target.value })
		localStorage.setItem(CONTENT_KEY, this.state.updates)
	}

	render() {
		return (
			<div className="section">
				<div className="header">
					<Header />
				</div>
				<div className="markdown">					
					<div className="row">					
						<div className="col">												
							<div className="editor">
								<div className="editor-header">Markdown</div>
								<textarea className="editorBox" value={this.state.updates} onChange={this.handleChange} />
							</div>
						</div>					
						<div className="col">
							<div className="preview">								
								<div className="preview-header">Preview</div>	
								<div className="previewBox">
									<ReactMarkdown source={this.state.updates} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
