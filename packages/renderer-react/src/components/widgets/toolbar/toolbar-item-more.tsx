import { Menu, Popover } from '@blueprintjs/core';
import * as React from 'react';
import { ElementItemConfigs } from '../../../types';
import { iconClassName, IconName } from '../../../utils';
import { ToolbarItem, ToolbarItemPopoverTarget } from '../../common';
export function ToolbarItemMore(props) {
  const { controller } = props;
  const itemConfigs: ElementItemConfigs = controller.run(
    'customizeToolbarItemMore',
    props
  );
  itemConfigs.sort((a, b) => a.order - b.order);
  return (
    <ToolbarItem className={iconClassName(IconName.MORE)} {...props}>
      <Popover enforceFocus={false}>
        <ToolbarItemPopoverTarget />
        <Menu>
          {itemConfigs.map(item =>
            React.createElement(item.element, {
              ...props,
              key: item.order.toString()
            })
          )}
        </Menu>
      </Popover>
    </ToolbarItem>
  );
}