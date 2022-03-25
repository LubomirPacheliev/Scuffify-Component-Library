/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/react';

type ListData = HTMLElement | string | (HTMLElement & string )[];

// type can be either router or listing
type Props = { type?: string, data?: ListData[], options?: any }

type Options = {
    width?: Number, height?: Number, color?: string, background?: string,
    display?: string, isFlex?: boolean, direction?: string,
    wrap?: string, justifyContent?: string, alignItems?: string,
    alignContent?: string
}

const SidenavList = (props: Props) => {
    const { 
        width, height, color, background, display, isFlex, direction,
        wrap, justifyContent, alignItems, alignContent
    }: Options = props.options;
    const type = props.type ? props.type : 'router';
    const data = props.data ? props.data : [];

    const flex = `
        flex-direction: ${!direction ? 'column' : direction},
        wrap: ${!wrap ? 'no-wrap' : wrap},
        justify-content: ${!justifyContent ? 'center': justifyContent},
        align-items: ${!alignItems ? 'center' : alignItems},
        align-content: ${!alignContent ? 'center' : alignContent}
    `;

    const style = `
        color: ${!color ? 'white' : color},
        background-color: ${!background ? 'black' : background},
        width: ${!width ? '100%' : width + 'px'},
        height: ${!height ? '100%' : height + 'px'},
        display: ${display},
        ${ isFlex ? flex : ''},

    `;

    if (type === 'listing') {
        const [listData, setListData] = useState(data);
        const addToList = (toAdd: ListData) => setListData(prev => prev.concat(toAdd));
        return (
            <ul css={css`${style}`}>
                {listData.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>   
        );
    } 

    //TODO: Add css for icon, add font size, font
    return (
        <ul css={css`${style}`}>
            
        </ul> 
    );
}

export default SidenavList;

// my balls are sweaty, knees weak, arms are heavy, imma cum in this bitch mouth already