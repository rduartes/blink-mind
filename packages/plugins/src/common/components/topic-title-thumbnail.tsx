import { BaseProps, PropKey } from '@blink-mind/renderer-react';
import * as React from 'react';
import cx from 'classnames';
import Highlighter from 'react-highlight-words';

export interface TopicTitleThumbnailProps extends BaseProps {
  titleMaxLength?: number;
  query?: string;
  usePlainText?: boolean;
  active?: boolean;
}

export function TopicTitleThumbnail(props: TopicTitleThumbnailProps) {
  const {
    controller,
    topicKey,
    query,
    active,
    usePlainText = true,
    titleMaxLength = 100,
    ...restProps
  } = props;
  const navigateToTopic = e => {
    controller.run('focusTopicAndMoveToCenter', {
      ...props,
      topicKey
    });
  };
  const topicTitle = controller.getValue(PropKey.TOPIC_TITLE, {
    ...props,
    usePlainText
  });

  // const needTip = topicTitle.length > titleMaxLength;
  // const title = needTip
  //   ? topicTitle.substr(0, titleMaxLength) + '...'
  //   : topicTitle;
  const titleProps = {
    ...restProps,
    key: topicKey,
    active,
    className: cx('bm-topic-title-thumbnail',{
      'bm-topic-title-thumbnail-active': active
    }),
    // onClick: navigateToTopic
  };
  return (
    <div {...titleProps}>
      {query
        ? Highlighter({ searchWords: [query], textToHighlight: topicTitle })
        : topicTitle}
    </div>
  );
}
