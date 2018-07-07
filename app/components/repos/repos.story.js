'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

const stories = storiesOf('Repos', module)

stories.add('with title prop', () => (
  <Repos title='Favoritos' />
))

stories.add('with repos', () => (
  <Repos title='Favoritos' repos={[]} />
))
