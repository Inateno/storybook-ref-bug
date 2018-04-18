/**
 * Created on 23/11/17.
 */
import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info';

import Test from "./index";

storiesOf('Ref String', module)
    .add('Will fail only if local node_modules are installed', withInfo(``)(() =>
        <Test>
            <span>toto</span>
        </Test>
    ))
;