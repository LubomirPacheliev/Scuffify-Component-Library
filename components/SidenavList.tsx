import { css } from '@emotion/react';

type Props = {
    width?: Number, height?: Number, color?: string, background?: string,
    display?: string, isFlex?: boolean, direction?: string,
    wrap?: string, justifyContent?: string, alignItems?: string,
    alignContent?: string
}

const SidenavList = (props: Props) => {
    const { 
        width, height, color, background, display, isFlex, direction,
        wrap, justifyContent, alignItems, alignContent
    } = props;

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

    return (
        <ul css={css`${style}`}>sidenav listing biiiitch 🤑</ul>   
    )
}

export default SidenavList;

// my balls are sweaty, knees weak, arms are heavy, imma cum in this bitch mouth already