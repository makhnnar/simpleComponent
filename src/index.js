import React, {Component} from 'react'

import Highlight, { defaultProps } from "prism-react-renderer";


export default class PrismComponent extends Component{

    render() {
        const {
            codeToShow,
            langSintax
        } = this.props
        return( <Highlight 
                {...defaultProps} 
                code={codeToShow} 
                language={langSintax}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                    ))}
                </pre>
                )}
        </Highlight>);
      }

}