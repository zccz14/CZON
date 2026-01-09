import React from 'react';

export const TagList: React.FC<{
  tags: string[];
}> = props => {
  return (
    <ul className="tags-list">
      {props.tags.map(tag => (
        <li className="tag-item" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};
