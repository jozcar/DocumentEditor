import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import FormatToolbar from './FormatToolbar';
import BoldMark from './BoldMark';
import ItalicMark from './ItalicMark';
import ListMark from './ListMark';
import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/feather/bold';
import { italic } from 'react-icons-kit/feather/italic';
import { code } from 'react-icons-kit/feather/code';
import { list } from 'react-icons-kit/feather/list';
import { underline } from 'react-icons-kit/feather/underline';
import { header } from 'react-icons-kit/fa/header';
import {strikethrough} from 'react-icons-kit/fa/strikethrough';


import { UnderlineMark } from './UnderlineMark';
import { CodeMark } from './CodeMark';
import HeaderMark from './HeaderMark';
import StrikeMark from './StrikeMark';


const initialValue = Value.fromJSON({
    document:{
        nodes:[
            {
                object: 'block',
                type: 'paragraph',
                nodes:[
                    {
                        object: 'text',
                        leaves:[
                            {
                                text: 'my first paragraph 7',
                            },
                        ],
                    },
                ],
            },
        ],

    },
});

class DocumentEditor extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: initialValue
          }
          this.onChange = this.onChange.bind(this);
          this.onKeyDown = this.onKeyDown.bind(this);
          this.renderMark = this.renderMark.bind(this);
    }

    onChange(e){
    
        this.setState({ value: e.value})
    }
    onKeyDown(e,change){
        switch(e.key){
         case 'b': {
             change.toggleMark('bold')
             return true;
         }
         case 'i': {
             change.toggleMark('italic')
             return true;
         }
         case 'c': {
             change.toggleMark('code');
             return true;
         }
         case 'l':{
             change.toggleMark('list');
             return true;
         }
         case 'u':{
             change.toggleMark('underline');
             return true;
         }
         case 'h': {
             change.toggleMark('header');
         }
         case 's' :{
             change.toggleMark('strike');
         }

         default: {
             return;
         }
     }
     
   }
 
   renderMark(props){
       switch(props.mark.type){
           case  'bold':
           return <BoldMark {...props}/>
           case 'italic':
           return <ItalicMark {...props}/>
           case 'list':
           return <ListMark {...props}/>
           case 'code':
           return <CodeMark {...props}/>
           case 'underline':
           return <UnderlineMark {...props}/>
           case 'header':
           return <HeaderMark {...props}/>
           case 'strike':
           return <StrikeMark {...props}/>

       }
      
   }
   onMarkClick(e,type){
       e.preventDefault();
       const { value } = this.state;
       const change = value.change().toggleMark(type);
       this.onChange(change);
       console.log(type);
   }

    render(){
        return (
            <div>
                <FormatToolbar>
                <button 
                className="tooltip-icon-button"
                onPointerDown  = {(e) => this.onMarkClick(e,'bold')}
                >
                <Icon icon={bold}/>
                </button>
                
                <button 
                className="tooltip-icon-button"
                onPointerDown  = {(e) => this.onMarkClick(e,'italic')}
                >
                <Icon icon={italic}/>
                </button>

                <button 
                className="tooltip-icon-button"
                onPointerDown  = {(e) => this.onMarkClick(e,'code')}
                >
                <Icon icon={code}/>
                </button>

                <button 
                className="tooltip-icon-button"
                onPointerDown  = {(e) => this.onMarkClick(e,'list')}
                >
                <Icon icon={list}/>
                </button>

                   <button 
                className="tooltip-icon-button"
                onPointerDown  = {(e) => this.onMarkClick(e,'underline')}
                >
                <Icon icon={underline}/>
                </button>

                     <button 
                className="tooltip-icon-button"
                onPointerDown  = {(e) => this.onMarkClick(e,'header')}
                >
                <Icon icon={header}/>
                </button>

                  <button 
                className="tooltip-icon-button"
                onPointerDown  = {(e) => this.onMarkClick(e,'strike')}
                >
                <Icon icon={strikethrough}/>
                </button>


                </FormatToolbar>
               <Editor
               placeholder="Enter some plain text.. hECTOR."
               value={this.state.value}
               onChange={this.onChange}
               onKeyDown={this.onKeyDown}
               renderMark={this.renderMark}
               />

            </div>
        )
    }
}

export default DocumentEditor;