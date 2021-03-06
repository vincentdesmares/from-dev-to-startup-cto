import React from 'react'
import { Heading, Slide, Text, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['slide']}
    bgColor="blue"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <ol>
        <li>It's quite difficult to make people change.</li>
        <li>
          Right now you are alone or with a very small team. It's now that the
          good practices must be put in place.
        </li>
        <li>
          One of the first things I did when I took back the project were
          regressions :)
        </li>
        <li>Link: Be careful to shortcuts! ref: Let's drop redux in...</li>
      </ol>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="white" fit>
      Put in place good practices
    </Heading>
    <Heading size={1} caps lineHeight={1} textColor="pink" fit>
      The earlier the better
    </Heading>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Testing</ListItem>
        <ListItem>CI</ListItem>
        <ListItem>Comments</ListItem>
        <ListItem>Will be harder later</ListItem>
        <ListItem>Take time to think how to code less</ListItem>
        <ListItem>Technical dept can cost your job</ListItem>
      </List>
    </Text>
    <Text bold fit>
      It will allow you to move fast
    </Text>
  </Slide>
)
