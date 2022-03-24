import React from 'react';
import { css } from '@emotion/react'

const styler = css({
    width: 300,
    height: 400
})

type Props = {}

const media_player = (props: Props) => {
  return (
    <div css={styler}>media_players</div>
  )
}

export default media_player