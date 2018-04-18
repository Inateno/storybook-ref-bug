/**
 * Created on 23/11/17.
 */
import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info';

import Test from "./index";

storiesOf('Ref Instance', module)
    .add('Works in any situation', withInfo(``)(() =>
        <Test>
            <span>toto</span>
        </Test>
    ))
;